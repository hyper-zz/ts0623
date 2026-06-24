// TODO: Remove or connect this copy object when language switching is finalized.
export const copy = {
  en: {
    nav: {
      products: "Products",
      allProducts: "All Products",
      development: "Development Projects",
      about: "About",
      contact: "Contact",
      language: "中文",
      request: "Start a project",
    },
    hero: {
      eyebrow: "Vehicle refrigeration systems",
      title: "Cold-chain equipment shaped for movement.",
      text: "Travel Science is the vehicle refrigeration product brand by Kelvcoop, building portable refrigerators, car fridge systems, and OEM/ODM projects for outdoor brands, vehicle platforms, and high-volume distributors.",
      primary: "Explore products",
      secondary: "View development capability",
      statA: "11",
      statALabel: "Product series",
      statB: "ISO9001 + CE CB RED RoHS",
      statBLabel: "Certified systems",
      statC: "Global",
      statCLabel: "Export ready",
    },
    sections: {
      seriesEyebrow: "Complete range",
      seriesTitle: "A product system from compact cabins to expedition boxes.",
      seriesText:
        "Each series is treated as a product platform: industrial design, structure, cooling performance, tooling, labels, packaging, and production can be adapted for your channel.",
      viewerEyebrow: "Interactive product viewer",
      viewerTitle: "Drag the product to inspect the form.",
      viewerText:
        "The detail page reserves a 3D/360 viewer. This prototype uses web-optimized multi-angle renders; when a compressed GLB or CAD-derived model is ready, the same position can become a full 3D model viewer.",
      projectsEyebrow: "DFM + OEM/ODM",
      projectsTitle: "From industrial design to mass production.",
      projectsText:
        "The development page turns your factory capability into a clear buyer journey: concept, mechanical design, prototype, validation, certification support, tooling, and assembly.",
      productsTitle: "All product series",
      productsText:
        "Filter by platform, compare models, then open a series page for specifications, scenes, details, and the 3D viewing position.",
      developmentTitle: "Development projects",
      developmentText:
        "A project-led page for buyers who care about design execution, factory control, and reliable launch.",
      contactTitle: "Build a new car refrigerator line with Travel Science.",
      contactText:
        "Send product targets, application scenarios, or a reference brief. The team can evaluate structure, cost, tooling, MOQ, and production path.",
    },
    ui: {
      openSeries: "Open series",
      viewAll: "View all products",
      details: "Series details",
      models: "Models",
      highlights: "Highlights",
      spec: "Specification focus",
      viewer: "360 viewer",
      drag: "Drag / swipe to rotate",
      auto: "Auto",
      manual: "Manual",
      available: "Web-ready 360",
      reserved: "3D slot reserved",
      inquiry: "Request quote",
      contactEmail: "info@kelvcoop.com",
      filterAll: "All",
      capacity: "Capacity",
      voltage: "Voltage",
      cooling: "Cooling",
      application: "Application",
      next: "Next step",
    },
  },
  zh: {
    nav: {
      products: "产品",
      allProducts: "全部产品",
      development: "开发项目",
      about: "关于我们",
      contact: "联系",
      language: "EN",
      request: "启动项目",
    },
    hero: {
      eyebrow: "车载制冷系统",
      title: "为移动场景设计的冷链装备。",
      text: "Travel Science 是 Kelvcoop 科旅共创旗下车载制冷产品品牌，专注车载冰箱、户外便携制冷设备与 OEM/ODM 开发项目，为户外品牌、车载平台和渠道客户提供设计到量产的完整能力。",
      primary: "查看产品",
      secondary: "查看开发能力",
      statA: "11",
      statALabel: "产品系列",
      statB: "ISO9001 + CE CB RED RoHS",
      statBLabel: "认证体系",
      statC: "全球",
      statCLabel: "出口支持",
    },
    sections: {
      seriesEyebrow: "全系列产品",
      seriesTitle: "从紧凑座舱到越野长途补给箱。",
      seriesText:
        "每个系列都按产品平台打造：工业设计、结构、制冷性能、模具、标签、包装和生产配置，都可以按客户渠道继续开发。",
      viewerEyebrow: "互动产品查看",
      viewerTitle: "拖动产品，立体查看外观。",
      viewerText:
        "系列详情页中已经保留 3D/360 查看位。当前版本使用网页轻量化多角度渲染图；后续有压缩后的 GLB 或 CAD 模型，可以在同一位置替换成完整 3D 查看器。",
      projectsEyebrow: "DFM + OEM/ODM",
      projectsTitle: "从工业设计到稳定量产。",
      projectsText:
        "开发项目页会把工厂能力转化成客户能理解的项目流程：概念、结构设计、样机、测试、认证支持、开模、组装和交付。",
      productsTitle: "全部产品系列",
      productsText:
        "按平台筛选、比较型号，再进入系列详情页查看规格、场景、细节和 3D 查看位。",
      developmentTitle: "开发项目",
      developmentText:
        "这个页面面向重视设计落地、工厂管控和可靠上市的 B 端客户。",
      contactTitle: "和 Travel Science 一起开发新的车载冰箱产品线。",
      contactText:
        "发送目标价格、应用场景或参考产品，我们可以评估结构、成本、模具、MOQ 和量产路径。",
    },
    ui: {
      openSeries: "进入系列",
      viewAll: "查看全部产品",
      details: "系列详情",
      models: "型号",
      highlights: "核心亮点",
      spec: "规格重点",
      viewer: "360 查看器",
      drag: "拖动 / 滑动旋转",
      auto: "自动",
      manual: "手动",
      available: "已接入 360",
      reserved: "已预留 3D 位",
      inquiry: "获取报价",
      contactEmail: "info@kelvcoop.com",
      filterAll: "全部",
      capacity: "容量",
      voltage: "电压",
      cooling: "制冷",
      application: "应用",
      next: "下一步",
    },
  },
};

const DEFAULT_TEMPERATURE_RANGE = "Down to -20˚C";

export const products = [
  {
    id: "gl",
    name: "GL Series",
    nameZh: "GL 系列",
    models: ["GL35", "GL45", "GL55", "GL75"],
    tag: "expedition",
    image: "/assets/products/gl/models/gl35-black.png",
    alt: "GL Series expedition portable fridge for overlanding SUV travel and larger cold storage",
    defaultModel: "GL35",
    defaultColor: "Black",
    colorOptions: [
      { name: "Black", value: "Black", swatch: "#121211" },
      { name: "Sage Green", value: "Sage Green", swatch: "#879078" },
    ],
    modelOptions: ["GL35", "GL45", "GL55", "GL75"],
    productImages: {
      GL35: {
        Black: "/assets/products/gl/models/gl35-black.png",
        "Sage Green": "/assets/products/gl/models/gl35-sage.png",
      },
      GL45: {
        Black: "/assets/products/gl/models/gl45-black.png",
        "Sage Green": "/assets/products/gl/models/gl45-sage.png",
      },
      GL55: {
        Black: "/assets/products/gl/models/gl55-black.png",
        "Sage Green": "/assets/products/gl/models/gl55-sage.png",
      },
      GL75: {
        Black: "/assets/products/gl/models/gl75-black.png",
        "Sage Green": "/assets/products/gl/models/gl75-black.png",
      },
    },
    seo: {
      title: "GL Series Expedition Portable Fridge | Travel Science",
      description:
        "GL Series expedition cooling systems for overlanding, SUV travel, pickup routes and larger cold-storage needs.",
      keywords: [
        "expedition portable fridge",
        "overlanding fridge",
        "large car fridge",
        "camping compressor fridge",
      ],
    },
    viewer: {
      type: "frames",
      count: 50,
      path: "/assets/360/gl55/frame-",
      ext: ".jpg",
      label: "GL55 360",
    },
    capacity: "35L - 75L",
    voltage: "DC 12/24V, AC adapter optional",
    cooling: "Compressor cooling",
    application: "Overlanding, SUV, pickup, long-distance camping",
    applicationZh: "越野、自驾、皮卡、长途露营",
    intro:
      "A rugged dual-lid platform with textured shell details, trolley mobility, and a strong outdoor equipment language.",
    introZh:
      "偏越野装备感的双门平台，带耐磨纹理、轮组和拉杆结构，适合大容量户外场景。",
    highlights: [
      "Dual-zone layout options",
      "Trolley structure for heavy loads",
      "High texture industrial shell",
      "OEM color, label, and packaging ready",
    ],
    highlightsZh: [
      "可做双温区配置",
      "拉杆轮组适合大容量搬运",
      "高质感工业外壳",
      "支持 OEM 配色、贴标和包装",
    ],
    modelDetails: [
      {
        id: "gl35",
        name: "GL35",
        capacity: "35L",
        voltage: "DC 12/24V; AC with adapter",
        cooling: "Compressor cooling",
        temperatureRange: DEFAULT_TEMPERATURE_RANGE,
        productDimensions: "685mm x 410mm x 390mm",
        packingSize: "730mm x 495mm x 460mm",
        netWeight: "14.4kg",
        grossWeight: "17.3kg",
        powerConsumption: "60W",
        loadingQty: "20GP/40HQ: 175/360",
        application: "Overlanding, SUV travel, pickup routes and long-distance camping",
      },
      {
        id: "gl45",
        name: "GL45",
        capacity: "45L",
        voltage: "DC 12/24V; AC with adapter",
        cooling: "Compressor cooling",
        temperatureRange: DEFAULT_TEMPERATURE_RANGE,
        productDimensions: "685mm x 410mm x 450mm",
        packingSize: "730mm x 495mm x 520mm",
        netWeight: "14.8kg",
        grossWeight: "18.1kg",
        powerConsumption: "60W",
        loadingQty: "20GP/40HQ: 140/360",
        application: "Overlanding, SUV travel, pickup routes and long-distance camping",
      },
      {
        id: "gl55",
        name: "GL55",
        capacity: "55L",
        voltage: "DC 12/24V; AC with adapter",
        cooling: "Compressor cooling",
        temperatureRange: DEFAULT_TEMPERATURE_RANGE,
        productDimensions: "685mm x 410mm x 510mm",
        packingSize: "730mm x 495mm x 580mm",
        netWeight: "15.3kg",
        grossWeight: "18.3kg",
        powerConsumption: "60W",
        loadingQty: "20GP/40HQ: 140/288",
        application: "Overlanding, SUV travel, pickup routes and long-distance camping",
      },
      {
        id: "gl75",
        name: "GL75",
        capacity: "75L",
        voltage: "DC 12/24V; AC with adapter",
        cooling: "Compressor cooling",
        temperatureRange: DEFAULT_TEMPERATURE_RANGE,
        productDimensions: "729mm x 410mm x 627mm",
        packingSize: "735mm x 495mm x 705mm",
        netWeight: "16.3kg",
        grossWeight: "20.6kg",
        powerConsumption: "60W",
        loadingQty: "20GP/40HQ: 96/207",
        application: "Overlanding, SUV travel, pickup routes and long-distance camping",
      },
    ],
    gallery: [
      {
        image: "/assets/products/gl/front.png",
        title: "Front exterior",
        text: "GL Series shaped for extended outdoor stays and larger cold-storage needs.",
      },
      {
        image: "/assets/products/gl/open-lid.png",
        title: "Open storage",
        text: "Designed to move naturally between SUV storage and outdoor use.",
      },
      {
        image: "/assets/products/gl/control-panel.png",
        title: "Control panel",
        text: "Dual-zone storage for drinks, fruit and longer travel supplies.",
      },
      {
        image: "/assets/products/gl/handle-detail.png",
        title: "Handle detail",
        text: "GL35, GL45, GL55 and GL75 cover different route and storage needs.",
      },
      {
        image: "/assets/products/gl/gl-black-open.png",
        title: "Black configuration",
        text: "Dual-lid access for larger cold-storage needs.",
      },
      {
        image: "/assets/products/gl/gl-sage-open.png",
        title: "Sage configuration",
        text: "Independent compartments support flexible storage and operation.",
      },
      {
        image: "/assets/products/gl.png",
        title: "Product family",
        text: "Clear operation for vehicle travel and outdoor use.",
      },
      {
        image: "/assets/products/gl/models/gl75-black.png",
        title: "GL75 render",
        text: "Close detail view of the control and display area.",
      },
      {
        image: "/assets/products/gl/models/gl55-sage.png",
        title: "GL55 sage render",
        text: "Large-capacity GL75 configuration for extended cold-storage needs.",
      },
    ],
    featureDetails: [
      {
        title: "Dual-zone layout options",
        text: "Flexible storage with independent temperature control.",
      },
      {
        title: "Two-door reversible design",
        text: "Dual-door access supports flexible outdoor storage and operation.",
      },
      {
        title: "Car and home dual use",
        text: "Supports vehicle and home use through DC/AC power options.",
      },
      {
        title: "Battery protection system",
        text: "Three-stage battery protection helps prevent vehicle battery drain.",
      },
      {
        title: "Bluetooth APP connection",
        text: "App connectivity supports easier temperature control and monitoring.",
      },
      {
        title: "Low-noise operation",
        text: "Low vibration and low noise below 45dB.",
      },
      {
        title: "High texture industrial shell",
        text: "Durable exterior built to handle outdoor use.",
      },
      {
        title: "OEM color, label and packaging ready",
        text: "Support for brand customization and packaging solutions.",
      },
    ],
    materials: [
      { part: "Housing", material: "PE" },
      { part: "Frame", material: "ABS" },
      { part: "Door", material: "PE" },
      { part: "Compressor Cabin Cover", material: "ABS" },
      { part: "Handle", material: "Metal + Plastic for 35L / 45L / 55L; Plastic for 75L" },
      { part: "Inner Liner", material: "Embossed Aluminum" },
      { part: "Inner Base", material: "HIPS" },
      { part: "Optional Part", material: "Basket" },
    ],
    useCases: [
      {
        title: "Overlanding",
        text: "Built for longer outdoor routes and larger cold-storage needs.",
      },
      {
        title: "SUV travel",
        text: "Designed to move between vehicle storage and outdoor use.",
      },
      {
        title: "Pickup routes",
        text: "Strong storage capacity for work, travel and equipment-based use.",
      },
      {
        title: "Long-distance camping",
        text: "Reliable cooling for extended outdoor stays.",
      },
    ],
    certifications: ["CE", "CB", "RoHS", "RED"],
    inquiryFocus: {
      title: "Start a GL Series project.",
      text: "Request specifications, customization options or distributor details for GL35, GL45, GL55 and GL75.",
      button: "Request GL Series details",
    },
  },
  {
    id: "ax",
    name: "AX Series",
    nameZh: "AX 系列",
    models: ["AX30", "AX40", "AX50"],
    tag: "vehicle",
    image: "/assets/products/ax.png",
    capacity: "30L - 50L",
    voltage: "DC 12/24V",
    cooling: "Compressor cooling",
    application: "Vehicle cabins, light camping, lifestyle channels",
    applicationZh: "车内、轻露营、生活方式渠道",
    intro:
      "A sharp, compact platform with clean face geometry and a modern control panel.",
    introZh: "造型利落的紧凑平台，正面线条清晰，适合更年轻的车生活渠道。",
    highlights: [
      "Clean front-face design",
      "Compact footprint",
      "Responsive control display",
      "Good for private-label programs",
    ],
    highlightsZh: [
      "正面造型识别度强",
      "占用空间紧凑",
      "显示控制区域清晰",
      "适合贴牌和渠道定制",
    ],
  },
  {
    id: "exm",
    name: "EXM Series",
    nameZh: "EXM 系列",
    models: ["EXM30", "EXM40", "EXM50"],
    tag: "vehicle",
    image: "/assets/products/exm.png",
    capacity: "30L - 50L",
    voltage: "DC 12/24V",
    cooling: "Compressor cooling",
    application: "Export retail programs and customized front panels",
    applicationZh: "出口零售项目、定制面板",
    intro:
      "A platform optimized for export channel variation, front labels, accessories, and practical retail configurations.",
    introZh:
      "为出口渠道变化、前面贴、配件和实用零售配置优化的平台。",
    highlights: [
      "Export-ready label work",
      "Accessory planning",
      "Cost and function balance",
      "Multi-market packaging route",
    ],
    highlightsZh: [
      "出口标签适配",
      "配件规划清晰",
      "成本和功能平衡",
      "可做多市场包装",
    ],
    documents: {
      manual: "/assets/downloads/exm-series-manual.pdf",
    },
  },
  {
    id: "b",
    name: "B Series",
    nameZh: "B 系列",
    models: ["B20", "B25"],
    tag: "compact",
    image: "/assets/products/b20.png",
    capacity: "20L - 25L",
    voltage: "DC 12/24V",
    cooling: "Compact compressor platform",
    application: "Small cars, day trips, office-to-car use",
    applicationZh: "小车、短途、办公到车载使用",
    intro:
      "A small format series designed for daily mobility and fast stock programs.",
    introZh: "面向日常移动使用的小体积系列，适合快速铺货和轻量渠道。",
    highlights: [
      "Small-space friendly",
      "Simple carrying logic",
      "Fast color and label variation",
      "Useful entry-level platform",
    ],
    highlightsZh: [
      "适合小空间",
      "携带逻辑简单",
      "配色和贴标变化快",
      "适合入门价位平台",
    ],
  },
  {
    id: "k",
    name: "K Series",
    nameZh: "K 系列",
    models: ["K15", "K20"],
    tag: "compact",
    image: "/assets/products/k.jpg",
    capacity: "15L - 20L",
    voltage: "DC 12/24V",
    cooling: "Portable cooling",
    application: "Compact trunk, beverage storage, short-distance travel",
    applicationZh: "后备箱、饮品、短途出行",
    intro:
      "A compact product line for lighter scenarios where size, price, and portability matter.",
    introZh: "更轻量的便携产品线，适合尺寸、价格和便携性优先的场景。",
    highlights: [
      "Compact exterior",
      "Easy retail positioning",
      "Quick customization route",
      "Good for online channels",
    ],
    highlightsZh: [
      "外形紧凑",
      "零售定位清晰",
      "定制路径短",
      "适合线上渠道",
    ],
  },
  {
    id: "tf",
    name: "TF Series",
    nameZh: "TF 系列",
    models: ["TF35", "TF45", "TF55"],
    tag: "classic",
    image: "/assets/products/tf.jpg",
    capacity: "35L - 55L",
    voltage: "DC 12/24V",
    cooling: "Compressor cooling",
    application: "Classic car fridge channels and fleet use",
    applicationZh: "传统车载冰箱渠道、车队使用",
    intro:
      "A classic upright shell language for stable, familiar refrigerator programs.",
    introZh: "经典箱体语言，适合需要稳定、熟悉造型的车载冰箱项目。",
    highlights: [
      "Classic configuration",
      "Straightforward specification",
      "Stable channel familiarity",
      "Reliable for repeat orders",
    ],
    highlightsZh: [
      "经典配置",
      "规格清晰直接",
      "渠道接受度高",
      "适合持续复购",
    ],
  },
  {
    id: "m",
    name: "M Series",
    nameZh: "M 系列",
    models: ["M35", "M45", "M55"],
    tag: "expedition",
    image: "/assets/products/m.png",
    viewer: {
      type: "frames",
      count: 38,
      path: "/assets/360/m55/frame-",
      ext: ".jpg",
      label: "M55 360",
    },
    capacity: "35L - 55L",
    voltage: "DC 12/24V",
    cooling: "Dual-zone compressor platform",
    application: "Premium outdoor, mobile camp, long-haul self-driving",
    applicationZh: "高端户外、移动营地、长途自驾",
    intro:
      "A premium mobile platform with wheel, pull handle, battery-ready architecture, and dual-zone layout options.",
    introZh:
      "高端移动平台，带轮组、拉杆、电池扩展思路和双温区配置，适合户外旗舰线。",
    highlights: [
      "Premium mobile structure",
      "Dual-door and dual-zone options",
      "Battery accessory potential",
      "Strong detail-storytelling value",
    ],
    highlightsZh: [
      "高端移动结构",
      "双门双温区选择",
      "具备电池配件扩展潜力",
      "细节展示价值高",
    ],
  },
  {
    id: "ex",
    name: "EX Series",
    nameZh: "EX 系列",
    models: ["EX30", "EX40", "EX50"],
    tag: "vehicle",
    image: "/assets/products/ex.png",
    imageClass: "product-card-image--ex",
    capacity: "30L - 50L",
    voltage: "DC 12/24V",
    cooling: "Compressor cooling",
    application: "Mainstream car refrigerator distribution",
    applicationZh: "主流车载冰箱渠道",
    intro:
      "A proven family for volume programs, balancing cost control, production stability, and solid industrial styling.",
    introZh:
      "适合批量渠道的成熟平台，在成本、生产稳定性和工业造型之间取得平衡。",
    highlights: [
      "Mass-production friendly structure",
      "Multiple capacity options",
      "Stable compressor configuration",
      "Flexible brand panel customization",
    ],
    highlightsZh: [
      "结构适合稳定量产",
      "多容量选择",
      "压缩机制冷配置成熟",
      "品牌面贴定制灵活",
    ],
    documents: {
      manual: "/assets/downloads/ex-series-manual.pdf",
    },
  },
  {
    id: "s35",
    name: "S35",
    nameZh: "S35",
    models: ["S35"],
    tag: "project",
    image: "/assets/products/S35.png",
    capacity: "35L",
    voltage: "DC 12/24V, Makita 18V LXT and tool-battery route",
    cooling: "Portable compressor / battery-compatible platform",
    application: "Camping, overlanding, outdoor work, tool-battery powered mobility",
    applicationZh: "露营、越野、户外工作、电动工具电池移动供电",
    intro:
      "An upgraded S platform with tool-battery compatibility, quiet compressor cooling and a compact black industrial design.",
    introZh:
      "升级版 S 平台，支持工具电池供电，具备安静压缩机制冷和紧凑黑色工业设计。",
    highlights: [
      "Makita 18V LXT compatible route",
      "Tool-battery powered outdoor use",
      "Compact compressor cooling",
      "Industrial black exterior",
    ],
    highlightsZh: [
      "可走 Makita 18V LXT 兼容路线",
      "适合工具电池户外供电",
      "紧凑压缩机制冷",
      "黑色工业外观",
    ],
  },
  {
    id: "s",
    name: "S18",
    nameZh: "S18",
    models: ["S18"],
    tag: "project",
    image: "/assets/products/s18-orange.png",
    capacity: "18L",
    voltage: "DC 12/24V, battery project optional",
    cooling: "Portable compressor / project platform",
    application: "Project development, compact outdoor concept, battery route",
    applicationZh: "项目开发、紧凑户外概念、电池方案",
    intro:
      "A compact project platform with strong CMF potential and a clear position for battery-powered outdoor use.",
    introZh:
      "具备强 CMF 潜力的紧凑项目平台，可继续发展电池户外方案。",
    highlights: [
      "Project-friendly platform",
      "Battery concept extension",
      "Compact outdoor positioning",
      "GLB model exists, web compression recommended",
    ],
    highlightsZh: [
      "适合项目开发",
      "可延展电池方案",
      "紧凑户外定位",
      "已有 GLB 模型，建议压缩后上线",
    ],
  },
  {
    id: "d",
    name: "D Series",
    nameZh: "D 系列",
    models: ["D9"],
    tag: "compact",
    image: "/assets/products/d.jpg",
    capacity: "9L",
    voltage: "DC 12/24V",
    cooling: "Compact cooling",
    application: "Seat-side storage, drinks, medication or daily carry",
    applicationZh: "座椅旁、饮品、药品或日常携带",
    intro:
      "A small product family for seat-side and short-distance usage, useful for entry SKU planning.",
    introZh: "小容量产品线，适合座椅旁和短距离使用，可作为入门 SKU。",
    highlights: [
      "Smallest footprint",
      "Color variation friendly",
      "Easy to explain at retail",
      "Good add-on product",
    ],
    highlightsZh: [
      "占用空间最小",
      "适合多配色",
      "零售说明简单",
      "适合做配套产品",
    ],
  },
];

const mSeriesColors = [
  { name: "Black", value: "black", swatch: "#08090a", swatches: ["#08090a"] },
  { name: "Sage Green", value: "sage-green", swatch: "#879078", swatches: ["#879078"] },
];

const bSeriesColors = [
  { name: "All Black", value: "all-black", swatch: "#08090a", swatches: ["#08090a"] },
  { name: "Black & Silver", value: "black-silver", swatch: "#08090a", swatches: ["#08090a", "#c7c8c6"] },
  { name: "Green", value: "green", swatch: "#879078", swatches: ["#879078"] },
  { name: "Dark Gray & Light Gray", value: "dark-gray-light-gray", swatch: "#555755", swatches: ["#555755", "#c8c8c3"] },
];

const axSeriesColors = [
  { name: "Black", value: "black", swatch: "#2e2f2f", swatches: ["#2e2f2f"] },
  { name: "Champagne", value: "champagne", swatch: "#c8c1b4", swatches: ["#c8c1b4"] },
  { name: "Light Gray", value: "light-gray", swatch: "#d4d5d2", swatches: ["#d4d5d2"] },
];

const dSeriesColors = [
  { name: "Black & Gray", value: "black-gray", swatch: "#08090a", swatches: ["#08090a", "#8d8f8c"] },
  { name: "All Black", value: "all-black", swatch: "#08090a", swatches: ["#08090a"] },
  { name: "Mung Bean Gray", value: "mung-bean-gray", swatch: "#9da58e", swatches: ["#9da58e"] },
];

const exSeriesColors = [
  { name: "All Black", value: "all-black", swatch: "#08090a", swatches: ["#08090a"] },
  { name: "Blue Gray & Light Gray", value: "blue-gray-light-gray", swatch: "#6f7f8d", swatches: ["#6f7f8d", "#d4d5d2"] },
];

function modelColorImages(models, colors, fallbackImage) {
  return Object.fromEntries(
    models.map((model) => [
      model,
      Object.fromEntries(colors.map((color) => [color.value, fallbackImage])),
    ]),
  );
}

const productDetailEnhancements = {
  ax: {
    defaultModel: "AX30",
    defaultColor: "black",
    colorOptions: axSeriesColors,
    modelOptions: ["AX30", "AX40", "AX50"],
    productImages: {
      AX30: {
        black: "/assets/products/ax/models/ax30-black.png",
        champagne: "/assets/products/ax/models/ax30-champagne.png",
        "light-gray": "/assets/products/ax/models/ax30-light-gray.png",
      },
      AX40: {
        black: "/assets/products/ax/models/ax40-black.png",
        champagne: "/assets/products/ax/models/ax40-champagne.png",
        "light-gray": "/assets/products/ax/models/ax40-light-gray.png",
      },
      AX50: {
        black: "/assets/products/ax/models/ax50-black.png",
        champagne: "/assets/products/ax/models/ax50-champagne.png",
        "light-gray": "/assets/products/ax/models/ax50-light-gray.png",
      },
    },
    seo: {
      title: "AX Series Portable Compressor Fridge | Travel Science",
      description:
        "AX Series portable compressor fridges for compact cooling, export channel variation, private label and product range planning.",
      keywords: [
        "portable compressor fridge",
        "compact car fridge",
        "AX30 portable fridge",
        "private label car fridge",
        "export portable fridge",
        "OEM portable fridge",
      ],
    },
    modelDetails: [
      modelDetail("ax30", "AX30", "30L", "DC 12/24V", "Compressor cooling", "TBD", "665 x 380 x 390 mm", "695 x 440 x 427 mm", "16.8 kg", "21.7 kg", "60W", "20GP/40HQ: 200/420", "Compact portable cooling for vehicle travel and distributor product ranges"),
      modelDetail("ax40", "AX40", "40L", "DC 12/24V", "Compressor cooling", "TBD", "665 x 380 x 480 mm", "695 x 440 x 497 mm", "18.8 kg", "22.1 kg", "60W", "20GP/40HQ: 160/420", "Compact portable cooling for vehicle travel and distributor product ranges"),
      modelDetail("ax50", "AX50", "50L", "DC 12/24V", "Compressor cooling", "TBD", "665 x 380 x 550 mm", "695 x 440 x 567 mm", "20.8 kg", "23.8 kg", "60W", "20GP/40HQ: 120/336", "Compact portable cooling for vehicle travel and distributor product ranges"),
    ],
    gallery: [
      {
        image: "/assets/products/ax/gallery/ax30-open.png",
        title: "Open storage",
        text: "Dual-lid access for compact portable cooling.",
      },
      {
        image: "/assets/products/ax/gallery/ax40-front.png",
        title: "Compact exterior",
        text: "Clean face geometry for vehicle travel and channel programs.",
      },
      {
        image: "/assets/products/ax/gallery/ax50-side.png",
        title: "Side profile",
        text: "Capacity options built around the same product language.",
      },
      {
        image: "/assets/products/ax/gallery/ax50-black.png",
        title: "Dark configuration",
        text: "Color routes for private-label and distributor programs.",
      },
    ],
    featureDetails: [
      feature("Cooling system", "Compressor cooling for compact vehicle and outdoor use."),
      feature("Power route", "DC 12/24V vehicle-ready power."),
      feature("Product range", "30L / 40L / 50L capacity options for distributor planning."),
      feature("Private label", "Color, label, packaging and documentation support."),
    ],
    materials: [
      material("Housing", "Pre-coated steel"),
      material("Frame", "ABS"),
      material("Door", "ABS + glass"),
      material("Inner Liner", "Embossed aluminum"),
      material("Inner Base", "HIPS"),
      material("Handle", "ABS"),
      material("Optional Part", "TBD"),
    ],
    useCases: [
      useCase("Distributor product range", "Three capacity options for product range planning."),
      useCase("Vehicle travel", "Portable cold storage for road trips and daily use."),
      useCase("Outdoor cooling", "Compressor cooling for camping and weekend use."),
      useCase("Private label projects", "Product platform for brand customization and packaging support."),
    ],
    certifications: ["TBD"],
    inquiryFocus: inquiry("AX Series", "Send target model, quantity, market and private-label requirements for AX30, AX40 or AX50."),
  },
  exm: {
    defaultModel: "EXM30",
    defaultColor: "all-black",
    colorOptions: exSeriesColors,
    modelOptions: ["EXM30", "EXM40", "EXM50"],
    productImages: {
      EXM30: {},
      EXM40: {},
      EXM50: {},
    },
    seo: {
      title: "EXM Series Export Portable Fridge | Travel Science",
      description:
        "EXM Series portable compressor fridges for export retail programs, customized front panels, accessories and multi-market configurations.",
      keywords: [
        "export portable fridge",
        "customized front panel fridge",
        "portable compressor fridge",
        "retail car fridge program",
        "DC 12V 24V car fridge",
      ],
    },
    modelDetails: [
      modelDetail("exm30", "EXM30", "30L", "DC 12/24V", "Compressor cooling", "TBD", "649 x 423 x 409 mm", "692 x 462 x 452 mm", "13.5 kg", "16.8 kg", "60W", "20GP/40HQ: 185/380", "Export retail programs, customized front panels and vehicle cooling"),
      modelDetail("exm40", "EXM40", "40L", "DC 12/24V", "Compressor cooling", "TBD", "649 x 423 x 489 mm", "692 x 462 x 532 mm", "14.5 kg", "18 kg", "60W", "20GP/40HQ: 148/304", "Export retail programs, customized front panels and vehicle cooling"),
      modelDetail("exm50", "EXM50", "50L", "DC 12/24V", "Compressor cooling", "TBD", "649 x 423 x 569 mm", "692 x 462 x 612 mm", "15.5 kg", "19.5 kg", "60W", "20GP/40HQ: 111/228", "Export retail programs, customized front panels and vehicle cooling"),
    ],
    gallery: galleryFromImage("/assets/products/exm.png", "Export-ready body platform for retail configuration."),
    featureDetails: [
      feature("Cooling system", "Compressor cooling for export retail configurations."),
      feature("Power route", "DC 12/24V vehicle-ready power."),
      feature("Channel configuration", "Front label, accessory and packaging planning."),
      feature("Capacity options", "30L / 40L / 50L capacity options."),
    ],
    materials: [
      material("Housing", "TBD"),
      material("Frame", "TBD"),
      material("Door", "TBD"),
      material("Front Panel", "TBD"),
      material("Handle", "TBD"),
      material("Inner Liner", "TBD"),
      material("Inner Base", "TBD"),
    ],
    useCases: [
      useCase("Export retail programs", "Portable cooling platform for multi-market retail configurations."),
      useCase("Vehicle travel", "Compressor cooling for road trips and vehicle use."),
      useCase("Brand customization", "Front label, color, packaging and accessory planning."),
      useCase("Distributor range planning", "30L / 40L / 50L range for channel lineup planning."),
    ],
    certifications: ["TBD"],
    documents: {
      manual: "/assets/downloads/exm-series-manual.pdf",
    },
    inquiryFocus: inquiry("EXM Series", "Send target model, quantity, market, front-label and packaging requirements for EXM Series."),
  },
  b: {
    defaultModel: "B20",
    defaultColor: "all-black",
    colorOptions: bSeriesColors,
    modelOptions: ["B20", "B25"],
    productImages: {
      B20: Object.fromEntries(bSeriesColors.map((color) => [color.value, "/assets/products/b20.png"])),
      B25: Object.fromEntries(bSeriesColors.map((color) => [color.value, "/assets/products/b/b25.png"])),
    },
    seo: {
      title: "B Series Compact Portable Fridge | Travel Science",
      description:
        "B20 and B25 compact compressor fridges for road trips, picnic days, vehicle travel and everyday portable cooling.",
      keywords: [
        "compact portable fridge",
        "small car fridge",
        "20L portable fridge",
        "25L portable fridge",
        "camping compressor fridge",
        "DC 12V 24V car fridge",
      ],
    },
    modelDetails: [
      modelDetail("b20", "B20", "20L", "DC 12/24V", "Compressor cooling", "Down to -20C / -4F", "457 x 308 x 368 mm", "525 x 355 x 425 mm", "8.4 kg", "10.3 kg", "60W", "20GP/40HQ: 355/876", "Road trips, picnic days, compact vehicle use and daily portable cooling"),
      modelDetail("b25", "B25", "25L", "DC 12/24V", "Compressor cooling", "Down to -20C / -4F", "522 x 308 x 368 mm", "580 x 355 x 425 mm", "9.1 kg", "11.2 kg", "60W", "20GP/40HQ: 300/762", "Road trips, picnic days, compact vehicle use and daily portable cooling"),
    ],
    gallery: galleryFromImage("/assets/products/b20.png", "Compact body layout for vehicle storage and portable use."),
    featureDetails: [
      feature("Cooling system", "Compressor cooling for compact portable use."),
      feature("Power route", "DC 12/24V vehicle-ready power."),
      feature("Storage direction", "20L / 25L compact capacity."),
      feature("OEM / ODM", "Color, logo, label, packaging and documentation support."),
    ],
    materials: standardTbdMaterials(),
    useCases: [
      useCase("Road trips", "Compact cooling for drinks and food during short vehicle travel."),
      useCase("Picnic days", "Easy-to-carry cooling for weekend outdoor use."),
      useCase("Small vehicles", "Compact size for limited vehicle storage space."),
      useCase("Daily use", "Portable cooling for everyday movement between home, car and outdoor use."),
    ],
    certifications: ["TBD"],
    inquiryFocus: inquiry("B Series", "Send target model, quantity, market and customization needs for B20 or B25."),
  },
  k: {
    seo: {
      title: "K Series Compact Portable Fridge | Travel Science",
      description:
        "K15 and K20 compact portable cooling products for trunk storage, beverages, short-distance travel and online retail channels.",
      keywords: [
        "compact portable fridge",
        "K15 portable fridge",
        "K20 portable fridge",
        "beverage car fridge",
        "short-distance travel fridge",
        "online channel portable fridge",
      ],
    },
    modelDetails: [
      modelDetail("k15", "K15", "15L", "DC 12/24V", "Portable cooling", "TBD", "597 x 320 x 270 mm", "625 x 370 x 330 mm", "11 kg", "14 kg", "60W", "392/812/928 pcs", "Compact trunk, beverage storage and short-distance travel"),
      modelDetail("k20", "K20", "20L", "DC 12/24V", "Portable cooling", "TBD", "597 x 320 x 333 mm", "625 x 370 x 395 mm", "12 kg", "15 kg", "60W", "336/696/696 pcs", "Compact trunk, beverage storage and short-distance travel"),
    ],
    gallery: galleryFromImage("/assets/products/k.jpg", "Compact exterior for short-distance portable use."),
    featureDetails: [
      feature("Cooling system", "Portable cooling for compact trunk and beverage storage."),
      feature("Power route", "DC 12/24V vehicle-ready power."),
      feature("Channel direction", "Online retail and compact portable channels."),
      feature("OEM / ODM", "Color, logo, packaging and documentation support."),
    ],
    materials: standardTbdMaterials(),
    useCases: [
      useCase("Compact trunk", "Cooling for limited vehicle storage space."),
      useCase("Beverage storage", "Small-capacity storage for drinks and daily items."),
      useCase("Short-distance travel", "Portable cooling for short road trips."),
      useCase("Online channels", "Compact model for clear retail positioning."),
    ],
    certifications: ["TBD"],
    inquiryFocus: inquiry("K Series", "Send target model, quantity, market and customization needs for K15 or K20."),
  },
  tf: {
    seo: {
      title: "TF Series Classic Car Fridge | Travel Science",
      description:
        "TF35, TF45 and TF55 compressor fridges for classic car fridge channels, fleet use and repeat-order programs.",
      keywords: [
        "classic car fridge",
        "TF35 portable fridge",
        "TF45 portable fridge",
        "TF55 portable fridge",
        "compressor car refrigerator",
        "fleet car fridge",
      ],
    },
    modelDetails: [
      modelDetail("tf35", "TF35", "24L", "DC 12/24V", "Compressor cooling", "TBD", "626 x 369 x 363 mm", "685 x 413 x 423 mm", "15 kg", "17 kg", "60W", "220/460/552 pcs", "Classic car fridge channels and fleet use"),
      modelDetail("tf45", "TF45", "34L", "DC 12/24V", "Compressor cooling", "TBD", "626 x 369 x 433 mm", "685 x 413 x 493 mm", "15.4 kg", "18 kg", "60W", "176/368/460 pcs", "Classic car fridge channels and fleet use"),
      modelDetail("tf55", "TF55", "41.2L", "DC 12/24V", "Compressor cooling", "TBD", "626 x 369 x 503 mm", "685 x 413 x 563 mm", "16.2 kg", "18.8 kg", "60W", "176/368/368 pcs", "Classic car fridge channels and fleet use"),
    ],
    gallery: galleryFromImage("/assets/products/tf.jpg", "Classic upright shell for familiar refrigerator programs."),
    featureDetails: [
      feature("Cooling system", "Compressor cooling for classic car fridge channels."),
      feature("Power route", "DC 12/24V vehicle-ready power."),
      feature("Channel direction", "Classic car fridge channels and fleet programs."),
      feature("Repeat orders", "Stable configuration for replenishment programs."),
    ],
    materials: [
      material("Housing", "Pre-coated steel"),
      material("Frame", "ABS"),
      material("Door", "PE / PE + glass"),
      material("Inner Liner", "One-piece molding HIPS"),
      material("Inner Base", "TBD"),
      material("Handle", "PE"),
      material("Optional Part", "TBD"),
    ],
    useCases: [
      useCase("Classic car fridge channels", "Familiar form and specifications for established channels."),
      useCase("Fleet use", "Stable cooling platform for vehicle-based programs."),
      useCase("Repeat orders", "Product family for stable replenishment programs."),
      useCase("Private label projects", "Platform for color, label and packaging customization."),
    ],
    certifications: ["TBD"],
    inquiryFocus: inquiry("TF Series", "Send target model, quantity, market and fleet or channel requirements for TF35, TF45 or TF55."),
  },
  m: {
    defaultModel: "M35",
    defaultColor: "black",
    colorOptions: mSeriesColors,
    modelOptions: ["M35", "M45", "M55"],
    productImages: {
      M35: {
        black: "/assets/products/m/models/m35-black.png",
        "sage-green": "/assets/products/m/models/m35-sage.png",
      },
      M45: {
        black: "/assets/products/m/models/m45-black.png",
        "sage-green": "/assets/products/m/models/m45-sage.png",
      },
      M55: {
        black: "/assets/products/m/models/m55-black.png",
        "sage-green": "/assets/products/m/models/m55-sage.png",
      },
    },
    seo: {
      title: "M Series Premium Mobile Fridge | Travel Science",
      description:
        "M35, M45 and M55 premium mobile compressor fridges with wheel, pull-handle, battery-ready architecture and dual-zone options.",
      keywords: [
        "premium mobile fridge",
        "wheeled portable fridge",
        "M35 portable fridge",
        "M45 portable fridge",
        "M55 portable fridge",
        "dual-zone compressor fridge",
      ],
    },
    modelDetails: [
      modelDetail("m35", "M35", "35L", "DC 12/24V", "Dual-zone compressor platform", "Down to -20C / -4F", "763 x 462 x 390 mm", "810 x 535 x 465 mm", "16 kg", "19.1 kg", "60W", "20GP/40HQ: 140/290", "Premium outdoor, mobile camp and long-haul self-driving"),
      modelDetail("m45", "M45", "45L", "DC 12/24V", "Dual-zone compressor platform", "Down to -20C / -4F", "763 x 462 x 450 mm", "810 x 535 x 525 mm", "16.4 kg", "19.7 kg", "60W", "20GP/40HQ: 112/290", "Premium outdoor, mobile camp and long-haul self-driving"),
      modelDetail("m55", "M55", "55L", "DC 12/24V", "Dual-zone compressor platform", "Down to -20C / -4F", "763 x 462 x 510 mm", "810 x 535 x 585 mm", "17 kg", "20.5 kg", "60W", "20GP/40HQ: 112/232", "Premium outdoor, mobile camp and long-haul self-driving"),
    ],
    gallery: [
      {
        image: "/assets/products/m/gallery/m45-front.png",
        title: "Front angle",
        text: "Premium mobile structure with strong outdoor presence.",
      },
      {
        image: "/assets/products/m/gallery/m45-open.png",
        title: "Open storage",
        text: "Dual-door access supports flexible outdoor storage.",
      },
      {
        image: "/assets/products/m/gallery/m45-side.png",
        title: "Side profile",
        text: "Wheel and pull-handle logic for mobile camp use.",
      },
      {
        image: "/assets/products/m/gallery/m45-black.png",
        title: "Dark configuration",
        text: "Black CMF route for flagship outdoor product lines.",
      },
    ],
    featureDetails: [
      feature("Cooling system", "Dual-zone compressor platform."),
      feature("Mobility", "Wheel and pull-handle structure for mobile outdoor use."),
      feature("Storage direction", "Dual-door and dual-zone options."),
      feature("Battery accessory", "Rechargeable battery / solar charging module shown as product direction."),
    ],
    materials: [
      material("Housing", "TBD"),
      material("Frame", "TBD"),
      material("Door", "TBD"),
      material("Wheel", "TBD"),
      material("Handle", "TBD"),
      material("Inner Liner", "TBD"),
      material("Inner Base", "TBD"),
      material("Optional Part", "TBD"),
    ],
    useCases: [
      useCase("Premium outdoor", "Mobile cooling for higher-end outdoor product lines."),
      useCase("Mobile camp", "Wheeled cold storage for camp setups."),
      useCase("Long-haul self-driving", "Larger portable cooling for extended driving routes."),
      useCase("Flagship channel projects", "Product platform for brands needing a stronger flagship presence."),
    ],
    certifications: ["TBD"],
    inquiryFocus: inquiry("M Series", "Send target model, quantity, market and mobility or dual-zone requirements for M35, M45 or M55."),
  },
  ex: {
    defaultModel: "EX30",
    defaultColor: "all-black",
    colorOptions: exSeriesColors,
    modelOptions: ["EX30", "EX40", "EX50"],
    productImages: modelColorImages(["EX30", "EX40", "EX50"], exSeriesColors, "/assets/products/ex.png"),
    seo: {
      title: "EX Series Portable Car Fridge | Travel Science",
      description:
        "EX30, EX40 and EX50 portable compressor fridges for mainstream car refrigerator distribution and volume programs.",
      keywords: [
        "EX Series car fridge",
        "EX30 portable fridge",
        "EX40 portable fridge",
        "EX50 portable fridge",
        "compressor car refrigerator",
        "mainstream car fridge distribution",
      ],
    },
    modelDetails: [
      modelDetail("ex30", "EX30", "30L", "DC 12/24V", "Compressor cooling", "TBD", "619 x 385 x 409 mm", "692 x 462 x 452 mm", "12.3 kg", "15.6 kg", "60W", "20GP/40HQ: 185/380", "Mainstream car refrigerator distribution and volume programs"),
      modelDetail("ex40", "EX40", "40L", "DC 12/24V", "Compressor cooling", "TBD", "619 x 385 x 489 mm", "692 x 462 x 532 mm", "13.3 kg", "16.8 kg", "60W", "20GP/40HQ: 148/304", "Mainstream car refrigerator distribution and volume programs"),
      modelDetail("ex50", "EX50", "50L", "DC 12/24V", "Compressor cooling", "TBD", "619 x 385 x 569 mm", "692 x 462 x 612 mm", "14.3 kg", "18.3 kg", "60W", "20GP/40HQ: 111/228", "Mainstream car refrigerator distribution and volume programs"),
    ],
    gallery: galleryFromImage("/assets/products/ex.png", "Mass-production friendly structure for volume programs."),
    featureDetails: [
      feature("Cooling system", "Compressor cooling for mainstream car refrigerator channels."),
      feature("Power route", "DC 12/24V vehicle-ready power."),
      feature("Production direction", "Mass-production friendly structure."),
      feature("Brand panel", "Flexible brand panel customization for channel programs."),
    ],
    materials: standardTbdMaterials(),
    useCases: [
      useCase("Mainstream distribution", "Portable fridge family for established car refrigerator channels."),
      useCase("Volume programs", "Platform for repeatable production and range planning."),
      useCase("Vehicle travel", "Compressor cooling for road trips and vehicle use."),
      useCase("Brand panel customization", "Flexible front-panel customization for channel brands."),
    ],
    certifications: ["TBD"],
    documents: {
      manual: "/assets/downloads/ex-series-manual.pdf",
    },
    inquiryFocus: inquiry("EX Series", "Send target model, quantity, market and customization needs for EX30, EX40 or EX50."),
  },
  s35: {
    defaultModel: "S35",
    defaultColor: "all-black",
    colorOptions: [
      { name: "All Black", value: "all-black", swatch: "#08090a", swatches: ["#08090a"] },
    ],
    modelOptions: ["S35"],
    productImages: {
      S35: {
        "all-black": "/assets/products/S35.png",
      },
    },
    seo: {
      title: "S35 Tool-Battery Compatible Portable Fridge | Travel Science",
      description:
        "S35 upgraded portable compressor fridge with DC 12/24V and tool-battery compatible route for workshop, home and weekend use.",
      keywords: [
        "S35 portable fridge",
        "tool battery fridge",
        "Makita battery fridge",
        "workshop fridge",
        "portable compressor fridge",
      ],
    },
    modelDetails: [
      modelDetail("s35", "S35", "35L", "DC 12/24V; tool-battery compatible route", "Compressor cooling", "TBD", "TBD", "TBD", "TBD", "TBD", "TBD", "TBD", "Portable second fridge for home, workshop and weekend use"),
    ],
    gallery: galleryFromImage("/assets/products/S35.png", "Compact body form for second-fridge and workshop use."),
    featureDetails: [
      feature("Cooling system", "Compressor cooling for portable second-fridge use."),
      feature("Power route", "DC 12/24V with tool-battery compatible route."),
      feature("Battery compatibility", "Tool-battery direction for upgraded S Series projects."),
      feature("Storage direction", "Compact second-fridge storage."),
    ],
    materials: [
      material("Housing", "ABS"),
      material("Frame", "ABS"),
      material("Door", "ABS"),
      material("Inner Liner", "One-piece molding HIPS"),
      material("Inner Base", "TBD"),
      material("Battery Accessory", "TBD"),
      material("Optional Part", "TBD"),
    ],
    useCases: [
      useCase("Home second fridge", "Additional cold storage for drinks and food."),
      useCase("Workshop", "Cooling platform for users with tool-battery ecosystems."),
      useCase("Weekend use", "Portable cooling for short trips and outdoor days."),
      useCase("Vehicle use", "Compact compressor fridge for car and mobile use."),
    ],
    certifications: ["TBD"],
    inquiryFocus: inquiry("S35", "Send target model, battery route, quantity, market and customization needs for S35."),
  },
  s: {
    defaultModel: "S18",
    defaultColor: "orange-black",
    colorOptions: [
      { name: "Orange & Black", value: "orange-black", swatch: "#f26a21", swatches: ["#f26a21", "#08090a"] },
      { name: "All Black", value: "all-black", swatch: "#08090a", swatches: ["#08090a"] },
    ],
    modelOptions: ["S18", "S35"],
    productImages: {
      S18: {
        "orange-black": "/assets/products/s18-orange.png",
        "all-black": "/assets/products/s18-orange.png",
      },
      S35: {
        "all-black": "/assets/products/S35.png",
      },
    },
    seo: {
      title: "S18 Portable Second Fridge | Travel Science",
      description:
        "S18 compact compressor fridge for home, car, workshop and weekend second-fridge use.",
      keywords: [
        "S18 portable fridge",
        "portable second fridge",
        "compact compressor fridge",
        "workshop fridge",
        "DC 12V 24V fridge",
      ],
    },
    modelDetails: [
      modelDetail("s18", "S18", "18L", "DC 12/24V", "Compressor cooling", "Down to -20C / -4F", "485 x 320 x 288 mm", "547 x 382 x 352 mm", "9.5 kg", "11.5 kg", "60W", "20GP/40HQ: 384/896", "Compact second-fridge use for home, car, workshop and weekend scenarios"),
    ],
    gallery: galleryFromImage("/assets/products/s18-orange.png", "Compact body form for second-fridge and workshop use."),
    featureDetails: [
      feature("Cooling system", "Compressor cooling for compact second-fridge use."),
      feature("Power route", "DC 12/24V vehicle-ready power."),
      feature("Storage direction", "18L compact second-fridge storage."),
      feature("OEM / ODM", "Color, logo, battery accessory, packaging and documentation support."),
    ],
    materials: [
      material("Housing", "ABS"),
      material("Frame", "ABS"),
      material("Door", "ABS"),
      material("Inner Liner", "One-piece molding HIPS"),
      material("Inner Base", "TBD"),
      material("Battery Accessory", "TBD"),
      material("Optional Part", "TBD"),
    ],
    useCases: [
      useCase("Home second fridge", "Additional cold storage for drinks and food."),
      useCase("Workshop", "Compact cooling platform for workshop use."),
      useCase("Weekend use", "Portable cooling for short trips and outdoor days."),
      useCase("Vehicle use", "Compact compressor fridge for car and mobile use."),
    ],
    certifications: ["TBD"],
    inquiryFocus: inquiry("S18", "Send target model, quantity, market and customization needs for S18."),
  },
  d: {
    defaultModel: "D9",
    defaultColor: "black-gray",
    colorOptions: dSeriesColors,
    modelOptions: ["D9"],
    productImages: modelColorImages(["D9"], dSeriesColors, "/assets/products/d.jpg"),
    seo: {
      title: "D Series Compact Portable Fridge | Travel Science",
      description:
        "D Series compact portable cooling system for small-space use, lightweight storage and product range planning.",
      keywords: [
        "compact portable fridge",
        "small portable fridge",
        "D9 portable fridge",
        "mini compressor fridge",
        "small car fridge",
      ],
    },
    modelDetails: [
      modelDetail("d9", "D9", "9L", "DC 12/24V", "Compressor cooling", "20C to -20C", "474 x 320 x 266 mm", "517 x 400 x 336 mm", "6.9 kg", "8.5 kg", "60W", "427/889/1016 pcs", "Compact cooling for small-space use and lightweight storage needs"),
    ],
    gallery: galleryFromImage("/assets/products/d.jpg", "Compact body form for small-space cooling."),
    featureDetails: [
      feature("Cooling system", "Compressor cooling for small-space and daily carry use."),
      feature("Power route", "DC 12/24V vehicle-ready power."),
      feature("Storage direction", "9L compact capacity."),
      feature("OEM / ODM", "Color, logo, packaging and documentation support."),
    ],
    materials: [
      material("Housing", "TBD"),
      material("Frame", "TBD"),
      material("Door", "TBD"),
      material("Inner Liner", "One-piece molded inner liner"),
      material("Inner Base", "TBD"),
      material("Handle", "Built-in handle"),
      material("Optional Part", "TBD"),
    ],
    useCases: [
      useCase("Small vehicle use", "Compact cooling for limited vehicle space."),
      useCase("Short-distance travel", "Lightweight storage for short trips."),
      useCase("Personal cooling", "Small-capacity cooling for drinks and daily-use items."),
      useCase("Product range extension", "A compact model for brands expanding their portable cooling lineup."),
    ],
    certifications: ["TBD"],
    inquiryFocus: inquiry("D Series", "Send target market, quantity and customization needs for D9."),
  },
};

products.forEach((product) => {
  Object.assign(product, productDetailEnhancements[product.id] || {});
});

function modelDetail(
  id,
  name,
  capacity,
  voltage,
  cooling,
  temperatureRange,
  productDimensions,
  packingSize,
  netWeight,
  grossWeight,
  powerConsumption,
  loadingQty,
  application,
) {
  return {
    id,
    name,
    capacity,
    voltage,
    cooling,
    temperatureRange: DEFAULT_TEMPERATURE_RANGE,
    productDimensions,
    packingSize,
    netWeight,
    grossWeight,
    powerConsumption,
    loadingQty,
    application,
  };
}

function galleryFromImage(image, exteriorText) {
  return [
    {
      image,
      title: "Exterior view",
      text: exteriorText,
    },
    {
      image,
      title: "Open storage",
      text: "Storage layout for vehicle, outdoor and channel use.",
    },
    {
      image,
      title: "Control panel",
      text: "Temperature setting and operating control.",
    },
    {
      image,
      title: "Product detail",
      text: "Structure detail for product range planning and customization.",
    },
  ];
}

function feature(title, text) {
  return { title, text };
}

function material(part, materialValue) {
  return { part, material: materialValue };
}

function useCase(title, text) {
  return { title, text };
}

function inquiry(seriesName, text) {
  return {
    title: `Request ${seriesName} specifications.`,
    text,
    button: `Request ${seriesName} details`,
  };
}

function standardTbdMaterials() {
  return [
    material("Housing", "TBD"),
    material("Frame", "TBD"),
    material("Door", "TBD"),
    material("Inner Liner", "TBD"),
    material("Inner Base", "TBD"),
    material("Handle", "TBD"),
    material("Optional Part", "TBD"),
  ];
}

export const FEATURED_PRODUCT_IDS = ["b", "s", "gl"];

export const productPositioning = {
  ax: {
    headline: "Compact platform for export-ready programs.",
    text:
      "The AX Series is a practical portable fridge platform for distributors and product teams needing compact model options, clean product form and export-ready configuration support.",
  },
  b: {
    headline: "Compact cooling for modern travel.",
    text:
      "The B Series combines premium aesthetics, quiet compressor performance and everyday portability in a compact platform designed for life on the move.",
  },
  exm: {
    headline: "Export-ready cooling, configured for retail.",
    text:
      "The EXM Series is optimized for export channel variation, front labels, accessories and practical retail configurations.",
  },
  k: {
    headline: "Compact cooling for lighter scenarios.",
    text:
      "The K Series is a compact product line for lighter scenarios where size, price and portability matter.",
  },
  tf: {
    headline: "Classic car-fridge configuration.",
    text:
      "The TF Series uses a classic upright shell language for stable, familiar refrigerator programs.",
  },
  m: {
    headline: "Premium mobile cooling with more capability.",
    text:
      "The M Series is a premium mobile platform with wheel, pull handle, battery-ready architecture and dual-zone layout options.",
  },
  ex: {
    headline: "Mainstream cooling for volume programs.",
    text:
      "The EX Series is a proven family for volume programs, balancing cost control, production stability and solid industrial styling.",
  },
  s35: {
    headline: "The second fridge. Powered differently.",
    text: "Runs on Makita batteries and other power tool batteries. A portable second fridge for home, workshop and weekend use.",
  },
  s: {
    headline: "The second fridge. Powered differently.",
    text: "The S Series now includes an upgraded tool-battery compatible route, extending portable cooling from outdoor use to home, workshop and weekend life.",
  },
  gl: {
    headline: "Expedition cooling for longer routes.",
    text: "The GL Series is built for outdoor trips, vehicle travel and larger cold-storage needs, with rugged proportions and a strong equipment presence.",
  },
  d: {
    headline: "Small cooling for tight spaces.",
    text: "The D Series is a very small car refrigerator for drinks, medicine and everyday carry inside compact vehicle spaces.",
  },
};

export function productById(id) {
  return products.find((product) => product.id === id);
}

export function productIntro(product) {
  if (productPositioning[product.id]) return productPositioning[product.id].text;
  return product.intro.replace("OEM color, label, and packaging ready", "Designed for contemporary outdoor channels");
}

export function productHeadline(product) {
  return productPositioning[product.id]?.headline || "Designed for the journey ahead.";
}

export const productFilters = [
  { id: "all", en: "All", zh: "全部" },
  { id: "expedition", en: "Expedition", zh: "越野户外" },
  { id: "vehicle", en: "Vehicle", zh: "车载主力" },
  { id: "compact", en: "Compact", zh: "紧凑便携" },
  { id: "classic", en: "Classic", zh: "经典渠道" },
  { id: "project", en: "Project", zh: "项目开发" },
];

export const developmentSteps = [
  {
    id: "brief",
    en: "Brief",
    zh: "需求定义",
    textEn: "Translate target market, capacity, cost, and channel needs into a practical product brief.",
    textZh: "把目标市场、容量、成本和渠道需求整理成可执行的产品定义。",
  },
  {
    id: "design",
    en: "ID + CMF",
    zh: "外观与 CMF",
    textEn: "Shape the exterior language, color/material/finish direction, brand panels, and accessory logic.",
    textZh: "确定外观语言、色彩材质工艺、品牌面板和配件逻辑。",
  },
  {
    id: "engineering",
    en: "Engineering",
    zh: "结构工程",
    textEn: "Build the mechanical architecture around cooling, insulation, assembly, tooling, and reliability.",
    textZh: "围绕制冷、保温、装配、模具和可靠性建立结构架构。",
  },
  {
    id: "prototype",
    en: "Prototype",
    zh: "样机验证",
    textEn: "Move from sample build to usability, thermal, noise, vibration, and packing checks.",
    textZh: "从样机制作进入使用、温控、噪音、震动和包装验证。",
  },
  {
    id: "validation",
    en: "Validation",
    zh: "测试认证",
    textEn: "Support test plans, labels, energy compliance routes, battery documents, and export readiness.",
    textZh: "支持测试计划、铭牌、能效路线、电池资料和出口合规准备。",
  },
  {
    id: "production",
    en: "Production",
    zh: "量产交付",
    textEn: "Turn the approved product into tooling, BOM, QC checkpoints, packaging, and repeatable delivery.",
    textZh: "把确认方案落到模具、BOM、质检节点、包装和可重复交付。",
  },
];

export const metrics = [
  { en: "Research", zh: "研发", value: "ID / ME / CMF" },
  { en: "Manufacturing", zh: "制造", value: "Assembly + QC" },
  { en: "Service", zh: "服务", value: "OEM / ODM" },
  { en: "Export", zh: "出口", value: "US / EU / AU / SEA" },
];
