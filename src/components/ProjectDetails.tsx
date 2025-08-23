import React, { useRef, useEffect, useState } from 'react';

interface ProjectDetailsProps {
    isOpen: boolean;
}

export const ProjectDetails: React.FC<ProjectDetailsProps> = ({ isOpen }) => {
    const [shouldRender, setShouldRender] = useState(isOpen);
    const contentRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (isOpen) {
            setShouldRender(true);
        } else if (contentRef.current) {
            const timer = setTimeout(() => {
                setShouldRender(false);
            }, 300); // Match this with the animation duration
            return () => clearTimeout(timer);
        }
    }, [isOpen]);

    return (
        <div
            ref={contentRef}
            className={`mt-8 px-8 transition-all duration-500 ease-in-out transform ${
                isOpen 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 -translate-y-4 pointer-events-none'
            }`}
            style={{
                transition: 'opacity 500ms ease-in-out, transform 500ms ease-in-out',
                willChange: 'opacity, transform',
                visibility: shouldRender ? 'visible' : 'hidden',
                height: shouldRender ? 'auto' : 0,
                overflow: 'hidden'
            }}
        >
            {/* CONTEXTE Section */}
            <div className="space-y-6">
                <h3 className="text-3xl md:text-4xl font-bold text-primary text-center">CONTEXTE</h3>
                <div className="relative flex">
                    <div className="flex flex-col items-center mr-2 py-7" style={{ width: 'fit-content' }}>
                        <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
                        <div className="w-[2px] bg-blue-600 flex-1"></div>
                        <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
                    </div>
                    <div className="flex-1">
                        <p className="text-base text-primary/90 max-w-4xl mx-auto text-left">
                            Le défi consistait à créer une nouvelle fonctionnalité dans la souscription digitale de fonds qui regroupe les éléments essentiels permettant aux administrateurs de fonds de traiter efficacement le processus de souscription. Le projet a impliqué le développement de deux offres clés.
                        </p>

                        <div className="grid md:grid-cols-3 gap-6 w-full max-w-4xl mx-auto mt-8 px-0">
                            {/* Item 1 */}
                            <div className=" bg-white border rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
                                <div className="text-left">
                                    <img
                                        src="/lovable-uploads/ic_new_fund.png"
                                        alt="Nouveau fonds"
                                        className="w-[110px] h-[65px] object-cover mb-4"
                                    />
                                    <h4 className="text-xl font-semibold mb-3 text-primary">Création d'un nouveau fonds</h4>
                                    <p className="text-sm text-primary/80">
                                        Un système qui permet aux administrateurs de mettre en place de nouveaux fonds, de générer automatiquement l'enveloppe documentaire complète du fonds et de désigner les contre-signataires requis.
                                    </p>
                                </div>
                            </div>

                            {/* Item 2 */}
                            <div className=" bg-white border rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
                                <div className="text-left">
                                    <img
                                        src="/lovable-uploads/ic_information.png"
                                        alt="Information"
                                        className="w-[110px] h-[65px] object-cover mb-4"
                                    />
                                    <h4 className="text-xl font-semibold mb-3 text-primary">Gestion des informations</h4>
                                    <p className="text-sm text-primary/80">
                                        Un système qui permet aux administrateurs de gérer et de suivre toutes les informations relatives aux fonds existants, y compris les documents, les signataires et les statuts de soumission.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <p className="text-base text-primary/90 max-w-4xl mx-auto text-left mt-8">
                            L’objectif principal était de rationaliser la mise en place des fonds et de renforcer la confiance ainsi que l’efficacité pour les administrateurs et les investisseurs, en se concentrant sur la création de valeur à travers des éléments tels que :
                        </p>

                    </div>
                </div>
                <div className="flex flex-col md:flex-row flex-wrap justify-start gap-6 w-full max-w-4xl mx-auto mt-8">
                    {/* Item 1 */}
                    <div className="bg-white border rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow duration-300 w-fit">
                        <h4 className="text-sm font-semibold" style={{ color: '#052C65' }}>Création d'un nouveau fonds</h4>
                    </div>

                    {/* Item 2 */}
                    <div className="bg-white border rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow duration-300 w-fit">
                        <h4 className="text-sm font-semibold" style={{ color: '#052C65' }}>Fiabilité</h4>
                    </div>

                    {/* Item 3 */}
                    <div className="bg-white border rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow duration-300 w-fit">
                        <h4 className="text-sm font-semibold" style={{ color: '#052C65' }}>Documentation et support complet</h4>
                    </div>
                </div>
            </div>

            {/* COLLABORATION Section */}
            <div className="space-y-6 mt-32">
                <h3 className="text-3xl md:text-4xl font-bold text-primary text-center">COLLABORATION</h3>
                <div className="space-y-4 max-w-4xl mx-auto">
                    <p className="text-xl font-bold text-center" style={{ color: '#052C65' }}>
                        Comprendre les Fund Managers : une approche centrée sur l'utilisateur pour les solutions d'onboarding d'investisseurs
                    </p>
                    <p className="text-lg text-primary/90 text-center">
                        Cette phase nous a permis de mieux définir le périmètre de l'idéation. Pour ce faire, nous avons
                    </p>

                    <div className="grid md:grid-cols-3 gap-6 mt-8">
                        {/* Item 1 */}
                        <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
                            <div className="w-full h-[65px] flex items-center justify-center mb-4">
                                <img
                                    src="/lovable-uploads/img_analysis.png"
                                    alt="Analysis"
                                    className="h-full w-auto max-w-[120px] object-contain"
                                />
                            </div>
                            <h3 className="font-bold text-left mb-2" style={{ color: '#052C65' }}>Analysis</h3>
                            <p className="text-sm text-left" style={{ color: '#052C65' }}>
                                Description for analysis item 1 goes here. This is a sample description text.
                            </p>
                        </div>

                        {/* Item 2 */}
                        <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
                            <div className="w-full h-[65px] flex items-center justify-center mb-4">
                                <img
                                    src="/lovable-uploads/img_discuss.png"
                                    alt="Discussion"
                                    className="h-full w-auto max-w-[120px] object-contain"
                                />
                            </div>
                            <h3 className="font-bold text-left mb-2" style={{ color: '#052C65' }}>Discussion</h3>
                            <p className="text-sm text-left" style={{ color: '#052C65' }}>
                                Organisé des discussions approfondies avec les clients afin de mettre en évidence les fonctionnalités clés du projet.
                            </p>
                        </div>

                        {/* Item 3 */}
                        <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
                            <div className="w-full h-[65px] flex items-center justify-center mb-4">
                                <img
                                    src="/lovable-uploads/img_research.png"
                                    alt="Research"
                                    className="h-full w-auto max-w-[120px] object-contain"
                                />
                            </div>
                            <h3 className="font-bold text-left mb-2" style={{ color: '#052C65' }}>Research</h3>
                            <p className="text-sm text-left" style={{ color: '#052C65' }}>
                                Réalisé une recherche utilisateur détaillée pour comprendre les besoins réels de l’automatisation de la souscription de fonds, les principales caractéristiques d’un tel processus, ainsi que les difficultés rencontrées par les clients avec les méthodes traditionnelles.
                            </p>
                        </div>
                    </div>

                    <div style={{ marginTop: '48px' }}>
                        <p className="text-lg text-primary/90 text-center" style={{ color: '#052C65' }}>
                            Nous avons ensuite hiérarchisé les projets et analysé la situation existante afin que l'idéation soit la plus optimisée possible, garantissant ainsi un meilleur product–market fit.
                            <br />
                            À l'issue de ce travail, trois thématiques clés ont été sélectionnées :
                        </p>
                    </div>
                </div>

                {/* 3 Key Themes */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 justify-center">
                    <div className="bg-white p-4 rounded-lg shadow-md max-w-[280px] mx-auto w-full">
                        <p className="font-bold text-base" style={{ color: '#052C65' }}>
                            1. Le flux de souscription de fonds
                        </p>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-md max-w-[280px] mx-auto w-full">
                        <p className="font-bold text-base" style={{ color: '#052C65' }}>
                            2. La gestion documentaire et la signature électronique
                        </p>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-md max-w-[280px] mx-auto w-full">
                        <p className="font-bold text-base" style={{ color: '#052C65' }}>
                            3. L'intégration de points de contrôle de conformité
                        </p>
                    </div>
                </div>
                <p className="text-lg text-primary/90 text-center" style={{ color: '#052C65' }}>
                    <span className="font-bold">Pourquoi ces choix ?</span> L'équipe B4finance souhaitait renforcer sa plateforme avec rapidité et précision, sans créer de "feature debt", tout en mettant l'accent sur l'expérience utilisateur.
                </p>
            </div>

            {/* Refining Section */}
            <div className="mt-48">
                {/* Part 1: Two Columns */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start mb-0">
                    {/* Left Column */}
                    <div className="space-y-4">
                        <h3 className="text-3xl md:text-4xl font-bold text-primary">Affiner l'expérience utilisateur :</h3>
                        <p className="text-lg text-primary/90"  style={{ color: '#052C65' }}>
                            En travaillant avec l'équipe B4finance, nous avons proposé des solutions pour optimiser le parcours digital de souscription de fonds et répondre aux défis identifiés lors de la phase de découverte. Pour ce faire, nous avons
                        </p>
                    </div>
                    
                    {/* Right Column - Two Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Card 1 */}
                        <div className="bg-white p-6 rounded-lg shadow-md h-full">
                            <div className="w-[90px] h-[60px] mb-4">
                                <img 
                                    src="/lovable-uploads/img_reference.png" 
                                    alt="Référence"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <h4 className="font-bold text-lg mb-2" style={{ color: '#052C65' }}>Référence</h4>
                            <p className="text-sm" style={{ color: '#052C65' }}>
                                Réalisé un benchmark des concurrents directs et indirects (plateformes de souscription de fonds et RegTech), en mettant l'accent sur l'automatisation et la conformité.
                            </p>
                        </div>
                        
                        {/* Card 2 */}
                        <div className="bg-white p-6 rounded-lg shadow-md h-full">
                            <div className="w-[90px] h-[60px] mb-4">
                                <img 
                                    src="/lovable-uploads/img_collaborated.png" 
                                    alt="Collaboration"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <h4 className="font-bold text-lg mb-2" style={{ color: '#052C65' }}>Collaboré</h4>
                            <p className="text-sm" style={{ color: '#052C65' }}>
                                Collaboré avec les parties prenantes de B4finance afin de définir les priorités clés
                            </p>
                        </div>
                    </div>
                </div>
                
                {/* Centered Image - Hidden on mobile */}
                <div className="hidden md:flex justify-center my-0 mx-[30px] md:mx-[121px]">
                    <img 
                        src="/lovable-uploads/img_connect.png" 
                        alt="Connect"
                        className="w-full h-auto"
                    />
                </div>
                
                {/* Part 2: 1/4 - 3/4 Split */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-0">
                    {/* Left Card - 1/4 width */}
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <div className="flex justify-center mb-4">
                            <img 
                                src="/lovable-uploads/img_iteraction.png" 
                                alt="Interaction"
                                className="w-[118px] h-[64px] object-contain"
                            />
                        </div>
                        <h4 className="font-bold text-lg mb-2" style={{ color: '#052C65' }}>Interaction</h4>
                        <p className="text-sm" style={{ color: '#052C65' }}>
                            Conçu et validé des user flows et des prototypes pour améliorer l'onboarding des investisseurs, garantissant ainsi une interaction plus intuitive entre administrateurs et Limited Partners.
                        </p>
                    </div>
                    
                    {/* Right Content - 3/4 width */}
                    <div className="md:col-span-3 space-y-4">
                        <p className="text-lg text-primary/90"  style={{ color: '#052C65' }}>
                            L'objectif était de définir une orientation claire pour chaque initiative et de la transmettre à l'équipe produit. Grâce à un processus de design itératif et à la validation utilisateur, nous avons permis à la plateforme B4finance de simplifier les opérations complexes de gestion de fonds tout en respectant les normes réglementaires les plus strictes.
                        </p>
                        <p className="text-lg text-primary/90"  style={{ color: '#052C65' }}>
                            B4finance a ainsi renforcé sa plateforme SaaS, en proposant des solutions basées sur l'IA qui rationalisent l'onboarding des fonds et automatisent le KYC/AML avec précision. Notre collaboration a abouti au développement de nouvelles fonctionnalités apportant davantage de transparence, de confiance et d'efficacité, tant pour les fund managers que pour les investisseurs. Cette base solide permet désormais à B4finance de poursuivre son expansion, en offrant des solutions RegTech de nouvelle génération et en consolidant sa position de catalyseur digital pour le private equity et l'asset management.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};
