'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">sneakers2 documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-bs-toggle="collapse" ${ isNormalMode ?
                                'data-bs-target="#modules-links"' : 'data-bs-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-AppModule-356014b4947cc0371df226fb39693c6fbe5fa3997b743a06774885e6323c495c148c8f1490e10356d7910a032e372925111ecd8c165e6f2bfa7db29bcb2481a6"' : 'data-bs-target="#xs-components-links-module-AppModule-356014b4947cc0371df226fb39693c6fbe5fa3997b743a06774885e6323c495c148c8f1490e10356d7910a032e372925111ecd8c165e6f2bfa7db29bcb2481a6"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-356014b4947cc0371df226fb39693c6fbe5fa3997b743a06774885e6323c495c148c8f1490e10356d7910a032e372925111ecd8c165e6f2bfa7db29bcb2481a6"' :
                                            'id="xs-components-links-module-AppModule-356014b4947cc0371df226fb39693c6fbe5fa3997b743a06774885e6323c495c148c8f1490e10356d7910a032e372925111ecd8c165e6f2bfa7db29bcb2481a6"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link" >AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/AppServerModule.html" data-type="entity-link" >AppServerModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-AppServerModule-67ddef30700817ad67e072580e28865c25e57d43753efc31bf56105b02180fa1a6974c4cded378a518ddd51938f8d772194c4b302fe039276e64d633fb605996"' : 'data-bs-target="#xs-components-links-module-AppServerModule-67ddef30700817ad67e072580e28865c25e57d43753efc31bf56105b02180fa1a6974c4cded378a518ddd51938f8d772194c4b302fe039276e64d633fb605996"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppServerModule-67ddef30700817ad67e072580e28865c25e57d43753efc31bf56105b02180fa1a6974c4cded378a518ddd51938f8d772194c4b302fe039276e64d633fb605996"' :
                                            'id="xs-components-links-module-AppServerModule-67ddef30700817ad67e072580e28865c25e57d43753efc31bf56105b02180fa1a6974c4cded378a518ddd51938f8d772194c4b302fe039276e64d633fb605996"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/InterfaceModule.html" data-type="entity-link" >InterfaceModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-InterfaceModule-fe00269e1b49c99b380f48d98abcbb320841b1f8c112c5bd5bf9ff169900b0f213baa353422437c9a3cab99d54d3f9a163ccc180180f03a22eefac4eecc36d96"' : 'data-bs-target="#xs-components-links-module-InterfaceModule-fe00269e1b49c99b380f48d98abcbb320841b1f8c112c5bd5bf9ff169900b0f213baa353422437c9a3cab99d54d3f9a163ccc180180f03a22eefac4eecc36d96"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-InterfaceModule-fe00269e1b49c99b380f48d98abcbb320841b1f8c112c5bd5bf9ff169900b0f213baa353422437c9a3cab99d54d3f9a163ccc180180f03a22eefac4eecc36d96"' :
                                            'id="xs-components-links-module-InterfaceModule-fe00269e1b49c99b380f48d98abcbb320841b1f8c112c5bd5bf9ff169900b0f213baa353422437c9a3cab99d54d3f9a163ccc180180f03a22eefac4eecc36d96"' }>
                                            <li class="link">
                                                <a href="components/InterfaceComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >InterfaceComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/PagesModule.html" data-type="entity-link" >PagesModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-PagesModule-313e85d0b33604437bb1cd0b5698b0e23b6c33c2bbb76ae7f7bba4490c61b1ef0062638f0af955b304087b31c1e29d2ee663b83b0d17bb5746496155734bb52d"' : 'data-bs-target="#xs-components-links-module-PagesModule-313e85d0b33604437bb1cd0b5698b0e23b6c33c2bbb76ae7f7bba4490c61b1ef0062638f0af955b304087b31c1e29d2ee663b83b0d17bb5746496155734bb52d"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-PagesModule-313e85d0b33604437bb1cd0b5698b0e23b6c33c2bbb76ae7f7bba4490c61b1ef0062638f0af955b304087b31c1e29d2ee663b83b0d17bb5746496155734bb52d"' :
                                            'id="xs-components-links-module-PagesModule-313e85d0b33604437bb1cd0b5698b0e23b6c33c2bbb76ae7f7bba4490c61b1ef0062638f0af955b304087b31c1e29d2ee663b83b0d17bb5746496155734bb52d"' }>
                                            <li class="link">
                                                <a href="components/CatalogoComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CatalogoComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CestaComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CestaComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ContactaComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ContactaComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/FooterComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FooterComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HeaderComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HeaderComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HomeComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HomeComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ServicesModule.html" data-type="entity-link" >ServicesModule</a>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#components-links"' :
                            'data-bs-target="#xs-components-links"' }>
                            <span class="icon ion-md-cog"></span>
                            <span>Components</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="components-links"' : 'id="xs-components-links"' }>
                            <li class="link">
                                <a href="components/DetallesProductoComponent.html" data-type="entity-link" >DetallesProductoComponent</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#injectables-links"' :
                                'data-bs-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/CestaService.html" data-type="entity-link" >CestaService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ProductDescriptionService.html" data-type="entity-link" >ProductDescriptionService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#interfaces-links"' :
                            'data-bs-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/Window.html" data-type="entity-link" >Window</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#miscellaneous-links"'
                            : 'data-bs-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank" rel="noopener noreferrer">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});