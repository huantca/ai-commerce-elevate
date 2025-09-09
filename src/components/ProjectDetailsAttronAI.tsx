interface ProjectDetailsAttronAIProps {
    isOpen: boolean;
}

export function ProjectDetailsAttronAI({ isOpen }: ProjectDetailsAttronAIProps) {
    return (
        <div
            className={`transition-all duration-300 ease-in-out ${isOpen ? 'opacity-100 mt-8' : 'opacity-0 mt-0 h-0 overflow-hidden'}`}
        >
            <div className="bg-white rounded-xl p-4 md:p-8">
                <div className="space-y-12">
                    {/* CONTEXTE Section */}
                    <div className="space-y-8">
                        <h1 className="text-3xl font-bold text-primary">CONTEXTE</h1>

                        <div className="grid md:grid-cols-2 gap-8 items-center">
                            {/* Left Column - Text */}
                            <div className="space-y-6">
                                <h1 className="text-2xl font-semibold text-blue800">
                                    AttornAI est une idée née de l'expérience personnelle du client.
                                </h1>
                                <div className="space-y-3 text-muted-foreground">
                                    <p className="text-blue800">
                                        En tant que candidat à l'examen du barreau et fondateur d'un cabinet de conseil juridique, il a été confronté à de grandes difficultés pour rassembler, compiler et structurer les supports d'étude et les plans de cours. Ces obstacles l'ont inspiré à explorer des moyens d'<strong>automatiser l'apprentissage, la correction, l'évaluation et les tests</strong> pour tous types d'examens juridiques. </p>
                                    <p className="text-blue800">
                                        La plateforme a été conçue pour répondre à un problème bien connu dans l’enseignement du droit : de nombreux étudiants, et même de jeunes avocats, peinent à acquérir les compétences essentielles, à la fois techniques et comportementales, avant d’avoir une réelle expérience sur le terrain.
                                    </p>
                                </div>
                            </div>

                            {/* Right Column - Image */}
                            <div className="w-full max-w-[443px] aspect-[443/301] rounded-lg overflow-hidden mx-auto">
                                <img
                                    src="/lovable-uploads/img_collaboration_casetudy2.png"
                                    alt="Collaboration pour AttornAI"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>

                        <div className="pt-4 text-muted-foreground">
                            <p className="text-blue800">
                                <strong>Défis d'exécution</strong> : Le client n'étant pas un fondateur technique, il lui était difficile de traduire ses besoins ou de collaborer efficacement avec les équipes de développement. Ajoutés à la pression du temps et à la complexité des outils nécessaires, ces facteurs ont rendu la tâche particulièrement difficile pour identifier le bon partenaire technique capable de concrétiser sa vision.
                            </p>
                        </div>
                    </div>

                    {/* COLLABORATION Section */}
                    <div className="space-y-8 pt-12">
                        <h1 className="text-3xl font-bold text-primary">COLLABORATION</h1>

                        <div className="grid md:grid-cols-2 gap-8 items-center">
                            {/* Left Column - Image */}
                            <div className="w-full max-w-[443px] aspect-[443/301] rounded-lg overflow-hidden">
                                <img
                                    src="/lovable-uploads/img_collaboration_casetudy2.png"
                                    alt="Collaboration pour AttornAI"
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            {/* Right Column - Text */}
                            <div className="space-y-6">
                                <h2 className="text-2xl font-semibold text-blue800">Recherche Utilisateur</h2>
                                <p className="text-blue800">Collaboration pour AttornAI</p>

                                <div>
                                    <p className="text-blue800 font-medium mb-4">Enseignements clés des utilisateurs :</p>
                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                        {/* Item 1 */}
                                        <div className="bg-white p-6 rounded-2xl shadow-md">
                                            <h3 className="font-semibold text-blue800 mb-2">Précision</h3>
                                            <p className="text-blue800 text-sm">les réponses doivent être exactes et fiables</p>
                                        </div>

                                        {/* Item 2 */}
                                        <div className="bg-white p-6 rounded-2xl shadow-md">
                                            <h3 className="font-semibold text-blue800 mb-2">Clarté</h3>
                                            <p className="text-blue800 text-sm">éviter les hallucinations, la verbosité et le jargon juridique trop complexe</p>
                                        </div>

                                        {/* Item 3 */}
                                        <div className="bg-white p-6 rounded-2xl shadow-md">
                                            <h3 className="font-semibold text-blue800 mb-2">Cohérence</h3>
                                            <p className="text-blue800 text-sm">garantir des résultats fiables tout au long de longues sessions d'étude</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                    {/* Full Width Light Blue Background Section */}
                    <div className="w-full bg-[#EAF1F8] py-12 mt-12">
                        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                                {/* Left Column - Original Content */}
                                <div className="text-left">
                                    <h2 className="text-2xl font-bold text-blue800 mb-6">Alignement des Parties Prenantes</h2>
                                    <p className="text-blue800 mb-8 max-w-[80%]">
                                        Avec notre capacité à fournir des résultats clairs et fiables à partir d'un minimum d'entrées, nous avons identifié les parties prenantes clés pour assurer une intégration réussie de l'IA.
                                    </p>

                                    <div className="flex flex-col md:flex-row gap-6">
                                        <div className="bg-white p-6 rounded-3xl shadow-md md:w-1/3">
                                            <h3 className="font-semibold text-blue800 text-lg mb-2">Équipe Conformité</h3>
                                            <p className="text-blue800">
                                                Assurer l'alignement réglementaire et garantir la précision.
                                            </p>
                                        </div>

                                        <div className="bg-white p-6 rounded-3xl shadow-md md:w-1/3">
                                            <h3 className="font-semibold text-blue800 text-lg mb-2">Équipe interned’AttornAI</h3>
                                            <p className="text-blue800">
                                                collaboration sur la logique et le développement de la plateforme.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Right Column - Stratégie Produit */}
                                <div>
                                    <h2 className="text-2xl font-bold text-blue800 mb-6">Stratégie Produit</h2>

                                    <div className="space-y-6">
                                        <div>
                                            <h3 className="font-semibold text-blue800 text-lg">Objectif</h3>
                                            <p className="text-blue800 mt-1">
                                            Définir les fonctionnalités principales et l’architecture de la plateforme avec AttornAI.
                                            </p>
                                        </div>

                                        <div>
                                            <h3 className="font-semibold text-blue800 text-lg">Approche</h3>
                                            <p className="text-blue800 mt-1">
                                            Fonder les décisions sur la recherche utilisateur et une vision produit claire.
                                            </p>
                                        </div>

                                        <div>
                                            <h3 className="font-semibold text-blue800 text-lg mb-3">Questions clés explorées</h3>
                                            <div className="flex flex-wrap gap-4">
                                                <div className="bg-white p-5 rounded-3xl shadow-md w-full md:w-[calc(50%-0.5rem)] lg:w-[calc(40%-0.5rem)]">
                                                    <p className="text-blue800">
                                                        Comment découper le parcours utilisateur pour offrir une expérience fluide ?
                                                    </p>
                                                </div>
                                                <div className="bg-white p-5 rounded-3xl shadow-md w-full md:w-[calc(50%-0.5rem)] lg:w-[calc(40%-0.5rem)]">
                                                    <p className="text-blue800">
                                                        Comment maximiser la rétention et la pratique pour la préparation de l'examen du barreau ?
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Process Section */}
                    <div className="w-full py-12">
                        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                                {/* Left Column - Conception UX */}
                                <div className="bg-white pl-8 pr-0 py-8 rounded-3xl shadow-md">
                                    <h2 className="text-2xl font-bold text-blue800 mb-6">Conception UX</h2>
                                    
                                    <div className="mb-6">
                                        <h3 className="font-semibold text-blue800 text-lg mb-2">Périmètre</h3>
                                        <p className="text-blue800">
                                            Conception de la version desktop.
                                        </p>
                                    </div>

                                    <div className="flex flex-col md:flex-row">
                                        <div className="md:w-1/2">
                                            <h3 className="font-semibold text-blue800 text-lg mb-2">Approche</h3>
                                            <p className="text-blue800">
                                                Créer une interface intuitive et simple d'utilisation, adaptée aux utilisateurs non techniques.
                                            </p>
                                        </div>
                                        <div className="md:w-1/2 flex items-right justify-end">
                                            <img 
                                                src="/lovable-uploads/img_ui_ux.png" 
                                                alt="Laptop interface preview" 
                                                className="w-44 h-40 object-contain"
                                            />
                                        </div>
                                    </div>
                                </div>

                                {/* Right Column - Tests Utilisateurs */}
                                <div className="bg-white pl-8 pr-0 py-8 rounded-3xl shadow-md">
                                    <h2 className="text-2xl font-bold text-blue800 mb-6">Tests Utilisateurs</h2>
                                    <p className="text-blue800 mb-8">
                                        Réalisés par l'équipe interne d'AttornAI, avec des tests utilisateurs en collaboration avec BKPlus.
                                    </p>
                                    <div className="flex justify-end">
                                        <img 
                                            src="/lovable-uploads/img_tests_casestudy2.png" 
                                            alt="User testing session" 
                                            className="w-64 h-40 object-cover rounded-lg"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* What We Did Section */}
                    <div className="w-full bg-gray-50">
                        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                            <h2 className="text-3xl font-bold text-center text-blue800 mb-12">Ce que nous avons fait</h2>
                            
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                                {/* Item 1 */}
                                <div className="bg-white p-6 rounded-3xl shadow-xl">
                                    <div className="flex justify-center mb-6">
                                        <div className="w-[70px] h-[67px] overflow-hidden rounded-lg flex items-center">
                                            <img 
                                                src="/lovable-uploads/img_interface_cs2.png" 
                                                alt="Interface simplifiée"
                                                className="w-full h-full object-contain"
                                            />
                                        </div>
                                    </div>
                                    <h3 className="text-xl font-bold text-blue800 mb-3">Interface simplifiée</h3>
                                    <p className="text-blue800">
                                        Création d'un parcours utilisateur fluide, adapté aux besoins des utilisateurs non techniques.
                                    </p>
                                </div>

                                {/* Item 2 */}
                                <div className="bg-white p-6 rounded-3xl shadow-xl">
                                    <div className="flex justify-center mb-6">
                                        <div className="w-[128px] h-[71px] overflow-hidden rounded-lg flex items-center">
                                            <img 
                                                src="/lovable-uploads/img_response_cs2.png" 
                                                alt="Réactivité et clarté"
                                                className="w-full h-full object-contain"
                                            />
                                        </div>
                                    </div>
                                    <h3 className="text-xl font-bold text-blue800 mb-3">Réactivité et clarté</h3>
                                    <p className="text-blue800">
                                        Optimisation de l'UI pour rendre la plateforme plus agréable et facile à naviguer.
                                    </p>
                                </div>

                                {/* Item 3 */}
                                <div className="bg-white p-6 rounded-3xl shadow-xl">
                                    <div className="flex justify-center mb-6">
                                        <div className="w-[80px] h-[71px] overflow-hidden rounded-lg flex items-center">
                                            <img 
                                                src="/lovable-uploads/img_implement_ai_cs2.png" 
                                                alt="Implémentation de l'IA"
                                                className="w-full h-full object-contain"
                                            />
                                        </div>
                                    </div>
                                    <h3 className="text-xl font-bold text-blue800 mb-3">Implémentation de l'IA</h3>
                                    <p className="text-blue800">
                                        Intégration du modèle d'IA dans la plateforme et amélioration continue grâce à l'apprentissage à partir des réponses et des interactions des utilisateurs.
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

export default ProjectDetailsAttronAI;
