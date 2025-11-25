import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { faTaxi, faUtensils, faMapMarkedAlt } from "@fortawesome/free-solid-svg-icons";

export type ServiceCategory = "transport" | "restaurant" | "tour";

export interface Service {
    id: string;
    name: string;
    category: ServiceCategory;
    address: string;
    description?: string;
    phone?: string;
    specialty?: string;
    hours?: string;
}

export interface ServiceCategoryInfo {
    id: ServiceCategory;
    title: string;
    icon: IconDefinition;
    color: string;
    gradient: string;
}

export const serviceCategories: ServiceCategoryInfo[] = [
    {
        id: "transport",
        title: "Transporte",
        icon: faTaxi,
        color: "#3B82F6",
        gradient: "from-blue-500 to-blue-600",
    },
    {
        id: "restaurant",
        title: "Restaurantes",
        icon: faUtensils,
        color: "#F97316",
        gradient: "from-orange-500 to-orange-600",
    },
    {
        id: "tour",
        title: "Tours",
        icon: faMapMarkedAlt,
        color: "#10B981",
        gradient: "from-green-500 to-green-600",
    },
];

export const services: Service[] = [
    // Servicios de Transporte
    {
        id: "taxi-seguro",
        name: "Taxi Seguro - Cajamarca",
        category: "transport",
        address: "Jr. Jose Olaya 298",
        description: "Servicio confiable y seguro las 24 horas",
    },
    {
        id: "taxis-unidos",
        name: "Taxis Unidos Cajamarca",
        category: "transport",
        address: "Jr. Alfonso Ugarte 355",
        description: "Servicio unificado de taxis con amplia cobertura",
    },
    {
        id: "taxi-plus",
        name: "Taxi Plus",
        category: "transport",
        address: "Open Plaza, Cajamarca",
        description: "Servicio premium de transporte",
    },
    {
        id: "grupo-multiservis",
        name: "Grupo Multiservis",
        category: "transport",
        address: "Huacariz",
        description: "Servicio con buena reputación en la zona",
    },

    // Restaurantes
    {
        id: "qhaliche",
        name: "Qhaliche",
        category: "restaurant",
        address: "Jr. Belaunde Terry",
        specialty: "Bar restaurante",
        hours: "Abierto 24 horas",
        description: "Bar restaurante abierto las 24 horas",
    },
    {
        id: "villa-rica",
        name: "Villa Rica Churrasquería",
        category: "restaurant",
        address: "Baños del Inca",
        specialty: "Carnes a la parrilla",
        description: "Especialidad en carnes y parrillas",
    },
    {
        id: "el-pez-loco",
        name: "El Pez Loco",
        category: "restaurant",
        address: "Jirón Cruz de Piedra",
        specialty: "Pescados y mariscos",
        description: "Restaurante especializado en pescados y mariscos frescos",
    },
    {
        id: "el-querubino",
        name: "El Querubino Restaurante - Café",
        category: "restaurant",
        address: "Amalia Puga",
        specialty: "Café y comidas ligeras",
        description: "Ideal para café y comidas ligeras en ambiente acogedor",
    },
    {
        id: "paprika",
        name: "Restaurante Paprika Cajamarca",
        category: "restaurant",
        address: "Jr del Batán",
        specialty: "Cocina variada",
        description: "Amplia variedad de platos de cocina nacional e internacional",
    },

    // Agencias de Tours
    {
        id: "adventur-travel",
        name: "ADVENTUR TRAVEL",
        category: "tour",
        address: "Cajamarca",
        description: "Agencia de viajes a Cajamarca, Arequipa, Cusco, Tarapoto",
    },
    {
        id: "cajamarca-travel",
        name: "Cajamarca Travel",
        category: "tour",
        address: "Cajamarca",
        description: "Tour Operador especializado en la región",
    },
    {
        id: "tm-travel",
        name: "TM Travel",
        category: "tour",
        address: "Cajamarca",
        description: "Agencia de tours locales y nacionales",
    },
    {
        id: "campina-tours",
        name: "CAMPIÑA TOURS",
        category: "tour",
        address: "Cajamarca",
        description: "Tours por la campiña cajamarquina",
    },
    {
        id: "yanac-travel",
        name: "YANAC TRAVEL",
        category: "tour",
        address: "Cajamarca",
        description: "Tour Operador con experiencia en la zona",
    },
    {
        id: "quilla-tours",
        name: "QUILLA TOURS CAJAMARCA",
        category: "tour",
        address: "Cajamarca",
        description: "Tours especializados en atractivos turísticos de Cajamarca",
    },
    {
        id: "turismo-cajamarca",
        name: "Turismo Cajamarca",
        category: "tour",
        address: "Cajamarca",
        description: "Agencia con amplia oferta de tours",
    },
    {
        id: "sierra-dorada",
        name: "Sierra Dorada - Cajamarca Tours",
        category: "tour",
        address: "Cajamarca",
        description: "Tours a Baños del Inca, Cumbemayo, Granja Porcón y más",
    },
];

export const getServicesByCategory = (category: ServiceCategory): Service[] => {
    return services.filter((service) => service.category === category);
};

export const getCategoryInfo = (category: ServiceCategory): ServiceCategoryInfo | undefined => {
    return serviceCategories.find((cat) => cat.id === category);
};
