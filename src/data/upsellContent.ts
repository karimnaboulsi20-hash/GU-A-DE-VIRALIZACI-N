import { BenefitItem, BonusItem, FaqItem } from '../types';
import guideMockup from '../assets/images/viral_master_guide_mockup_1793370554906.jpg';
import phoneGrowth from '../assets/images/smartphone_viral_growth_1793370555605.jpg';
import studioBackdrop from '../assets/images/viral_creator_studio_1793370556742.jpg';

export const ASSETS = {
  guideMockup,
  phoneGrowth,
  studioBackdrop,
};

export const PROBLEM_STATEMENT = {
  quote: "Tener miles de videos listos sin saber cómo funciona el algoritmo es como comprar un Ferrari y dejarlo encerrado en el garaje.",
  subtext: "El contenido es el combustible, pero la estrategia de viralización es el motor que genera millones de reproducciones.",
};

export const BENEFITS: BenefitItem[] = [
  {
    id: 'benefit-1',
    title: 'Más Visualizaciones',
    subtitle: 'Rompe la barrera de las 200 vistas',
    metric: '+3.8M',
    metricLabel: 'Vistas orgánicas promedio',
    description: 'Aprende a disparar la retención en los primeros 3 segundos para que el algoritmo recomiende tus videos una y otra vez.',
    iconType: 'views',
    badge: 'Retención Extrema',
  },
  {
    id: 'benefit-2',
    title: 'Crecimiento Más Rápido',
    subtitle: 'De 0 a miles de seguidores reales',
    metric: '+1,250%',
    metricLabel: 'Aceleración en 14 días',
    description: 'Transforma espectadores curiosos en una comunidad leal de seguidores sin gastar un solo centavo en publicidad.',
    iconType: 'speed',
    badge: 'Crecimiento Orgánico',
  },
  {
    id: 'benefit-3',
    title: 'Estrategias de Viralización',
    subtitle: 'El paso a paso exacto y probado',
    metric: '94.2%',
    metricLabel: 'Tasa de efectividad de ganchos',
    description: 'Domina los ganchos psicológicos, las tendencias sonoras y los horarios dorados de publicación en TikTok, Reels y Shorts.',
    iconType: 'strategy',
    badge: 'Método Científico',
  },
];

export const BONUSES: BonusItem[] = [
  {
    id: 'bonus-1',
    title: 'Bóveda Secreta de 150 Ganchos (Hooks) Magnéticos',
    value: 37,
    description: 'Frases de apertura comprobadas para detener el scroll de inmediato en TikTok e Instagram.',
    tag: 'Acceso Inmediato',
  },
  {
    id: 'bonus-2',
    title: 'Checklist Anti-Shadowban & Horarios de Oro',
    value: 29,
    description: 'La guía técnica para configurar tus cuentas y evitar sanciones invisibles que matan el alcance.',
    tag: 'Plantilla PDF',
  },
  {
    id: 'bonus-3',
    title: 'Calculadora de Retención & Diagnóstico de Algoritmo',
    value: 31,
    description: 'Herramienta interactiva para saber con precisión quirúrgica por qué un video no se viraliza.',
    tag: 'Herramienta Digital',
  },
];

export const FAQS: FaqItem[] = [
  {
    question: '¿Por qué necesito esta guía si ya compré el Pack de Videos?',
    answer: 'El Pack de Videos te entrega el mejor material audiovisual listo para publicar, pero si publicas sin entender la retención, los ganchos iniciales y las señales del algoritmo, tus videos pueden quedarse en 200 vistas. Esta guía te da el método exacto para que cada video que publiques explote en reproducciones.',
  },
  {
    question: '¿Funciona para cuentas que están empezando desde cero?',
    answer: 'Sí, está diseñada específicamente para cuentas nuevas o estancadas. Te muestra cómo enviar las señales correctas a los algoritmos de TikTok, Instagram Reels y YouTube Shorts desde la primera publicación.',
  },
  {
    question: '¿Cómo recibiré el acceso a la Guía Viral Master?',
    answer: 'El acceso es 100% digital e inmediato. Una vez que confirmes la adición a tu pedido, la Guía Maestra en formato interactivo y todos los bonus se vincularán directamente a tu cuenta de entrega del Pack Viral Master.',
  },
  {
    question: '¿Tiene garantía de satisfacción?',
    answer: 'Completamente. Tienes 30 días de garantía blindada. Si aplicas el método y no logras disparar tus visualizaciones y seguidores, te devolvemos el 100% de tu dinero sin preguntas.',
  },
];
