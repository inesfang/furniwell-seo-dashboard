window.FURNIWELL_FR_AUDIT = {
  "schemaVersion": 1,
  "id": "furniwell-fr-seo-audit-2026-10-10",
  "auditDate": "2026-10-10",
  "target": "https://furniwell.fr",
  "classification": "public",
  "refreshMode": "fixed-audit",
  "scope": {
    "sitemapPages": 50,
    "products": 35,
    "collections": 7,
    "otherPages": 6,
    "homepages": 1,
    "blogs": 1
  },
  "source": {
    "type": "public-site-audit-and-ahrefs-estimates",
    "links": [
      {
        "label": "法国站首页",
        "url": "https://furniwell.fr/"
      },
      {
        "label": "Sitemap",
        "url": "https://furniwell.fr/sitemap.xml"
      },
      {
        "label": "robots.txt",
        "url": "https://furniwell.fr/robots.txt"
      }
    ],
    "methods": [
      "2026-10-10：解析 sitemap，读取 50 个 HTML 页的 HTTP 状态、head 标签、标题、正文、链接与 JSON-LD。",
      "另查 HTTP / www 跳转、无效 URL、总目录 1–3 页、排序与变体参数、政策页和德国首页。",
      "GTIN 把 Economy、G7、V2 Ultra 的 Offer 与公开产品 JSON 的同 SKU 变体条码逐一比较。",
      "关键词需求：Ahrefs Keywords Explorer，country=fr，采集于 2026-10-10；月搜索量为最近已知 12 个月的平均估算。",
      "外链与能见度：Ahrefs Site Explorer，domain=furniwell.fr，数据日期 2026-10-09；为第三方估算。"
    ],
    "limits": [
      "不是全站所有参数 URL 的无限爬取；问题数量按主题归组，页数可以交叉重叠。",
      "没有 GSC / GA4 / 订单归因数据；PageSpeed 返回 429，移动端性能未验证。",
      "这是固定日期的检查记录，不会随德国站周报自动更新；完成修复须另行复查。"
    ]
  },
  "issues": [
    {
      "id": "FR-01",
      "priority": "P0",
      "kind": "confirmed",
      "module": "商品数据",
      "title": "变体 GTIN 与 SKU 不匹配",
      "problem": "Economy 的 43 个 Offer 共用一个 GTIN；G7、V2 Ultra 也存在相同问题。",
      "fix": "修正主题 JSON-LD 的变体循环，让每个 Offer 读取自身的条码、SKU、价格和库存。",
      "evidence": [
        "Economy：43 个不同条码，42 / 43 个 Offer 与对应变体条码不符。",
        "G7：31 / 32 个不符；V2 Ultra：35 / 36 个不符。",
        "Economy 默认页全部输出 917080040416；选择白色变体后，全部改为 917080040454。公开产品 JSON 的条码本身各不相同。"
      ],
      "steps": [
        "定位 Product / Offer JSON-LD 生成片段，核查循环中是否使用了当前选中变体。",
        "逐变体输出正确 GTIN；校验 SKU、价格、库存与变体 URL。不要把全部 Shopify 条码覆盖成同一个值。",
        "分别抽查默认页和切换颜色 / 尺寸后的页面，再检查 Merchant Center 商品诊断。"
      ],
      "acceptance": [
        "三款产品所有 Offer 的 GTIN 与对应 SKU 主数据一致。",
        "切换变体后，其他变体的标识符不被同步改写；富媒体测试无商品标识符相关错误。"
      ],
      "affected": [
        "https://furniwell.fr/products/economy-bureau-electrique-reglable-en-hauteur",
        "https://furniwell.fr/products/g7-bureau-assis-debout-electrique-avec-moteur-sans-balais-et-montage-rapide",
        "https://furniwell.fr/products/v2-ultra-bureau-assis-debout-electrique-avec-double-moteurs"
      ],
      "sources": [
        {
          "label": "Economy 公开变体数据",
          "url": "https://furniwell.fr/products/economy-bureau-electrique-reglable-en-hauteur.json"
        },
        {
          "label": "Google 商品标识符说明",
          "url": "https://developers.google.com/search/blog/2021/02/product-information"
        }
      ],
      "caveat": "原因可能是主题引用了选中变体条码；这是根据输出行为的推断，需在主题代码中确认。"
    },
    {
      "id": "FR-02",
      "priority": "P0",
      "kind": "confirmed",
      "module": "技术与链接",
      "title": "5 个商品页的套购链接返回 404",
      "problem": "升降桌页面仍链接德语路径 /collections/burostuhl，该地址实际返回 404。",
      "fix": "把链接和锚文本改为法国站办公椅分类，并为旧地址设置相关的 301。",
      "evidence": [
        "5 个商品页含“Schreibtisch und einen Stuhl … 42€ Rabatt”的德语套购文案。",
        "目标 /collections/burostuhl 返回 404；法国站已有 /collections/chaise-ergonomique。"
      ],
      "steps": [
        "替换这 5 个页面中的目标链接，使用自然的法语锚文本。",
        "核实套购优惠是否仍有效，再翻译优惠条件。",
        "将旧地址 301 到对应办公椅分类，并检查导航、推荐模块及其他正文链接。"
      ],
      "acceptance": [
        "5 个来源页直接链接有效的法语分类页，目标返回 200。",
        "旧地址仅一次 301 到相关分类；文案与当前活动条件一致。"
      ],
      "affected": [
        "https://furniwell.fr/products/bureau-assis-debout-electrique-avec-plateau-monobloc",
        "https://furniwell.fr/products/v2-ultra-pro-bureau-assis-debout-electrique-a-double-moteur",
        "https://furniwell.fr/products/dual-ultra-bureau-assis-debout-electrique-premium",
        "https://furniwell.fr/products/dual-ultra-x-bureau-assis-debout-electrique-premium",
        "https://furniwell.fr/products/economy-solid-bureau-assis-debout-electrique"
      ],
      "sources": [
        {
          "label": "实测 404 目标",
          "url": "https://furniwell.fr/collections/burostuhl"
        },
        {
          "label": "正确分类目标",
          "url": "https://furniwell.fr/collections/chaise-ergonomique"
        }
      ],
      "caveat": null
    },
    {
      "id": "FR-03",
      "priority": "P0",
      "kind": "confirmed",
      "module": "商品数据",
      "title": "尺寸单位和参数口径不一致",
      "problem": "Economy 出现“100*60m”；高度范围和承重需按变体区分，不能套用统一规格。",
      "fix": "以已确认的 SKU 规格表为准，修正单位，统一页面、规格表与结构化数据。",
      "evidence": [
        "Economy 规格中出现 100*60m，尺寸应核实并改为对应的 cm 表述。",
        "页面可见 72–116 与 72–118 两种高度范围；不同尺寸可能适用不同承重。",
        "部分椅子变体标注 45 天配送，而通用横幅为 3–7 天。"
      ],
      "steps": [
        "建立按 SKU / 变体核实的尺寸、升降范围、动态承重和交付时间表。",
        "修正文案单位与冲突值；在变体选择附近显示例外配送时间。",
        "对照 Shopify 产品字段、图片说明和 Merchant Center 输出，统一同一 SKU 的口径。"
      ],
      "acceptance": [
        "所有规格都有准确单位，且同一 SKU 的页面各处一致。",
        "特殊配送时间在购买前可见；没有未经核实的统一承重或高度承诺。"
      ],
      "affected": [
        "https://furniwell.fr/products/economy-bureau-electrique-reglable-en-hauteur",
        "https://furniwell.fr/products/chaise-de-bureau-ergonomique-avec-appuie-tete-et-accoudoirs-reglables"
      ],
      "sources": [],
      "caveat": null
    },
    {
      "id": "FR-04",
      "priority": "P1",
      "kind": "confirmed",
      "module": "页面与内容",
      "title": "分类页缺少主标题，部分页面滥用 H1",
      "problem": "7 / 7 个 sitemap 分类页没有 H1；全站样本另有多 H1 和空 H1。",
      "fix": "为每页设置明确的主题主标题，规格、描述、FAQ 分别使用 H2 / H3。",
      "evidence": [
        "50 页中 9 页无 H1、15 页存在多个 H1。",
        "首页 H1 是页头 Logo 的 Furniwell-fr，缺少正文中的主题主标题。"
      ],
      "steps": [
        "在分类模板输出品类 H1；首页添加与办公家具业务一致的主标题。",
        "检查产品、Contact、FAQ 模板，把内容分区和空标题改为合适的层级。",
        "核查移动端和桌面端是否重复输出同一个主标题。"
      ],
      "acceptance": [
        "每个重要页面有可见、清晰的主题主标题；无空 H1。",
        "商品描述、规格及 FAQ 的标题层级连贯。"
      ],
      "affected": [
        "https://furniwell.fr/",
        "https://furniwell.fr/products/burostuhl-mit-massage-lendenkissen-ergonomischer-gaming-stuhl-mit-fussstutze",
        "https://furniwell.fr/products/chaise-de-bureau-ergonomique-avec-appuie-tete-et-accoudoirs-reglables",
        "https://furniwell.fr/products/g7-bureau-assis-debout-electrique-avec-moteur-sans-balais-et-montage-rapide",
        "https://furniwell.fr/products/furniwell-chaise-de-bureau-ergonomique-classique-avec-dossier-haut-reglable",
        "https://furniwell.fr/products/chaise-de-bureau-avec-repose-pieds-chaise-de-jeu-ergonomique",
        "https://furniwell.fr/products/bureau-assis-debout-electrique-avec-multiprise-et-chargement-sans-fil",
        "https://furniwell.fr/products/moteur-unique-cadre-de-bureau-debout-reglable",
        "https://furniwell.fr/products/double-moteur-table-reglable-en-hauteur",
        "https://furniwell.fr/products/bureau-assis-debout-electrique-avec-plateau-monobloc",
        "https://furniwell.fr/products/v2-ultra-pro-bureau-assis-debout-electrique-a-double-moteur",
        "https://furniwell.fr/products/dual-ultra-bureau-assis-debout-electrique-premium",
        "https://furniwell.fr/products/dual-ultra-x-bureau-assis-debout-electrique-premium",
        "https://furniwell.fr/products/economy-solid-bureau-assis-debout-electrique",
        "https://furniwell.fr/pages/contactez-nous",
        "https://furniwell.fr/pages/about-furniwell",
        "https://furniwell.fr/pages/commercial-sales",
        "https://furniwell.fr/pages/faqs",
        "https://furniwell.fr/collections/frontpage",
        "https://furniwell.fr/collections/bureau-assis-debout",
        "https://furniwell.fr/collections/chaise-ergonomique",
        "https://furniwell.fr/collections/cadres-pour-bureaux-assis-debout",
        "https://furniwell.fr/collections/soutien",
        "https://furniwell.fr/collections/all-products",
        "https://furniwell.fr/collections/cadres-de-bureau"
      ],
      "sources": [],
      "caveat": "多个 H1 并不等于被 Google 惩罚；这里的优化目标是清晰的语义和阅读结构。"
    },
    {
      "id": "FR-05",
      "priority": "P1",
      "kind": "confirmed",
      "module": "页面与内容",
      "title": "核心分类只有商品卡片，缺少选购内容",
      "problem": "升降桌、人体工学椅和桌架分类缺少介绍、型号比较与购买问题解答。",
      "fix": "先建设 3 个核心分类，在商品列表前写短介绍，列表后补比较和选购指南。",
      "evidence": [
        "已检查 3 个核心分类的原始 HTML：正文主要为商品卡片，缺少分类标题和购买指南。"
      ],
      "steps": [
        "分类顶部说明品类、适用人群和主要差异，并保持商品展示靠前。",
        "升降桌增加 Economy / Solid / G7 / V2 的真实尺寸、电机、升降范围和承重比较。",
        "底部回答尺寸选择、双屏、安装、配送及保修问题，链接相关商品和指南。"
      ],
      "acceptance": [
        "3 个核心分类具备 H1、简短介绍、真实比较和可读 FAQ。",
        "页面仍能快速发现商品；所有型号参数均可追溯到 SKU 资料。"
      ],
      "affected": [
        "https://furniwell.fr/collections/bureau-assis-debout",
        "https://furniwell.fr/collections/chaise-ergonomique",
        "https://furniwell.fr/collections/cadres-de-bureau"
      ],
      "sources": [],
      "caveat": "不设固定字数；尺寸和颜色需求先在已有分类、商品页内承接，有充分商品与独立内容再创建细分类。"
    },
    {
      "id": "FR-06",
      "priority": "P1",
      "kind": "confirmed",
      "module": "页面与内容",
      "title": "15 个商品的 Description 缺少可读文字",
      "problem": "15 / 35 个 Product.description 为空；部分 Description 只有图片或没有描述模块。",
      "fix": "保留有用图片，同时补法语文字：用途、尺寸、材质、变体差异、包装与交付。",
      "evidence": [
        "15 个商品的 JSON-LD description 为空或仅空白。",
        "部分产品描述为图片；化妆台另有规格文字，因此不能把这些整页称为空白页。"
      ],
      "steps": [
        "按成交价值和需求，先处理化妆台、桌架、L 型桌等重点商品，再覆盖清单全部 15 页。",
        "将关键卖点和规格写成实际 HTML 文字，不把图片 ALT 作为正文替代。",
        "让 Product.description 对应真实可见的商品介绍，并清理自动拼入的通用政策文字。"
      ],
      "acceptance": [
        "15 个商品有可读的法语介绍；关键规格可在 HTML 中找到。",
        "Product.description 非空，且描述的是该商品而非通用政策。"
      ],
      "affected": [
        "https://furniwell.fr/products/plateau-de-table-a-bords-arrondis-epaisseur-2-5-cm",
        "https://furniwell.fr/products/coiffeuse-avec-miroir-led-et-7-tiroirs",
        "https://furniwell.fr/products/pergola-en-aluminium-avec-toit-coulissant-reglable",
        "https://furniwell.fr/products/trampoline-de-jardin-avec-filet-de-securite-et-echelle",
        "https://furniwell.fr/products/canape-dangle-convertible",
        "https://furniwell.fr/products/fauteuil-gaming-avec-repose-pieds-et-dossier-inclinable",
        "https://furniwell.fr/products/bureau-gaming-avec-eclairage-rgb",
        "https://furniwell.fr/products/chaises-de-jardin-en-aluminium-avec-dossier-reglable",
        "https://furniwell.fr/products/buffet-de-cuisine-avec-eclairage-led-et-prises-electriques",
        "https://furniwell.fr/products/vitrine-en-verre-avec-eclairage-rgb-et-controle-via-application",
        "https://furniwell.fr/products/tabouret-de-coiffeuse-pivotant-et-reglable-en-hauteur",
        "https://furniwell.fr/products/bureau-dangle-en-l-avec-4-tiroirs",
        "https://furniwell.fr/products/pavillon-pliant-reglable-en-hauteur-avec-structure-robuste",
        "https://furniwell.fr/products/litiere-autonettoyante-90-l-pour-plusieurs-chats",
        "https://furniwell.fr/products/cadre-de-bureau-assis-debout-electrique-a-double-moteur"
      ],
      "sources": [],
      "caveat": null
    },
    {
      "id": "FR-07",
      "priority": "P1",
      "kind": "confirmed",
      "module": "页面与内容",
      "title": "标题和 Meta 摘要不完整",
      "problem": "11 页无 Meta Description，22 页使用 320 字符截取摘要，5 个标题在源码中截断单词。",
      "fix": "在 Shopify 的搜索引擎预览中逐页改写，优先首页、核心分类和重点商品。",
      "evidence": [
        "首页 Title 仅 Furniwell；部分分类仍为 Home page / All products。",
        "5 个 Title 源码长度恰为 70 字符且截断单词，区别于搜索结果中的显示截断。",
        "22 个 Description 为正文截取，不能完整表达商品价值。"
      ],
      "steps": [
        "使用“品类 / 型号 + 核心属性 | Furniwell”的自然法语标题。",
        "写完整、有区别的摘要，说明选购信息；仅使用已核实的配送和保修信息。",
        "检查主题是否对标题 / 摘要进行机械截取；上线后复查 head 内的实际标签。"
      ],
      "acceptance": [
        "重要页面 Title 与摘要完整、独特，无断词和模板残留。",
        "11 个缺失项均补齐，或随空页清理策略明确排除。"
      ],
      "affected": [
        "https://furniwell.fr/",
        "https://furniwell.fr/products/burostuhl-mit-massage-lendenkissen-ergonomischer-gaming-stuhl-mit-fussstutze",
        "https://furniwell.fr/products/chaise-de-bureau-ergonomique-avec-appuie-tete-et-accoudoirs-reglables",
        "https://furniwell.fr/products/g7-bureau-assis-debout-electrique-avec-moteur-sans-balais-et-montage-rapide",
        "https://furniwell.fr/products/bureau-dangle-reglable-en-hauteur",
        "https://furniwell.fr/products/g2-bureau-ergonomique-assis-debout-avec-plateau-en-verre-dune-seule-piece",
        "https://furniwell.fr/products/v2-ultra-bureau-assis-debout-electrique-avec-double-moteurs",
        "https://furniwell.fr/products/economy-bureau-electrique-reglable-en-hauteur",
        "https://furniwell.fr/products/furniwell-chaise-de-bureau-ergonomique-classique-avec-dossier-haut-reglable",
        "https://furniwell.fr/products/chaise-de-bureau-avec-repose-pieds-chaise-de-jeu-ergonomique",
        "https://furniwell.fr/products/bureau-assis-debout-electrique-avec-multiprise-et-chargement-sans-fil",
        "https://furniwell.fr/products/moteur-unique-cadre-de-bureau-debout-reglable",
        "https://furniwell.fr/products/bureau-haut-de-gamme-a-hauteur-reglable-electriquement-avec-plateaux-fabriques-en-une-seule-piece",
        "https://furniwell.fr/products/double-moteur-table-reglable-en-hauteur",
        "https://furniwell.fr/products/furniwell-dual-ultra-pied-de-table-reglable-en-hauteur",
        "https://furniwell.fr/products/furniwell-dual-ultra-x-pied-de-table-reglable-en-hauteur",
        "https://furniwell.fr/products/plateau-de-table-a-bords-arrondis-epaisseur-2-5-cm",
        "https://furniwell.fr/products/bureau-assis-debout-electrique-avec-plateau-monobloc",
        "https://furniwell.fr/products/v2-ultra-pro-bureau-assis-debout-electrique-a-double-moteur",
        "https://furniwell.fr/products/dual-ultra-bureau-assis-debout-electrique-premium",
        "https://furniwell.fr/products/dual-ultra-x-bureau-assis-debout-electrique-premium",
        "https://furniwell.fr/products/economy-solid-bureau-assis-debout-electrique",
        "https://furniwell.fr/pages/about-furniwell",
        "https://furniwell.fr/pages/commercial-sales",
        "https://furniwell.fr/pages/faqs",
        "https://furniwell.fr/pages/garantie",
        "https://furniwell.fr/pages/politique-de-remboursement",
        "https://furniwell.fr/collections/frontpage",
        "https://furniwell.fr/collections/chaise-ergonomique",
        "https://furniwell.fr/collections/cadres-pour-bureaux-assis-debout",
        "https://furniwell.fr/collections/soutien",
        "https://furniwell.fr/collections/all-products",
        "https://furniwell.fr/collections/cadres-de-bureau",
        "https://furniwell.fr/blogs/news"
      ],
      "sources": [
        {
          "label": "Shopify 页面关键词与搜索预览",
          "url": "https://help.shopify.com/en/manual/promoting-marketing/seo/adding-keywords"
        },
        {
          "label": "Google 摘要说明",
          "url": "https://developers.google.com/search/docs/appearance/snippet"
        }
      ],
      "caveat": "字符长度本身不是排名惩罚；Google 也可能按查询改写摘要。重点是源码内容完整、准确。"
    },
    {
      "id": "FR-08",
      "priority": "P1",
      "kind": "confirmed",
      "module": "技术与链接",
      "title": "空分类和空博客仍作为索引入口",
      "problem": "2 个无商品分类及没有文章的 News 博客返回 200，仍列在 sitemap。",
      "fix": "根据经营计划保留并充实，或取消发布；有真正对应页时再做相关 301。",
      "evidence": [
        "/collections/cadres-pour-bureaux-assis-debout 和 /collections/soutien 无商品，未设置 noindex。",
        "/blogs/news 无文章，sitemap 只有博客本身。"
      ],
      "steps": [
        "确认是否计划经营该分类；有商品时补真实商品、标题和内容。",
        "对停用入口取消发布并更新内部链接 / sitemap；有相同意图的替代页才设置 301。",
        "临时使用 noindex 时保持可抓取，确保不再把它作为 sitemap 中的重要索引页面。"
      ],
      "acceptance": [
        "保留入口有独立内容及商品；停用入口不再出现在导航和 sitemap。",
        "没有把全部空页重定向到首页；noindex 与 robots 策略不互相阻挡。"
      ],
      "affected": [
        "https://furniwell.fr/collections/cadres-pour-bureaux-assis-debout",
        "https://furniwell.fr/collections/soutien",
        "https://furniwell.fr/blogs/news"
      ],
      "sources": [],
      "caveat": null
    },
    {
      "id": "FR-09",
      "priority": "P1",
      "kind": "confirmed",
      "module": "技术与链接",
      "title": "13 个商品缺少稳定的品类内链",
      "problem": "13 个非核心商品在 sitemap 样本页面中缺少指向它们的分类链接，依赖总目录翻页。",
      "fix": "补真实的分类归属、面包屑与相关商品推荐，让它们接入购买路径。",
      "evidence": [
        "50 个 sitemap 页面形成的内部链接图中，13 个商品未获得其他样本页的入口。",
        "补查 /collections/all 的 1–3 页后，35 个商品都可到达，因此不属于完全孤立页面。"
      ],
      "steps": [
        "为非核心商品指定合理的已有分类，并检查菜单 / 分类列表是否链接到该分类。",
        "在相关商品和购买指南中添加有语境的推荐，锚文本使用自然法语。",
        "仅在商品数量、经营计划和内容足够时新增分类，避免为单个 SKU 批量制造薄页面。"
      ],
      "acceptance": [
        "13 个商品都能通过可抓取的分类或相关页面链接到达。",
        "总目录分页仍可发现全部商品；内部链接目标使用正式 canonical URL。"
      ],
      "affected": [
        "https://furniwell.fr/products/coiffeuse-avec-miroir-led-et-7-tiroirs",
        "https://furniwell.fr/products/pergola-en-aluminium-avec-toit-coulissant-reglable",
        "https://furniwell.fr/products/trampoline-de-jardin-avec-filet-de-securite-et-echelle",
        "https://furniwell.fr/products/canape-dangle-convertible",
        "https://furniwell.fr/products/fauteuil-gaming-avec-repose-pieds-et-dossier-inclinable",
        "https://furniwell.fr/products/bureau-gaming-avec-eclairage-rgb",
        "https://furniwell.fr/products/chaises-de-jardin-en-aluminium-avec-dossier-reglable",
        "https://furniwell.fr/products/buffet-de-cuisine-avec-eclairage-led-et-prises-electriques",
        "https://furniwell.fr/products/vitrine-en-verre-avec-eclairage-rgb-et-controle-via-application",
        "https://furniwell.fr/products/tabouret-de-coiffeuse-pivotant-et-reglable-en-hauteur",
        "https://furniwell.fr/products/bureau-dangle-en-l-avec-4-tiroirs",
        "https://furniwell.fr/products/pavillon-pliant-reglable-en-hauteur-avec-structure-robuste",
        "https://furniwell.fr/products/litiere-autonettoyante-90-l-pour-plusieurs-chats"
      ],
      "sources": [
        {
          "label": "总目录",
          "url": "https://furniwell.fr/collections/all"
        },
        {
          "label": "Google 电商 URL 与链接结构",
          "url": "https://developers.google.com/search/docs/specialty/ecommerce/designing-a-url-structure-for-ecommerce-sites"
        }
      ],
      "caveat": null
    },
    {
      "id": "FR-10",
      "priority": "P1",
      "kind": "confirmed",
      "module": "法国本地化",
      "title": "德语、英语和模板占位内容残留",
      "problem": "部分商品、页脚及 B2B 页面含德语 / 英语；B2B 仍出现模板占位说明。",
      "fix": "按法国消费者的语言和购买条件校对模板、商品正文与企业采购页面。",
      "evidence": [
        "5 个升降桌页保留德语套购文案；页脚出现 Telefon / Deutschland，法律入口显示 Imprimer。",
        "Commercial Sales 页出现 Your content / Pair text with an image… 等占位内容。",
        "B2B 宣称最高 10 年保修，普通商品多为 5 年，适用范围需要说明。"
      ],
      "steps": [
        "校对菜单、页脚、商品描述、按钮、邮件及企业采购页面，删除模板占位文字。",
        "将法律入口改为对应的 Mentions légales；准确表达经营主体和地址。",
        "重新写清 B2B 服务、联系入口和保修适用条件；逐项核实承诺。"
      ],
      "acceptance": [
        "消费者页面使用自然法语，无模板占位或错误锚文本。",
        "配送、退货、保修和经营主体信息准确且不冲突。"
      ],
      "affected": [
        "https://furniwell.fr/pages/commercial-sales",
        "https://furniwell.fr/pages/about-furniwell",
        "https://furniwell.fr/",
        "https://furniwell.fr/products/bureau-assis-debout-electrique-avec-plateau-monobloc",
        "https://furniwell.fr/products/v2-ultra-pro-bureau-assis-debout-electrique-a-double-moteur",
        "https://furniwell.fr/products/dual-ultra-bureau-assis-debout-electrique-premium",
        "https://furniwell.fr/products/dual-ultra-x-bureau-assis-debout-electrique-premium",
        "https://furniwell.fr/products/economy-solid-bureau-assis-debout-electrique"
      ],
      "sources": [],
      "caveat": null
    },
    {
      "id": "FR-11",
      "priority": "P1",
      "kind": "confirmed",
      "module": "法国本地化",
      "title": "法德对应页面缺少完整 hreflang",
      "problem": "50 个法国页及其 sitemap 未见 hreflang；德国首页的语言列表未含 fr。",
      "fix": "给有对应关系的法德页面配置相互返回的语言链接，各页保留自身 canonical。",
      "evidence": [
        "检查法国站 HTML、sitemap 与响应头，未发现语言替代链接。",
        "德国首页可见 de / en / x-default，未包含法语入口。"
      ],
      "steps": [
        "建立首页、核心分类与同款商品的 FR / DE 对应 URL 表。",
        "配置 fr-FR / de-DE 及自身链接，确保双向引用；保留德国站已有有效语言条目。",
        "没有等价页面时不强行配对；逐 URL 检查状态、canonical 和返回链接。"
      ],
      "acceptance": [
        "每组对应页的 hreflang 双向、自引用且目标返回 200。",
        "法国页仍 canonical 到自身，不指向德国页。"
      ],
      "affected": [
        "https://furniwell.fr/",
        "https://furniwell.fr/collections/bureau-assis-debout",
        "https://furniwell.fr/collections/chaise-ergonomique",
        "https://furniwell.fr/collections/cadres-de-bureau",
        "https://furniwell.de/"
      ],
      "sources": [
        {
          "label": "Google 多语言页面指南",
          "url": "https://developers.google.com/search/docs/specialty/international/localized-versions"
        }
      ],
      "caveat": "x-default 可按语言选择器需要配置；没有 hreflang 并不表示法国站无法被索引。"
    },
    {
      "id": "FR-12",
      "priority": "P2",
      "kind": "opportunity",
      "module": "商品数据",
      "title": "补充商品变体、配送与退货信息",
      "problem": "35 页已有 Product 和 BreadcrumbList，但未见 ProductGroup、配送和退货结构化信息。",
      "fix": "先完成 GTIN 修复，再按真实变体和已核实政策补相应 schema。",
      "evidence": [
        "35 个商品页均有 Product 与 BreadcrumbList。",
        "未见 ProductGroup、OfferShippingDetails、MerchantReturnPolicy 或 AggregateRating。"
      ],
      "steps": [
        "按颜色 / 尺寸建立 ProductGroup、productGroupID、variesBy 与 hasVariant。",
        "只输出真实适用的运费、交付区域和退货政策。",
        "如有真实且可见的评论，再按规则标记评分；不要生成虚构评论或评分。"
      ],
      "acceptance": [
        "富媒体测试通过；schema 与页面、SKU 及 Merchant Center 内容一致。",
        "变体有独立且准确的标识符，政策与评论有真实来源。"
      ],
      "affected": [
        "https://furniwell.fr/products/economy-bureau-electrique-reglable-en-hauteur",
        "https://furniwell.fr/products/g7-bureau-assis-debout-electrique-avec-moteur-sans-balais-et-montage-rapide",
        "https://furniwell.fr/products/v2-ultra-bureau-assis-debout-electrique-avec-double-moteurs"
      ],
      "sources": [
        {
          "label": "Google 商品变体结构化数据",
          "url": "https://developers.google.com/search/docs/appearance/structured-data/product-variants"
        }
      ],
      "caveat": "这些字段属于增强机会；缺失不等于所有产品 schema 都无效，也不保证获得富媒体展示。"
    },
    {
      "id": "FR-13",
      "priority": "P2",
      "kind": "opportunity",
      "module": "页面与内容",
      "title": "商品图片 ALT 重复或不描述画面",
      "problem": "图片存在空 ALT、重复商品名和 donotshow 值，重点商品图缺少准确的法语描述。",
      "fix": "先确认主题如何使用图片标识，再给信息性图片添加反映画面的法语 ALT。",
      "evidence": [
        "原始 HTML 中可见重复标题、空 ALT 与 donotshow 标记。"
      ],
      "steps": [
        "识别装饰图、商品主图、细节图与尺寸图；装饰图可保留空 ALT。",
        "用实际颜色、角度或功能描述信息性图片，避免在每张图中堆砌关键词。",
        "先核查 donotshow 是否控制变体图片隐藏；必要时改用专用字段再调整 ALT。"
      ],
      "acceptance": [
        "主要商品图有准确法语 ALT；装饰图不会造成重复播报。",
        "图片切换与隐藏逻辑正常，尺寸图的重要信息也有正文文字。"
      ],
      "affected": [
        "https://furniwell.fr/",
        "https://furniwell.fr/products/economy-bureau-electrique-reglable-en-hauteur",
        "https://furniwell.fr/products/coiffeuse-avec-miroir-led-et-7-tiroirs"
      ],
      "sources": [],
      "caveat": "不要对所有空 ALT 或 donotshow 做盲目批量替换。"
    },
    {
      "id": "FR-14",
      "priority": "P2",
      "kind": "opportunity",
      "module": "内容与权威",
      "title": "选购指南和法国相关引荐不足",
      "problem": "News 无文章；Ahrefs 检测到的外部链接规模较小，尚未核查链接质量。",
      "fix": "围绕核心品类创建有用的法语选购内容，并争取相关媒体、办公场景网站的真实引荐。",
      "evidence": [
        "本次公开检查未发现 News 下的文章。",
        "Ahrefs 2026-10-09：DR 0.0、8 个存活引用域名、8 条存活外链；均为第三方检测值。"
      ],
      "steps": [
        "先写尺寸选择、桌架与整桌区别、电机 / 承重等有实际购买价值的主题。",
        "指南与分类、相关商品双向内链；支持判断的信息以真实参数和体验为基础。",
        "选择法国市场相关的合作或编辑推荐，评估关联性、实际引荐及非品牌曝光。"
      ],
      "acceptance": [
        "发布的指南回答明确问题，并链接正确的商品 / 分类。",
        "新引荐来源可核查且与业务相关；用 GSC 和订单数据观察结果。"
      ],
      "affected": [
        "https://furniwell.fr/blogs/news",
        "https://furniwell.fr/collections/bureau-assis-debout",
        "https://furniwell.fr/collections/cadres-de-bureau"
      ],
      "sources": [],
      "caveat": "Ahrefs 的收录范围和 DR 不等于 Google 的评分；这里没有完成全量外链质量审计。"
    },
    {
      "id": "FR-15",
      "priority": "P2",
      "kind": "pending",
      "module": "验证与监测",
      "title": "实际索引、点击与自然订单尚待验证",
      "problem": "没有法国站 GSC / GA4 数据；不能用 Ahrefs 的 0 推断 Google 未收录或没有真实流量。",
      "fix": "用法国站 Search Console 建立上线前基线，再按实际改动日期跟踪索引和非品牌查询。",
      "evidence": [
        "Ahrefs 2026-10-09 返回自然关键词 / 估算自然流量 0；历史月度曾记录少量估算流量。",
        "尚未读取法国站 Search Console、GA4 或订单归因数据。"
      ],
      "steps": [
        "在法国站 GSC 查看 sitemap 处理、索引报告，并检查重点分类和商品 URL。",
        "记录法国非品牌曝光、点击、CTR、排名 URL 和自然订单基线。",
        "实际上线后第 7 / 14 / 30 天按相同口径复查；保留改动记录。"
      ],
      "acceptance": [
        "有法国站真实数据的日期、国家 / 查询口径和重点 URL 基线。",
        "明确区分可抓取、可索引和实际已索引；不用第三方估算替代实际访问量。"
      ],
      "affected": [
        "https://furniwell.fr/",
        "https://furniwell.fr/collections/bureau-assis-debout",
        "https://furniwell.fr/collections/chaise-ergonomique",
        "https://furniwell.fr/collections/cadres-de-bureau"
      ],
      "sources": [],
      "caveat": "待验证项，当前不能判定“未收录”；也没有法国站效果数据可以展示为已改善。"
    },
    {
      "id": "FR-16",
      "priority": "P2",
      "kind": "pending",
      "module": "验证与监测",
      "title": "移动端性能没有有效测量结果",
      "problem": "PageSpeed 接口返回 429；本次没有可靠的 LCP、INP、CLS 或性能分数。",
      "fix": "对首页、分类和商品页进行移动端测量，结合真实用户数据定位瓶颈。",
      "evidence": [
        "首页 HTML 约 401 KB，含 51 个 script 标签；这些只是检查线索。",
        "标签数、图片数量和 HTML 体积不能证明实际下载负载或页面一定慢。"
      ],
      "steps": [
        "测试首页、核心分类和重点商品；有 CrUX / GSC 数据时优先查看真实用户表现。",
        "根据报告处理实际首屏大图、阻塞脚本、应用脚本及图片尺寸；首屏 LCP 图避免误用懒加载。",
        "变更后按同设备和条件复测，检查商品选项和购买按钮仍正常。"
      ],
      "acceptance": [
        "有可复查的移动端报告与测量日期；不填造分数。",
        "真实用户第 75 百分位参考：LCP ≤ 2.5 秒、INP ≤ 200 ms、CLS ≤ 0.1。"
      ],
      "affected": [
        "https://furniwell.fr/",
        "https://furniwell.fr/collections/bureau-assis-debout",
        "https://furniwell.fr/products/economy-bureau-electrique-reglable-en-hauteur"
      ],
      "sources": [
        {
          "label": "Google Core Web Vitals",
          "url": "https://developers.google.com/search/docs/appearance/core-web-vitals"
        }
      ],
      "caveat": "性能仍待验证；一次实验室测试不能代替第 75 百分位的真实用户指标。"
    }
  ],
  "gtinExamples": [
    {
      "sku": "G-HAD23-0403C-102WT",
      "rendered": "917080040416",
      "expected": "917080040409"
    },
    {
      "sku": "G-HAD22-0287A-1222",
      "rendered": "917080040416",
      "expected": "917080040454"
    }
  ],
  "keywordDemand": [
    {
      "keyword": "bureau assis debout",
      "volume": 20000,
      "kd": 2,
      "destination": "https://furniwell.fr/collections/bureau-assis-debout",
      "role": "升降桌主分类"
    },
    {
      "keyword": "chaise de bureau ergonomique",
      "volume": 13000,
      "kd": 12,
      "destination": "https://furniwell.fr/collections/chaise-ergonomique",
      "role": "办公椅主分类"
    },
    {
      "keyword": "bureau réglable en hauteur",
      "volume": 1500,
      "kd": 0,
      "destination": "https://furniwell.fr/collections/bureau-assis-debout",
      "role": "升降桌主分类的同意图词"
    },
    {
      "keyword": "bureau assis debout électrique",
      "volume": 800,
      "kd": 1,
      "destination": "https://furniwell.fr/collections/bureau-assis-debout",
      "role": "升降桌主分类的功能词"
    },
    {
      "keyword": "bureau assis debout 160x80",
      "volume": 300,
      "kd": 79,
      "destination": "https://furniwell.fr/collections/bureau-assis-debout",
      "role": "尺寸模块 / 对应变体"
    },
    {
      "keyword": "cadre bureau assis debout",
      "volume": 200,
      "kd": 0,
      "destination": "https://furniwell.fr/collections/cadres-de-bureau",
      "role": "桌架分类"
    },
    {
      "keyword": "bureau assis debout 120x60",
      "volume": 150,
      "kd": 69,
      "destination": "https://furniwell.fr/collections/bureau-assis-debout",
      "role": "尺寸模块 / 对应变体"
    },
    {
      "keyword": "piètement bureau assis debout",
      "volume": 100,
      "kd": 0,
      "destination": "https://furniwell.fr/collections/cadres-de-bureau",
      "role": "桌架分类的同意图词"
    }
  ],
  "pageCopy": [
    {
      "page": "首页",
      "url": "https://furniwell.fr/",
      "title": "Bureaux assis-debout et chaises ergonomiques | Furniwell",
      "h1": "Aménagez votre espace de travail avec Furniwell"
    },
    {
      "page": "升降桌分类",
      "url": "https://furniwell.fr/collections/bureau-assis-debout",
      "title": "Bureaux assis-debout électriques | Furniwell",
      "h1": "Bureaux assis-debout électriques"
    },
    {
      "page": "办公椅分类",
      "url": "https://furniwell.fr/collections/chaise-ergonomique",
      "title": "Chaises de bureau ergonomiques | Furniwell",
      "h1": "Chaises de bureau ergonomiques"
    },
    {
      "page": "桌架分类",
      "url": "https://furniwell.fr/collections/cadres-de-bureau",
      "title": "Cadres de bureau assis-debout électriques | Furniwell",
      "h1": "Cadres de bureau assis-debout électriques"
    }
  ],
  "phases": [
    {
      "when": "第 1–3 天",
      "title": "修正真实错误",
      "items": [
        "FR-01：逐变体 GTIN",
        "FR-02：404 套购链接",
        "FR-03：单位、规格及配送口径"
      ]
    },
    {
      "when": "第 1–2 周",
      "title": "完善商业页面",
      "items": [
        "FR-04–07：分类、描述及 SEO 标签",
        "FR-08–10：空页、内链与法语校对"
      ]
    },
    {
      "when": "第 3–4 周",
      "title": "补语言与增强信息",
      "items": [
        "FR-11–13：hreflang、商品 schema 和图片",
        "FR-14：选购内容与相关引荐"
      ]
    },
    {
      "when": "上线后 7 / 14 / 30 天",
      "title": "按真实数据复查",
      "items": [
        "FR-15：索引与非品牌曝光 / 点击 / 订单",
        "FR-16：移动端实测，保存前后报告"
      ]
    }
  ],
  "baseline": [
    {
      "label": "Sitemap 页面响应",
      "value": "50 / 50 返回 200",
      "note": "仅代表当次 HTTP 可访问，不代表 Google 已索引。"
    },
    {
      "label": "主域跳转",
      "value": "HTTP / www → HTTPS 主域，301",
      "note": "原跳转已正常，无需重复改造。"
    },
    {
      "label": "Canonical 与语言",
      "value": "50 页均有自引用 canonical，lang=fr",
      "note": "变体和排序参数指向主 URL；总目录分页保留自身地址。"
    },
    {
      "label": "抓取与基础 schema",
      "value": "未见全站抓取阻挡；35 个 Product + BreadcrumbList",
      "note": "基础结构存在；商品标识符的准确性仍需修正。"
    }
  ]
};
