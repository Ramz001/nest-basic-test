import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { apiReference } from '@scalar/nestjs-api-reference';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Generate the OpenAPI document
  const config = new DocumentBuilder()
    .setTitle('My API')
    .setDescription('API docs')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, config);

  // Optional: host the raw OpenAPI JSON if you want it separately
  SwaggerModule.setup('openapi', app, document);

  // Serve Scalar API Reference UI at /reference
  app.use(
    '/reference',
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
    apiReference({
      // Pass the OpenAPI doc content directly
      content: document,

      // Choose a theme (default, alternate, moon, purple, solarized, etc.)
      theme: 'default',

      // You can add more config options here if needed
    }),
  );

  await app.listen(3000);
  console.log('Scalar API docs available at: http://localhost:3000/reference');
}
void bootstrap();
