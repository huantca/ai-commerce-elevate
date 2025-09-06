import React from 'react';

interface ProjectDetailsGPGAMALLProps {
    isOpen: boolean;
}

export function ProjectDetailsGPGAMALL({ isOpen }: ProjectDetailsGPGAMALLProps) {
    return (
        <div
            className={`transition-all duration-300 ease-in-out ${isOpen ? 'opacity-100 mt-8' : 'opacity-0 mt-0 h-0 overflow-hidden'}`}
        >
            <div className="bg-gray-50 rounded-xl p-4 md:p-8">
                <div className="space-y-12">
                    {/* CONTEXTE Section */}
                    <div className="space-y-8">
                        <h1 className="text-3xl font-bold text-primary">CONTEXTE</h1>

                        <div className="grid md:grid-cols-2 gap-8 items-center">
                            {/* Left Column - Image */}
                            <div className="w-full max-w-[443px] aspect-[443/301] rounded-lg overflow-hidden">
                                <img
                                    src="/lovable-uploads/img_collaboration_casetudy2.png"
                                    alt="GPGA Mall - Marketplace beauté et cosmétiques"
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            {/* Right Column - Text */}
                            <div className="space-y-6">
                                <h1 className="text-2xl font-semibold text-blue800">
                                    GPGA Mall est une marketplace digitale spécialisée dans la beauté et les cosmétiques.
                                </h1>
                                <div className="space-y-4 text-muted-foreground">
                                    <p className="text-blue800">
                                        La majorité des ventes se réalise via son site web et son application, soutenues par une communauté engagée et des lancements de produits hebdomadaires.
                                    </p>
                                    <p className="text-blue800">
                                        Pour rester perçue comme une plateforme digitale innovante, GPGA souhaite définir et hiérarchiser une courte liste de nouvelles fonctionnalités et d'améliorations. L'objectif est d'offrir une expérience d'achat fluide et inspirante, aussi bien pour les nouveaux utilisateurs que pour les clients fidèles, tout en préservant son style éditorial distinctif.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* COLLABORATION Section */}
                    <div className="space-y-8 pt-12">
                        <h1 className="text-3xl font-bold text-primary">COLLABORATION</h1>
                        <p className="text-blue800 max-w">
                            Grâce à des échanges approfondis avec l'équipe technique de GPGA Mall, nous avons partagé des idées, appliqué la méthode de priorisation RICE et produit des wireframes prêts à être intégrés
                        </p>
                        <div className="space-y-8">
                            <div className="text-center space-y-6">
                                <h2 className="text-2xl font-semibold text-blue800">Trois axes de travail définis</h2>
                                <p className="text-blue800 max-w-3xl mx-auto">
                                    La majorité des ventes se réalise via son site web et son application, soutenues par une communauté engagée et des lancements de produits hebdomadaires.
                                </p>
                            </div>

                            {/* Three Items Grid */}
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8">
                                {/* Item 1 */}
                                <div className="bg-white p-6 rounded-3xl shadow-md">
                                    <h3 className="text-2xl font-semibold text-blue800 mb-3">Navigation</h3>
                                    <p className="text-blue800">
                                        L’objectif est d’offrir un accès direct aux univers beauté de la marketplace, tels que le soin de la peau, le maquillage, la parfumerie et les compléments beauté. Les clients doivent pouvoir passer facilement d’une catégorie à l’autre en un seul clic. Les sous-catégories affichées sous les titres de page, qu’elles soient en texte simple ou enrichies de visuels, facilitent la découverte et rendent l’exploration plus intuitive.
                                    </p>
                                </div>

                                {/* Item 2 */}
                                <div className="bg-white p-6 rounded-3xl shadow-md">
                                    <h3 className="text-2xl font-semibold text-blue800 mb-3">PLP (pages de listing)</h3>
                                    <p className="text-blue800">
                                        L’expérience doit rester claire et facile à lire. Les filtres doivent se concentrer sur les critères essentiels dans la beauté et les cosmétiques : type de produit, besoins de la peau, ingrédients clés, marque, prix et avis clients. Les nouveautés et les promotions peuvent également être mises en avant. Des vignettes épurées et une wishlist bien visible complètent l’expérience.
                                    </p>
                                </div>

                                {/* Item 3 */}
                                <div className="bg-white p-6 rounded-3xl shadow-md">
                                    <h3 className="text-2xl font-semibold text-blue800 mb-3">Expérience d’achat</h3>
                                    <p className="text-blue800">
                                        La fonctionnalité Quick Shop permet aux clients de sélectionner immédiatement teintes, variantes ou formats via une fenêtre pop-in, sans étapes inutiles. Des recommandations discrètes mais utiles, telles que « Vous pourriez aussi aimer » ou « Complétez votre routine », enrichissent la découverte. Un parcours fluide et ininterrompu jusqu’au paiement garantit le maintien du rythme d’achat, de la navigation à la finalisation.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProjectDetailsGPGAMALL;
