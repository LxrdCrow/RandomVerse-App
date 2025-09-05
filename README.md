# RandomVerse

- Node.js
- TypeScript
- MongoDB


## About project




## Repository


    src/
        database/
            db.ts

        controllers/
            world.controller.ts
            character.controller.ts
            creature.controller.ts
            region.controller.ts
            item.controller.ts

        models/
            index.ts
        
            /character
                character.generator.ts
                character.schema.ts
                index.ts

            /content
                creature.model.ts
                index.ts
                item.model.ts
                quest.model.ts

            /region
                index.ts
                region.generator.ts
                region.schema.ts

            /world
                index.ts
                world.generator.ts
                world.schema.ts
            
        config/
            env.ts
            gameConfig.ts

        
        routes/
            world.routes.ts
            character.routes.ts
            creature.routes.ts
            region.routes.ts
            item.routes.ts

        services/
            world.service.ts
            character.service.ts
            creature.service.ts
            region.service.ts
            item.service.ts

        utils/
            middleware/
                asyncHandler.ts
                errorHandler.ts
                requestId.ts 
            
            errors/
                AppError.ts
            
            helpers/
                pagination.ts
                random.ts
            
            index.ts

    index.ts
    server.ts
    .gitignore





