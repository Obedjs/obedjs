import { controllerTemplate } from '../templates/controller.template';
import { serviceTemplate } from '../templates/service.template';
import { routeTemplate } from '../templates/route.template';
import { modelTemplate } from '../templates/model.template';
import { middlewareTemplate } from '../templates/middleware.template';
import { configTemplate } from '../templates/config.template';
import { testTemplate } from '../templates/test.template';
import { e2eTemplate } from '../templates/e2e.template';

export const templates = {
  controller: controllerTemplate,
  service: serviceTemplate,
  route: routeTemplate,
  model: modelTemplate,
  middleware: middlewareTemplate,
  config: configTemplate,
  test: testTemplate,
  e2e: e2eTemplate,
};
