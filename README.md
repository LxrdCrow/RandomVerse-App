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

        models/
        
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
        logs/
        routes/
            world.route.ts
            character.route.ts

        services/
            world.service.ts
            character.service.ts

        utils/

        index.ts
        server.ts
        .env
        .gitignore



### Work in progress

Next task: build controller-service-route of 'region'