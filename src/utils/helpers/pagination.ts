// src/utils/helpers/pagination.ts
import { ParsedQs } from 'qs';

export interface PaginationParams {
  page: number;
  limit: number;
  skip: number;
  sort?: string;
}

export interface PaginationOptions {
  defaultLimit?: number;
  maxLimit?: number;
  defaultPage?: number;
}

/**
 * Legge req.query (o un oggetto simile) e ritorna { page, limit, skip, sort } già validati.
 *
 * @param query req.query
 * @param opts defaultLimit / maxLimit (es. da GAME_CONFIG)
 */
export function parsePagination(
  query: ParsedQs | Record<string, any>,
  opts: PaginationOptions = {}
): PaginationParams {
  const defaultLimit = opts.defaultLimit ?? 20;
  const maxLimit = opts.maxLimit ?? 100;
  const defaultPage = opts.defaultPage ?? 1;

  // estrai e pulisci
  const rawPage = query.page ?? query.p ?? undefined;
  const rawLimit = query.limit ?? query.l ?? undefined;
  const rawSort = query.sort ?? undefined;

  // parse numeri
  const pageNum = parseInt(String(rawPage ?? defaultPage), 10);
  const limitNum = parseInt(String(rawLimit ?? defaultLimit), 10);

  const page = Number.isFinite(pageNum) && pageNum > 0 ? pageNum : defaultPage;
  let limit = Number.isFinite(limitNum) && limitNum > 0 ? limitNum : defaultLimit;
  if (limit > maxLimit) limit = maxLimit;

  const skip = (page - 1) * limit;

  return {
    page,
    limit,
    skip,
    sort: rawSort ? String(rawSort) : undefined,
  };
}

/**
 * Format helper per la risposta paginata.
 * Ritorna { data, meta: { total, page, limit, totalPages } }
 */
export function formatPaginatedResponse<T>(data: T[], total: number, page: number, limit: number) {
  const totalPages = limit > 0 ? Math.ceil(total / limit) : 1;
  return {
    data,
    meta: {
      total,
      page,
      limit,
      totalPages,
    },
  };
}
