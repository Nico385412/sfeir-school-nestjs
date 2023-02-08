function introductionSlides() {
  return ["00-school/00-TITLE.md"];
}

function speakerSlides() {
  return [
    "100-speaker/nicolas-frizzarin.md",
    "100-speaker/nicolas-hansse.md",
    "100-speaker/axel-latour.md",
  ];
}

function setupSlides() {
  return ["01-setup-env/01-transition.md", "01-setup-env/02-installation.md"];
}

function bootstrapingSlide() {
  return [
    "02-bootstraping/01-transition.md",
    "02-bootstraping/02-bootstrapping.md",
    "02-bootstraping/03-under-hood.md",
    "02-bootstraping/100-exercice-bootstraping.md",
  ];
}

function controllerSlide() {
  return [
    "03-controller/01-transition.md",
    "03-controller/02-definition.md",
    "03-controller/03-handler.md",
    "03-controller/100-exercice-create-controller.md",
  ];
}

function providerSlide() {
  return [
    "04-provider/01-transition.md",
    "04-provider/02-definition.md",
    "04-provider/100-exercice-create-classic-provider.md",
  ];
}

function moduleSlide() {
  return [
    "05-modules/01-transition.md",
    "05-modules/02-definition.md",
    "05-modules/03-module-types.md",
    "05-modules/100-exercice-module-architecture.md",
  ];
}

function middlewareSlide() {
  return [
    "06-middleware/01-transition.md",
    "06-middleware/02-definition.md",
    "06-middleware/03-register.md",
    // "06-middleware/100-middleware.md",
  ];
}

function exceptionSlide() {
  return [
    "07-exception/01-transition.md",
    "07-exception/02-definition.md",
    "07-exception/100-exception-using.md",
    "07-exception/03-catch-exception.md",
    "07-exception/101-exception-catching.md",
  ];
}

function pipeSlide() {
  return [
    "08-pipe/01-transition.md",
    "08-pipe/02-definition.md",
    "08-pipe/100-pipe-using.md",
    "08-pipe/03-custom-pipe.md",
    "08-pipe/100-pipe-creation.md",
  ];
}

function guardsSlide() {
  return [
    "09-guards/01-transition.md",
    "09-guards/02-definition.md",
    "09-guards/03-registration.md",
    // "09-guards/100-guards.md",
  ];
}

function interceptorsSlide() {
  return [
    "10-interceptors/01-transition.md",
    "10-interceptors/02-definition.md",
    "10-interceptors/03-registration.md",
    // "10-interceptors/100-interceptors.md",
  ];
}

function decoratorsSlide() {
  return [
    "11-custom-decorator/01-transition.md",
    "11-custom-decorator/02-definition.md",
    // "11-custom-decorator/100-custom-decorator.md",
  ];
}

function scopeInjectionSLides() {
  return [
    "12-injection-scope/01-transition.md",
    "12-injection-scope/02-definition.md",
    "12-injection-scope/03-provider-scope-registration.md",
    "12-injection-scope/04-context-and-request.md",
    // "12-injection-scope/100-injection-scope.md",
  ];
}

function validationDataSlides() {
  return [
    "15-validation-body/01-transition.md",
    "15-validation-body/02-introduction.md",
    "15-validation-body/03-class-validator.md",
    "15-validation-body/100-validation-exercice-body.md",
  ];
}

function configurationSlide() {
  return [
    "06-configuration/01-transition.md",
    "06-configuration/02-introduction.md",
    "06-configuration/03-configuration.md",
    "06-configuration/04-config-service.md",
    "06-configuration/100-exercice-basics-configuration.md",
    "06-configuration/05-configuration-validation.md",
    "06-configuration/100-exercice-basics-validation.md",
  ];
}

function testingSlides() {
  return [
    "99-testing/00-transition.md",
    "99-testing/01-setup.md",
    "99-testing/02-unit-testing.md",
    "99-testing/03-e2e-testing.md",
  ];
}

function customProviderSlide() {
  return [
    "16-custom-provider/01-register-way.md",
    // "16-custom-provider/100-exercice-create-custom-provider.md",
  ];
}

function dynamicModuleSlide() {
  return ["17-dynamic-module/01-dynamic-module.md"];
}

function lifecycleSlides() {
  return ["13-lifecycles/01-transition.md", "13-lifecycles/02-introduction.md"];
}

export function dayOneSlides() {
  return [
    ...introductionSlides(),
    ...speakerSlides(),
    ...setupSlides(),
    ...bootstrapingSlide(), // LAB
    ...controllerSlide(), // LAB
    ...providerSlide(), // LAB (SERVICE)
    ...moduleSlide(), // LAB
    ...lifecycleSlides(),
    ...configurationSlide(), // LIVE CODING
    ...exceptionSlide(), /// CONDITION
    ...pipeSlide(), // LAB
    ...validationDataSlides(),
    ...testingSlides(),
    ...interceptorsSlide(),
    ...scopeInjectionSLides(),
    ...guardsSlide(),
    ...middlewareSlide(),
    ...decoratorsSlide(),
    ...customProviderSlide(),
    ...dynamicModuleSlide(),
  ];
}
