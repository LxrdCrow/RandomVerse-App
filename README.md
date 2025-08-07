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

        logs/
        
        routes/
            world.routes.ts
            character.routes.ts
            creature.routes.ts
            region.routes.ts

        services/
            world.service.ts
            character.service.ts
            creature.service.ts
            region.service.ts

        utils/

        index.ts
        server.ts
        .gitignore



### Work in progress

Next task: build controller-service-route of 'item'