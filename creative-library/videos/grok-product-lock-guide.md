# Furniwell Grok 产品与人物交互提示词使用指南

更新：2026-10-29（北京时间）。逐镜头定义出镜人数、手部和接触关系；先验收静止首帧，再分别生成五段 3 秒视频，最后硬切剪辑。

附件顺序：image1 主商品原图；image2 搭配椅原图；image3 当前独立镜头已验收首帧。链接不等于已上传附件。

1. 先下载主商品原图与灰色高背办公椅原图并实际上传，分别作为 image1、image2。只粘贴商品链接不会绑定图片。

2. 先复制每镜头的“首帧提示词”制作单张 9:16 首帧；先验收人数、手数、肩肘腕连接、椅背在身后及桌沿间隙，再核对产品。错误首帧必须重做，不能交给视频模型修复。

3. 推荐分镜生成：每镜头开独立任务，先上传主商品原图作为 image1、搭配椅原图作为 image2，再上传本镜头已验收首帧作为 image3。image2 不再指首帧，不要上传另一镜头的首帧。

4. 15 秒总提示词现在是剪辑计划，不直接整段交给 Grok 连续生成。每镜头只复制本段 3 秒图生视频指令；image1 主商品、image2 搭配椅、image3 当前首帧。界面不识别标签时手动指定附件。

5. 每段只做一个小动作：人物镜头桌椅固定，手部特写仅一只右手，升降镜头无人且椅子在运动区外。不生成入座、起身或转身过程；用硬切连接已完成状态。字幕、口播、品牌和促销信息后期添加。

人物交互：人物已坐稳、双手分放大腿；手部特写仅一只右手；升降镜头完全无人。椅背在身体后方，座面承托骨盆，桌沿与扶手不穿模。不生成入座、起身或转身过渡。错误首帧必须重做，不能交给视频模型修复。

关键定义：前＝靠人的工作长边；右＝入座者自己的右手侧。倒装两节立柱＝粗管在上、细管在下。主商品与搭配椅分别锁定，椅子不随桌面升降，不推断为随货套装。

# FV-01 · 坐着也要适合自己的高度 · Grok 产品锁定版
更新日期：2026-10-29（北京时间）；研究样本日期仍为 2026-10-27。
固定产品：Economy 白色四拼桌板 120 × 60 cm
SKU：G-HAD241222B；variant：44533451587850
商品：https://furniwell.de/products/economy-elektrisch-hohenverstellbarer-schreibtisch?variant=44533451587850
官网原图 / image1：https://cdn.shopify.com/s/files/1/0580/4615/2882/files/EconomyElektrischHohenverstellbarerSchreibtisch-sku_1.jpg?v=1764671992
搭配椅 / image2：G-OCNC23-0240-2；https://furniwell.de/products/ergonomischer-burostuhl-mit-verstellbarer-hoher-rucken?variant=44820467712266
椅子官网原图：https://cdn.shopify.com/s/files/1/0580/4615/2882/files/0240-Grey.jpg?v=1698643212
每镜头首帧作为 image3；搭配椅单独销售。更换椅子款式或颜色请使用网页的中文 Prompt 生成区。

## 使用顺序
1. 先下载主商品原图与灰色高背办公椅原图并实际上传，分别作为 image1、image2。只粘贴商品链接不会绑定图片。
2. 先复制每镜头的“首帧提示词”制作单张 9:16 首帧；先验收人数、手数、肩肘腕连接、椅背在身后及桌沿间隙，再核对产品。错误首帧必须重做，不能交给视频模型修复。
3. 推荐分镜生成：每镜头开独立任务，先上传主商品原图作为 image1、搭配椅原图作为 image2，再上传本镜头已验收首帧作为 image3。image2 不再指首帧，不要上传另一镜头的首帧。
4. 15 秒总提示词现在是剪辑计划，不直接整段交给 Grok 连续生成。每镜头只复制本段 3 秒图生视频指令；image1 主商品、image2 搭配椅、image3 当前首帧。界面不识别标签时手动指定附件。
5. 每段只做一个小动作：人物镜头桌椅固定，手部特写仅一只右手，升降镜头无人且椅子在运动区外。不生成入座、起身或转身过程；用硬切连接已完成状态。字幕、口播、品牌和促销信息后期添加。

## 固定产品结构
- 白色 120 × 60 cm；四片拼接桌板，保留原图拼缝。
- 两根白色立柱，每根两节：粗外套管在上，细内管在下并连接底脚。
- 两只原装白色长条 T 脚，保留黑色脚垫、横梁与线缆。
- 仅一个黑色外挂手控器：入座者右手侧、靠人的前长边下方；不是右侧短边。
核验边界：已对照同一变体官方主图确认两节倒装。

## 15 秒剪辑计划（纯英文；不要整段连续生成）
```text
Production recipe FV-01. EDIT PLAN ONLY: five INDEPENDENT 3-second vertical 9:16 clips, joined into a 15-second ad. Do NOT submit this complete plan as a single continuous Grok generation. Make and approve each start still, then copy only that shot's image-to-video prompt. Actually upload @image1 as the official product reference and @image2 as the companion chair reference; each separate clip also uses its own approved @image3.

PRODUCT IDENTITY — highest priority:
Furniwell Economy, SKU G-HAD241222B, variant 44533451587850. White 120 x 60 cm FOUR-PANEL desktop, with the exact seam pattern in @image1. Two white lifting columns, TWO telescoping sections per column. Two original white T-shaped floor feet with their original dark leveling pads. Exactly ONE original black hanging digital keypad under the user-facing FRONT LONG EDGE, on the seated user's anatomical RIGHT. Copy its actual housing, angle, display and buttons from @image1. No drawer, glass top, third column, wheels, extra keypad or added cable tray.
COLUMN ASSEMBLY:
INVERTED TWO-STAGE COLUMNS: the WIDER outer sleeve is UPPER, attached to the underside frame; the NARROWER inner section is LOWER, attached to the floor foot. Thick at the top, slim at the bottom. The thick upper sleeve and desktop travel upward together; the thin lower section remains anchored to the foot, so more of the thin section becomes visible below the upper sleeve. On lowering, the upper sleeve covers more of the lower section. The feet stay planted. Do not swap tube widths, turn either column upside down, add a third section, stretch solid metal, or lift only the tabletop.
CONTROLLER LOCATION:
One black hanging keypad BELOW the front long edge at the seated worker's RIGHT. For a button shot, the worker uses her RIGHT index finger and approaches from her own side of the desk. Keep the real front-right tabletop corner and a portion of the long edge in view; never mount the keypad on the short end.
ORIENTATION: FRONT means the long working edge nearest the seated woman; BACK means the opposite edge. RIGHT always means her anatomical right when she sits facing the work surface, never the camera's right. The keypad stays fixed at that physical right-front working position across cuts. Keep cameras on the worker-facing side of the desk; no camera crossing behind the back edge and no horizontal mirroring. If a reverse view is ever used, her physical right may appear on screen-left; do not relocate the controller to compensate.
CONTINUITY:
In person shots ONLY: the same adult woman, about 30, brown hair in a low ponytail, cream sweater, charcoal trousers. Empty shots have zero people or body parts. One-hand close-ups show only her right hand and its connected wrist/forearm. Keep the same room, props and light direction across hard cuts.
One modest German home office, soft daylight from a window on the worker's LEFT, pale wall, light oak floor, one centered slim laptop. Keep the same laptop, chair and room throughout.
COMPANION CHAIR — @image2:
Use only Furniwell high-back office chair, SKU G-OCNC23-0240-2, variant 44820467712266, grey mesh with its original light frame, padded seat and five-spoke base. Chair reference: https://cdn.shopify.com/s/files/1/0580/4615/2882/files/0240-Grey.jpg?v=1698643212
Chair product: https://furniwell.de/products/ergonomischer-burostuhl-mit-verstellbarer-hoher-rucken?variant=44820467712266
Actually upload this chair photograph as @image2. Preserve its separate mesh headrest, upper mesh back, separate lower lumbar support, original arms, seat, five-spoke base and five casters. Never substitute a headrest-free generic white chair or gaming chair. Keep the same chair through every shot. Desk @image1 and chair @image2 are independent shape references. The chair stays grounded when the desk rises. This chair is sold separately; do not imply a free chair or desk-and-chair bundle.
HUMAN / CONTACT GEOMETRY: establish physical staging before motion. The same adult appears ONLY in shots explicitly marked as a person shot. Empty shots do not inherit body parts from the previous shot. Start each clip from its own approved still and join clips with HARD CUTS. Never combine sitting down, standing up, turning, operating controls and lifting into one continuous action. Lock the camera for human-contact shots. No human is present during desk motion. Camera-only shots have no hand or furniture motion. Body, clothing, desktop and chair are separate opaque solids: resolve occlusion by real depth, never transparency, melting or disappearance.

EDITING: HARD CUTS between already-established poses. Never animate sitting down, rising from the chair, turning across the desk, or a full sit-to-stand lift.

SHOT 1, 0-3s: @image1 @image2
SHOT CAST AND SPATIAL LOCK:
CAST: exactly ONE anatomically complete seated adult, already seated in the start frame. Pelvis supported by the seat; chair back behind the torso; chest facing the desk; two thighs connected to the same pelvis and knees; both feet on the floor. Exactly one left and one right hand rest separately on their corresponding thighs, palms down, and stay there: no typing or reaching for controls. Each hand connects continuously through wrist, elbow and shoulder to this one person. The person is in FRONT of the chair back. Never film a face through a foreground chair back or hide the entire head and torso while leaving orphan trouser legs. Keep a visible gap between torso and desktop; armrests remain outside the front desk edge and never enter the desktop.
Locked side view from the person's right, making side profile, shoulder, torso and seat depth readable; never orbit behind or film through the chair back.
START: The same adult is already seated facing the laptop at an approved seated desk height. Hands rest separately on thighs; armrests are not pushed under the desktop.
ACTION: Only one tiny glance/head nod toward the screen; hands, torso, chair and desk stay in place.
END: The same complete seated pose, with both hands still on their thighs; no reach or rising.

SHOT 2, 3-6s: @image1 @image2
SHOT CAST AND SPATIAL LOCK:
CAST: only ONE right hand belonging to the same adult, continuously connected to one wrist and forearm entering from the worker-side edge of the frame. No second hand, extra forearm, face or torso in this crop. The left hand stays on the lap, entirely outside the crop. The right hand has five fingers. Keep the start-frame grip and perform only the specified small local action; palm, wrist and forearm stay connected with unchanged lengths and no regripping. No hand emerges through the desktop, chair or keypad. If contact is occluded, repair the start-frame camera position instead of inventing another hand.
Locked contextual close-up showing the real component, its mounting edge/surface and contact point. No push-in, orbit or extreme wide angle.
START: The exact SKU's original control remains at its original user-right front LONG edge. Only one right hand and connected wrist/forearm are visible. Its index fingertip is already at one existing button; the other four fingers rest curled. Keep the tabletop corner and contact point readable.
ACTION: Only the right index finger makes one tiny press and stops. Wrist, forearm and other fingers keep their positions. The desk remains stationary throughout; this shot establishes the control location, with lifting in a separate empty shot.
END: Still one continuously attached right hand; original keypad, edge and desk height unchanged.

SHOT 3, 6-9s: @image1 @image2
SHOT CAST AND SPATIAL LOCK:
CAST: ZERO people, ZERO hands and ZERO feet. The chair is fully empty; no trouser legs, shoes or human silhouette beneath it. Cut directly to this approved empty start frame; never dissolve a person away within the clip.
Locked camera and focal length; no push, zoom or orbit.
The ONLY motion is verified small desk travel. No human enters the motion zone; no button-operating hand is shown.
START: Empty lifting shot with level top, both complete inverted columns and floor feet readable. Chair is already clear of the lifting path; armrests have clearance from the top and frame. Original cable has slack; feet are grounded.
ACTION: Only a SMALL partial lift of a few centimeters: the wider upper sleeves and level desktop move upward together, revealing more of the anchored narrow lower sections. Feet and camera fixed; no person or hand; chair still. No full sit-to-stand transition in three seconds.
END: The same desk after the small lift, with cable slack, feet and chair unchanged.

SHOT 4, 9-12s: @image1 @image2
SHOT CAST AND SPATIAL LOCK:
CAST: exactly ONE anatomically complete seated adult, already seated in the start frame. Pelvis supported by the seat; chair back behind the torso; chest facing the desk; two thighs connected to the same pelvis and knees; both feet on the floor. Exactly one left and one right hand rest separately on their corresponding thighs, palms down, and stay there: no typing or reaching for controls. Each hand connects continuously through wrist, elbow and shoulder to this one person. The person is in FRONT of the chair back. Never film a face through a foreground chair back or hide the entire head and torso while leaving orphan trouser legs. Keep a visible gap between torso and desktop; armrests remain outside the front desk edge and never enter the desktop.
Locked side view from the person's right, making side profile, shoulder, torso and seat depth readable; never orbit behind or film through the chair back.
START: The same adult is already seated facing the laptop at an approved seated desk height. Hands rest separately on thighs; armrests are not pushed under the desktop.
ACTION: Only one tiny glance/head nod toward the screen; hands, torso, chair and desk stay in place.
END: The same complete seated pose, with both hands still on their thighs; no reach or rising.

SHOT 5, 12-15s: @image1 @image2
SHOT CAST AND SPATIAL LOCK:
CAST: ZERO people, ZERO hands and ZERO feet. The chair is fully empty; no trouser legs, shoes or human silhouette beneath it. Cut directly to this approved empty start frame; never dissolve a person away within the clip.
Keep the complete product and floor feet readable. A very small straight push-in only; no orbit or perspective switch.
START: The exact product and the same specified chair are already staged. Full product, empty scene, furniture and props still.
ACTION: Only the camera makes a tiny straight push-in; product, chair and props remain still.
END: The same complete product and empty chair; room for an editor-added CTA.

START-FRAME AND CLIP ACCEPTANCE: before animation, check actor/hand count, shoulder-elbow-wrist continuity, pelvis supported by seat, chair back behind the person, and clearance to desktop and armrests. Hand details contain only one right hand; empty shots have no leftover legs or feet. Reject an invalid start frame before animation; do not ask the video model to repair it. Inspect beginning, middle of action and end of each clip. Extra hands, detached torso, intersections or disappearing body mean reject the whole clip and regenerate with less motion or retain the approved still. Blurring, fading or cropping the defect is not a repair. Prompts reduce risk but do not guarantee every generated frame.

HARD FAILURES: wrong SKU, mirrored scene, controller on user-left or a short end, second controller, ordinary columns with wider lower tubes, changed stage count, floating feet, bending/tilting/elastic desktop, extra drawer, extra leg, disappearing cable, unsupported accessory. No generated captions, voice-over, music, promo badge or brand lettering. Add German subtitles and branding in editing. If geometry cannot be kept, reduce the action or retain the approved still; do not redesign the product.
```

## 镜头 1 · 0–3 秒
后期德语字幕：Dein Tisch muss zu dir passen.
### 首帧提示词
```text
@image1 @image2

Create ONE photorealistic 9:16 still image, not a storyboard or collage. The attached @image1 is the exact official desk photograph and the only desk-shape reference; @image2 independently locks the companion chair. Preserve the furniture; change only the human staging and room described below.

Production recipe FV-01, shot 1 START FRAME.

PRODUCT IDENTITY — highest priority:
Furniwell Economy, SKU G-HAD241222B, variant 44533451587850. White 120 x 60 cm FOUR-PANEL desktop, with the exact seam pattern in @image1. Two white lifting columns, TWO telescoping sections per column. Two original white T-shaped floor feet with their original dark leveling pads. Exactly ONE original black hanging digital keypad under the user-facing FRONT LONG EDGE, on the seated user's anatomical RIGHT. Copy its actual housing, angle, display and buttons from @image1. No drawer, glass top, third column, wheels, extra keypad or added cable tray.
COLUMN ASSEMBLY:
INVERTED TWO-STAGE COLUMNS: the WIDER outer sleeve is UPPER, attached to the underside frame; the NARROWER inner section is LOWER, attached to the floor foot. Thick at the top, slim at the bottom. The thick upper sleeve and desktop travel upward together; the thin lower section remains anchored to the foot, so more of the thin section becomes visible below the upper sleeve. On lowering, the upper sleeve covers more of the lower section. The feet stay planted. Do not swap tube widths, turn either column upside down, add a third section, stretch solid metal, or lift only the tabletop.
CONTROLLER LOCATION:
One black hanging keypad BELOW the front long edge at the seated worker's RIGHT. For a button shot, the worker uses her RIGHT index finger and approaches from her own side of the desk. Keep the real front-right tabletop corner and a portion of the long edge in view; never mount the keypad on the short end.
ORIENTATION: FRONT means the long working edge nearest the seated woman; BACK means the opposite edge. RIGHT always means her anatomical right when she sits facing the work surface, never the camera's right. The keypad stays fixed at that physical right-front working position across cuts. Keep cameras on the worker-facing side of the desk; no camera crossing behind the back edge and no horizontal mirroring. If a reverse view is ever used, her physical right may appear on screen-left; do not relocate the controller to compensate.
CONTINUITY:
In person shots ONLY: the same adult woman, about 30, brown hair in a low ponytail, cream sweater, charcoal trousers. Empty shots have zero people or body parts. One-hand close-ups show only her right hand and its connected wrist/forearm. Keep the same room, props and light direction across hard cuts.
One modest German home office, soft daylight from a window on the worker's LEFT, pale wall, light oak floor, one centered slim laptop. Keep the same laptop, chair and room throughout.
COMPANION CHAIR — @image2:
Use only Furniwell high-back office chair, SKU G-OCNC23-0240-2, variant 44820467712266, grey mesh with its original light frame, padded seat and five-spoke base. Chair reference: https://cdn.shopify.com/s/files/1/0580/4615/2882/files/0240-Grey.jpg?v=1698643212
Chair product: https://furniwell.de/products/ergonomischer-burostuhl-mit-verstellbarer-hoher-rucken?variant=44820467712266
Actually upload this chair photograph as @image2. Preserve its separate mesh headrest, upper mesh back, separate lower lumbar support, original arms, seat, five-spoke base and five casters. Never substitute a headrest-free generic white chair or gaming chair. Keep the same chair through every shot. Desk @image1 and chair @image2 are independent shape references. The chair stays grounded when the desk rises. This chair is sold separately; do not imply a free chair or desk-and-chair bundle.
HUMAN / CONTACT GEOMETRY: establish physical staging before motion. The same adult appears ONLY in shots explicitly marked as a person shot. Empty shots do not inherit body parts from the previous shot. Start each clip from its own approved still and join clips with HARD CUTS. Never combine sitting down, standing up, turning, operating controls and lifting into one continuous action. Lock the camera for human-contact shots. No human is present during desk motion. Camera-only shots have no hand or furniture motion. Body, clothing, desktop and chair are separate opaque solids: resolve occlusion by real depth, never transparency, melting or disappearance.

SHOT CAST AND SPATIAL LOCK:
CAST: exactly ONE anatomically complete seated adult, already seated in the start frame. Pelvis supported by the seat; chair back behind the torso; chest facing the desk; two thighs connected to the same pelvis and knees; both feet on the floor. Exactly one left and one right hand rest separately on their corresponding thighs, palms down, and stay there: no typing or reaching for controls. Each hand connects continuously through wrist, elbow and shoulder to this one person. The person is in FRONT of the chair back. Never film a face through a foreground chair back or hide the entire head and torso while leaving orphan trouser legs. Keep a visible gap between torso and desktop; armrests remain outside the front desk edge and never enter the desktop.
Locked side view from the person's right, making side profile, shoulder, torso and seat depth readable; never orbit behind or film through the chair back.

THIS SHOT START FRAME:

The same adult is already seated facing the laptop at an approved seated desk height. Hands rest separately on thighs; armrests are not pushed under the desktop.

Freeze this single start pose; do not include the action or end state. No motion trail, duplicate pose or simultaneous before/after states. Reject a faulty anatomical start frame before video generation.

START-FRAME AND CLIP ACCEPTANCE: before animation, check actor/hand count, shoulder-elbow-wrist continuity, pelvis supported by seat, chair back behind the person, and clearance to desktop and armrests. Hand details contain only one right hand; empty shots have no leftover legs or feet. Reject an invalid start frame before animation; do not ask the video model to repair it. Inspect beginning, middle of action and end of each clip. Extra hands, detached torso, intersections or disappearing body mean reject the whole clip and regenerate with less motion or retain the approved still. Blurring, fading or cropping the defect is not a repair. Prompts reduce risk but do not guarantee every generated frame.

HARD FAILURES: wrong SKU, mirrored scene, controller on user-left or a short end, second controller, ordinary columns with wider lower tubes, changed stage count, floating feet, bending/tilting/elastic desktop, extra drawer, extra leg, disappearing cable, unsupported accessory. No generated captions, voice-over, music, promo badge or brand lettering. Add German subtitles and branding in editing. If geometry cannot be kept, reduce the action or retain the approved still; do not redesign the product.
```
### 单镜头 Grok 图生视频提示词
```text
@image1 @image2 @image3

Generate ONE 3-second vertical 9:16 image-to-video clip. In this separate clip task, @image1 is the official product identity reference; @image2 is the approved Furniwell chair photograph; @image3 is THIS SHOT'S already approved start frame. Begin exactly from @image3. Preserve its framing, pose, geometry, room, props and lighting. Do not create a different opening composition.

PRODUCT IDENTITY — highest priority:
Furniwell Economy, SKU G-HAD241222B, variant 44533451587850. White 120 x 60 cm FOUR-PANEL desktop, with the exact seam pattern in @image1. Two white lifting columns, TWO telescoping sections per column. Two original white T-shaped floor feet with their original dark leveling pads. Exactly ONE original black hanging digital keypad under the user-facing FRONT LONG EDGE, on the seated user's anatomical RIGHT. Copy its actual housing, angle, display and buttons from @image1. No drawer, glass top, third column, wheels, extra keypad or added cable tray.
COLUMN ASSEMBLY:
INVERTED TWO-STAGE COLUMNS: the WIDER outer sleeve is UPPER, attached to the underside frame; the NARROWER inner section is LOWER, attached to the floor foot. Thick at the top, slim at the bottom. The thick upper sleeve and desktop travel upward together; the thin lower section remains anchored to the foot, so more of the thin section becomes visible below the upper sleeve. On lowering, the upper sleeve covers more of the lower section. The feet stay planted. Do not swap tube widths, turn either column upside down, add a third section, stretch solid metal, or lift only the tabletop.
CONTROLLER LOCATION:
One black hanging keypad BELOW the front long edge at the seated worker's RIGHT. For a button shot, the worker uses her RIGHT index finger and approaches from her own side of the desk. Keep the real front-right tabletop corner and a portion of the long edge in view; never mount the keypad on the short end.
ORIENTATION: FRONT means the long working edge nearest the seated woman; BACK means the opposite edge. RIGHT always means her anatomical right when she sits facing the work surface, never the camera's right. The keypad stays fixed at that physical right-front working position across cuts. Keep cameras on the worker-facing side of the desk; no camera crossing behind the back edge and no horizontal mirroring. If a reverse view is ever used, her physical right may appear on screen-left; do not relocate the controller to compensate.
CONTINUITY:
In person shots ONLY: the same adult woman, about 30, brown hair in a low ponytail, cream sweater, charcoal trousers. Empty shots have zero people or body parts. One-hand close-ups show only her right hand and its connected wrist/forearm. Keep the same room, props and light direction across hard cuts.
One modest German home office, soft daylight from a window on the worker's LEFT, pale wall, light oak floor, one centered slim laptop. Keep the same laptop, chair and room throughout.
COMPANION CHAIR — @image2:
Use only Furniwell high-back office chair, SKU G-OCNC23-0240-2, variant 44820467712266, grey mesh with its original light frame, padded seat and five-spoke base. Chair reference: https://cdn.shopify.com/s/files/1/0580/4615/2882/files/0240-Grey.jpg?v=1698643212
Chair product: https://furniwell.de/products/ergonomischer-burostuhl-mit-verstellbarer-hoher-rucken?variant=44820467712266
Actually upload this chair photograph as @image2. Preserve its separate mesh headrest, upper mesh back, separate lower lumbar support, original arms, seat, five-spoke base and five casters. Never substitute a headrest-free generic white chair or gaming chair. Keep the same chair through every shot. Desk @image1 and chair @image2 are independent shape references. The chair stays grounded when the desk rises. This chair is sold separately; do not imply a free chair or desk-and-chair bundle.
HUMAN / CONTACT GEOMETRY: establish physical staging before motion. The same adult appears ONLY in shots explicitly marked as a person shot. Empty shots do not inherit body parts from the previous shot. Start each clip from its own approved still and join clips with HARD CUTS. Never combine sitting down, standing up, turning, operating controls and lifting into one continuous action. Lock the camera for human-contact shots. No human is present during desk motion. Camera-only shots have no hand or furniture motion. Body, clothing, desktop and chair are separate opaque solids: resolve occlusion by real depth, never transparency, melting or disappearance.

SHOT CAST AND SPATIAL LOCK:
CAST: exactly ONE anatomically complete seated adult, already seated in the start frame. Pelvis supported by the seat; chair back behind the torso; chest facing the desk; two thighs connected to the same pelvis and knees; both feet on the floor. Exactly one left and one right hand rest separately on their corresponding thighs, palms down, and stay there: no typing or reaching for controls. Each hand connects continuously through wrist, elbow and shoulder to this one person. The person is in FRONT of the chair back. Never film a face through a foreground chair back or hide the entire head and torso while leaving orphan trouser legs. Keep a visible gap between torso and desktop; armrests remain outside the front desk edge and never enter the desktop.
Locked side view from the person's right, making side profile, shoulder, torso and seat depth readable; never orbit behind or film through the chair back.

ONLY ACTION:

Only one tiny glance/head nod toward the screen; hands, torso, chair and desk stay in place.

END STATE:

The same complete seated pose, with both hands still on their thighs; no reach or rising.

No internal cut, orbit or unrequested action. Use ONLY the camera or body motion specified for this shot, never both. Preserve everything else.

START-FRAME AND CLIP ACCEPTANCE: before animation, check actor/hand count, shoulder-elbow-wrist continuity, pelvis supported by seat, chair back behind the person, and clearance to desktop and armrests. Hand details contain only one right hand; empty shots have no leftover legs or feet. Reject an invalid start frame before animation; do not ask the video model to repair it. Inspect beginning, middle of action and end of each clip. Extra hands, detached torso, intersections or disappearing body mean reject the whole clip and regenerate with less motion or retain the approved still. Blurring, fading or cropping the defect is not a repair. Prompts reduce risk but do not guarantee every generated frame.

HARD FAILURES: wrong SKU, mirrored scene, controller on user-left or a short end, second controller, ordinary columns with wider lower tubes, changed stage count, floating feet, bending/tilting/elastic desktop, extra drawer, extra leg, disappearing cable, unsupported accessory. No generated captions, voice-over, music, promo badge or brand lettering. Add German subtitles and branding in editing. If geometry cannot be kept, reduce the action or retain the approved still; do not redesign the product.
```

## 镜头 2 · 3–6 秒
后期德语字幕：Deine Höhe.
### 首帧提示词
```text
@image1 @image2

Create ONE photorealistic 9:16 still image, not a storyboard or collage. The attached @image1 is the exact official desk photograph and the only desk-shape reference; @image2 independently locks the companion chair. Preserve the furniture; change only the human staging and room described below.

Production recipe FV-01, shot 2 START FRAME.

PRODUCT IDENTITY — highest priority:
Furniwell Economy, SKU G-HAD241222B, variant 44533451587850. White 120 x 60 cm FOUR-PANEL desktop, with the exact seam pattern in @image1. Two white lifting columns, TWO telescoping sections per column. Two original white T-shaped floor feet with their original dark leveling pads. Exactly ONE original black hanging digital keypad under the user-facing FRONT LONG EDGE, on the seated user's anatomical RIGHT. Copy its actual housing, angle, display and buttons from @image1. No drawer, glass top, third column, wheels, extra keypad or added cable tray.
COLUMN ASSEMBLY:
INVERTED TWO-STAGE COLUMNS: the WIDER outer sleeve is UPPER, attached to the underside frame; the NARROWER inner section is LOWER, attached to the floor foot. Thick at the top, slim at the bottom. The thick upper sleeve and desktop travel upward together; the thin lower section remains anchored to the foot, so more of the thin section becomes visible below the upper sleeve. On lowering, the upper sleeve covers more of the lower section. The feet stay planted. Do not swap tube widths, turn either column upside down, add a third section, stretch solid metal, or lift only the tabletop.
CONTROLLER LOCATION:
One black hanging keypad BELOW the front long edge at the seated worker's RIGHT. For a button shot, the worker uses her RIGHT index finger and approaches from her own side of the desk. Keep the real front-right tabletop corner and a portion of the long edge in view; never mount the keypad on the short end.
ORIENTATION: FRONT means the long working edge nearest the seated woman; BACK means the opposite edge. RIGHT always means her anatomical right when she sits facing the work surface, never the camera's right. The keypad stays fixed at that physical right-front working position across cuts. Keep cameras on the worker-facing side of the desk; no camera crossing behind the back edge and no horizontal mirroring. If a reverse view is ever used, her physical right may appear on screen-left; do not relocate the controller to compensate.
CONTINUITY:
In person shots ONLY: the same adult woman, about 30, brown hair in a low ponytail, cream sweater, charcoal trousers. Empty shots have zero people or body parts. One-hand close-ups show only her right hand and its connected wrist/forearm. Keep the same room, props and light direction across hard cuts.
One modest German home office, soft daylight from a window on the worker's LEFT, pale wall, light oak floor, one centered slim laptop. Keep the same laptop, chair and room throughout.
COMPANION CHAIR — @image2:
Use only Furniwell high-back office chair, SKU G-OCNC23-0240-2, variant 44820467712266, grey mesh with its original light frame, padded seat and five-spoke base. Chair reference: https://cdn.shopify.com/s/files/1/0580/4615/2882/files/0240-Grey.jpg?v=1698643212
Chair product: https://furniwell.de/products/ergonomischer-burostuhl-mit-verstellbarer-hoher-rucken?variant=44820467712266
Actually upload this chair photograph as @image2. Preserve its separate mesh headrest, upper mesh back, separate lower lumbar support, original arms, seat, five-spoke base and five casters. Never substitute a headrest-free generic white chair or gaming chair. Keep the same chair through every shot. Desk @image1 and chair @image2 are independent shape references. The chair stays grounded when the desk rises. This chair is sold separately; do not imply a free chair or desk-and-chair bundle.
HUMAN / CONTACT GEOMETRY: establish physical staging before motion. The same adult appears ONLY in shots explicitly marked as a person shot. Empty shots do not inherit body parts from the previous shot. Start each clip from its own approved still and join clips with HARD CUTS. Never combine sitting down, standing up, turning, operating controls and lifting into one continuous action. Lock the camera for human-contact shots. No human is present during desk motion. Camera-only shots have no hand or furniture motion. Body, clothing, desktop and chair are separate opaque solids: resolve occlusion by real depth, never transparency, melting or disappearance.

SHOT CAST AND SPATIAL LOCK:
CAST: only ONE right hand belonging to the same adult, continuously connected to one wrist and forearm entering from the worker-side edge of the frame. No second hand, extra forearm, face or torso in this crop. The left hand stays on the lap, entirely outside the crop. The right hand has five fingers. Keep the start-frame grip and perform only the specified small local action; palm, wrist and forearm stay connected with unchanged lengths and no regripping. No hand emerges through the desktop, chair or keypad. If contact is occluded, repair the start-frame camera position instead of inventing another hand.
Locked contextual close-up showing the real component, its mounting edge/surface and contact point. No push-in, orbit or extreme wide angle.

THIS SHOT START FRAME:

The exact SKU's original control remains at its original user-right front LONG edge. Only one right hand and connected wrist/forearm are visible. Its index fingertip is already at one existing button; the other four fingers rest curled. Keep the tabletop corner and contact point readable.

Freeze this single start pose; do not include the action or end state. No motion trail, duplicate pose or simultaneous before/after states. Reject a faulty anatomical start frame before video generation.

START-FRAME AND CLIP ACCEPTANCE: before animation, check actor/hand count, shoulder-elbow-wrist continuity, pelvis supported by seat, chair back behind the person, and clearance to desktop and armrests. Hand details contain only one right hand; empty shots have no leftover legs or feet. Reject an invalid start frame before animation; do not ask the video model to repair it. Inspect beginning, middle of action and end of each clip. Extra hands, detached torso, intersections or disappearing body mean reject the whole clip and regenerate with less motion or retain the approved still. Blurring, fading or cropping the defect is not a repair. Prompts reduce risk but do not guarantee every generated frame.

HARD FAILURES: wrong SKU, mirrored scene, controller on user-left or a short end, second controller, ordinary columns with wider lower tubes, changed stage count, floating feet, bending/tilting/elastic desktop, extra drawer, extra leg, disappearing cable, unsupported accessory. No generated captions, voice-over, music, promo badge or brand lettering. Add German subtitles and branding in editing. If geometry cannot be kept, reduce the action or retain the approved still; do not redesign the product.
```
### 单镜头 Grok 图生视频提示词
```text
@image1 @image2 @image3

Generate ONE 3-second vertical 9:16 image-to-video clip. In this separate clip task, @image1 is the official product identity reference; @image2 is the approved Furniwell chair photograph; @image3 is THIS SHOT'S already approved start frame. Begin exactly from @image3. Preserve its framing, pose, geometry, room, props and lighting. Do not create a different opening composition.

PRODUCT IDENTITY — highest priority:
Furniwell Economy, SKU G-HAD241222B, variant 44533451587850. White 120 x 60 cm FOUR-PANEL desktop, with the exact seam pattern in @image1. Two white lifting columns, TWO telescoping sections per column. Two original white T-shaped floor feet with their original dark leveling pads. Exactly ONE original black hanging digital keypad under the user-facing FRONT LONG EDGE, on the seated user's anatomical RIGHT. Copy its actual housing, angle, display and buttons from @image1. No drawer, glass top, third column, wheels, extra keypad or added cable tray.
COLUMN ASSEMBLY:
INVERTED TWO-STAGE COLUMNS: the WIDER outer sleeve is UPPER, attached to the underside frame; the NARROWER inner section is LOWER, attached to the floor foot. Thick at the top, slim at the bottom. The thick upper sleeve and desktop travel upward together; the thin lower section remains anchored to the foot, so more of the thin section becomes visible below the upper sleeve. On lowering, the upper sleeve covers more of the lower section. The feet stay planted. Do not swap tube widths, turn either column upside down, add a third section, stretch solid metal, or lift only the tabletop.
CONTROLLER LOCATION:
One black hanging keypad BELOW the front long edge at the seated worker's RIGHT. For a button shot, the worker uses her RIGHT index finger and approaches from her own side of the desk. Keep the real front-right tabletop corner and a portion of the long edge in view; never mount the keypad on the short end.
ORIENTATION: FRONT means the long working edge nearest the seated woman; BACK means the opposite edge. RIGHT always means her anatomical right when she sits facing the work surface, never the camera's right. The keypad stays fixed at that physical right-front working position across cuts. Keep cameras on the worker-facing side of the desk; no camera crossing behind the back edge and no horizontal mirroring. If a reverse view is ever used, her physical right may appear on screen-left; do not relocate the controller to compensate.
CONTINUITY:
In person shots ONLY: the same adult woman, about 30, brown hair in a low ponytail, cream sweater, charcoal trousers. Empty shots have zero people or body parts. One-hand close-ups show only her right hand and its connected wrist/forearm. Keep the same room, props and light direction across hard cuts.
One modest German home office, soft daylight from a window on the worker's LEFT, pale wall, light oak floor, one centered slim laptop. Keep the same laptop, chair and room throughout.
COMPANION CHAIR — @image2:
Use only Furniwell high-back office chair, SKU G-OCNC23-0240-2, variant 44820467712266, grey mesh with its original light frame, padded seat and five-spoke base. Chair reference: https://cdn.shopify.com/s/files/1/0580/4615/2882/files/0240-Grey.jpg?v=1698643212
Chair product: https://furniwell.de/products/ergonomischer-burostuhl-mit-verstellbarer-hoher-rucken?variant=44820467712266
Actually upload this chair photograph as @image2. Preserve its separate mesh headrest, upper mesh back, separate lower lumbar support, original arms, seat, five-spoke base and five casters. Never substitute a headrest-free generic white chair or gaming chair. Keep the same chair through every shot. Desk @image1 and chair @image2 are independent shape references. The chair stays grounded when the desk rises. This chair is sold separately; do not imply a free chair or desk-and-chair bundle.
HUMAN / CONTACT GEOMETRY: establish physical staging before motion. The same adult appears ONLY in shots explicitly marked as a person shot. Empty shots do not inherit body parts from the previous shot. Start each clip from its own approved still and join clips with HARD CUTS. Never combine sitting down, standing up, turning, operating controls and lifting into one continuous action. Lock the camera for human-contact shots. No human is present during desk motion. Camera-only shots have no hand or furniture motion. Body, clothing, desktop and chair are separate opaque solids: resolve occlusion by real depth, never transparency, melting or disappearance.

SHOT CAST AND SPATIAL LOCK:
CAST: only ONE right hand belonging to the same adult, continuously connected to one wrist and forearm entering from the worker-side edge of the frame. No second hand, extra forearm, face or torso in this crop. The left hand stays on the lap, entirely outside the crop. The right hand has five fingers. Keep the start-frame grip and perform only the specified small local action; palm, wrist and forearm stay connected with unchanged lengths and no regripping. No hand emerges through the desktop, chair or keypad. If contact is occluded, repair the start-frame camera position instead of inventing another hand.
Locked contextual close-up showing the real component, its mounting edge/surface and contact point. No push-in, orbit or extreme wide angle.

ONLY ACTION:

Only the right index finger makes one tiny press and stops. Wrist, forearm and other fingers keep their positions. The desk remains stationary throughout; this shot establishes the control location, with lifting in a separate empty shot.

END STATE:

Still one continuously attached right hand; original keypad, edge and desk height unchanged.

No internal cut, orbit or unrequested action. Use ONLY the camera or body motion specified for this shot, never both. Preserve everything else.

START-FRAME AND CLIP ACCEPTANCE: before animation, check actor/hand count, shoulder-elbow-wrist continuity, pelvis supported by seat, chair back behind the person, and clearance to desktop and armrests. Hand details contain only one right hand; empty shots have no leftover legs or feet. Reject an invalid start frame before animation; do not ask the video model to repair it. Inspect beginning, middle of action and end of each clip. Extra hands, detached torso, intersections or disappearing body mean reject the whole clip and regenerate with less motion or retain the approved still. Blurring, fading or cropping the defect is not a repair. Prompts reduce risk but do not guarantee every generated frame.

HARD FAILURES: wrong SKU, mirrored scene, controller on user-left or a short end, second controller, ordinary columns with wider lower tubes, changed stage count, floating feet, bending/tilting/elastic desktop, extra drawer, extra leg, disappearing cable, unsupported accessory. No generated captions, voice-over, music, promo badge or brand lettering. Add German subtitles and branding in editing. If geometry cannot be kept, reduce the action or retain the approved still; do not redesign the product.
```

## 镜头 3 · 6–9 秒
后期德语字幕：Passend eingestellt.
### 首帧提示词
```text
@image1 @image2

Create ONE photorealistic 9:16 still image, not a storyboard or collage. The attached @image1 is the exact official desk photograph and the only desk-shape reference; @image2 independently locks the companion chair. Preserve the furniture; change only the human staging and room described below.

Production recipe FV-01, shot 3 START FRAME.

PRODUCT IDENTITY — highest priority:
Furniwell Economy, SKU G-HAD241222B, variant 44533451587850. White 120 x 60 cm FOUR-PANEL desktop, with the exact seam pattern in @image1. Two white lifting columns, TWO telescoping sections per column. Two original white T-shaped floor feet with their original dark leveling pads. Exactly ONE original black hanging digital keypad under the user-facing FRONT LONG EDGE, on the seated user's anatomical RIGHT. Copy its actual housing, angle, display and buttons from @image1. No drawer, glass top, third column, wheels, extra keypad or added cable tray.
COLUMN ASSEMBLY:
INVERTED TWO-STAGE COLUMNS: the WIDER outer sleeve is UPPER, attached to the underside frame; the NARROWER inner section is LOWER, attached to the floor foot. Thick at the top, slim at the bottom. The thick upper sleeve and desktop travel upward together; the thin lower section remains anchored to the foot, so more of the thin section becomes visible below the upper sleeve. On lowering, the upper sleeve covers more of the lower section. The feet stay planted. Do not swap tube widths, turn either column upside down, add a third section, stretch solid metal, or lift only the tabletop.
CONTROLLER LOCATION:
One black hanging keypad BELOW the front long edge at the seated worker's RIGHT. For a button shot, the worker uses her RIGHT index finger and approaches from her own side of the desk. Keep the real front-right tabletop corner and a portion of the long edge in view; never mount the keypad on the short end.
ORIENTATION: FRONT means the long working edge nearest the seated woman; BACK means the opposite edge. RIGHT always means her anatomical right when she sits facing the work surface, never the camera's right. The keypad stays fixed at that physical right-front working position across cuts. Keep cameras on the worker-facing side of the desk; no camera crossing behind the back edge and no horizontal mirroring. If a reverse view is ever used, her physical right may appear on screen-left; do not relocate the controller to compensate.
CONTINUITY:
In person shots ONLY: the same adult woman, about 30, brown hair in a low ponytail, cream sweater, charcoal trousers. Empty shots have zero people or body parts. One-hand close-ups show only her right hand and its connected wrist/forearm. Keep the same room, props and light direction across hard cuts.
One modest German home office, soft daylight from a window on the worker's LEFT, pale wall, light oak floor, one centered slim laptop. Keep the same laptop, chair and room throughout.
COMPANION CHAIR — @image2:
Use only Furniwell high-back office chair, SKU G-OCNC23-0240-2, variant 44820467712266, grey mesh with its original light frame, padded seat and five-spoke base. Chair reference: https://cdn.shopify.com/s/files/1/0580/4615/2882/files/0240-Grey.jpg?v=1698643212
Chair product: https://furniwell.de/products/ergonomischer-burostuhl-mit-verstellbarer-hoher-rucken?variant=44820467712266
Actually upload this chair photograph as @image2. Preserve its separate mesh headrest, upper mesh back, separate lower lumbar support, original arms, seat, five-spoke base and five casters. Never substitute a headrest-free generic white chair or gaming chair. Keep the same chair through every shot. Desk @image1 and chair @image2 are independent shape references. The chair stays grounded when the desk rises. This chair is sold separately; do not imply a free chair or desk-and-chair bundle.
HUMAN / CONTACT GEOMETRY: establish physical staging before motion. The same adult appears ONLY in shots explicitly marked as a person shot. Empty shots do not inherit body parts from the previous shot. Start each clip from its own approved still and join clips with HARD CUTS. Never combine sitting down, standing up, turning, operating controls and lifting into one continuous action. Lock the camera for human-contact shots. No human is present during desk motion. Camera-only shots have no hand or furniture motion. Body, clothing, desktop and chair are separate opaque solids: resolve occlusion by real depth, never transparency, melting or disappearance.

SHOT CAST AND SPATIAL LOCK:
CAST: ZERO people, ZERO hands and ZERO feet. The chair is fully empty; no trouser legs, shoes or human silhouette beneath it. Cut directly to this approved empty start frame; never dissolve a person away within the clip.
Locked camera and focal length; no push, zoom or orbit.
The ONLY motion is verified small desk travel. No human enters the motion zone; no button-operating hand is shown.

THIS SHOT START FRAME:

Empty lifting shot with level top, both complete inverted columns and floor feet readable. Chair is already clear of the lifting path; armrests have clearance from the top and frame. Original cable has slack; feet are grounded.

Freeze this single start pose; do not include the action or end state. No motion trail, duplicate pose or simultaneous before/after states. Reject a faulty anatomical start frame before video generation.

START-FRAME AND CLIP ACCEPTANCE: before animation, check actor/hand count, shoulder-elbow-wrist continuity, pelvis supported by seat, chair back behind the person, and clearance to desktop and armrests. Hand details contain only one right hand; empty shots have no leftover legs or feet. Reject an invalid start frame before animation; do not ask the video model to repair it. Inspect beginning, middle of action and end of each clip. Extra hands, detached torso, intersections or disappearing body mean reject the whole clip and regenerate with less motion or retain the approved still. Blurring, fading or cropping the defect is not a repair. Prompts reduce risk but do not guarantee every generated frame.

HARD FAILURES: wrong SKU, mirrored scene, controller on user-left or a short end, second controller, ordinary columns with wider lower tubes, changed stage count, floating feet, bending/tilting/elastic desktop, extra drawer, extra leg, disappearing cable, unsupported accessory. No generated captions, voice-over, music, promo badge or brand lettering. Add German subtitles and branding in editing. If geometry cannot be kept, reduce the action or retain the approved still; do not redesign the product.
```
### 单镜头 Grok 图生视频提示词
```text
@image1 @image2 @image3

Generate ONE 3-second vertical 9:16 image-to-video clip. In this separate clip task, @image1 is the official product identity reference; @image2 is the approved Furniwell chair photograph; @image3 is THIS SHOT'S already approved start frame. Begin exactly from @image3. Preserve its framing, pose, geometry, room, props and lighting. Do not create a different opening composition.

PRODUCT IDENTITY — highest priority:
Furniwell Economy, SKU G-HAD241222B, variant 44533451587850. White 120 x 60 cm FOUR-PANEL desktop, with the exact seam pattern in @image1. Two white lifting columns, TWO telescoping sections per column. Two original white T-shaped floor feet with their original dark leveling pads. Exactly ONE original black hanging digital keypad under the user-facing FRONT LONG EDGE, on the seated user's anatomical RIGHT. Copy its actual housing, angle, display and buttons from @image1. No drawer, glass top, third column, wheels, extra keypad or added cable tray.
COLUMN ASSEMBLY:
INVERTED TWO-STAGE COLUMNS: the WIDER outer sleeve is UPPER, attached to the underside frame; the NARROWER inner section is LOWER, attached to the floor foot. Thick at the top, slim at the bottom. The thick upper sleeve and desktop travel upward together; the thin lower section remains anchored to the foot, so more of the thin section becomes visible below the upper sleeve. On lowering, the upper sleeve covers more of the lower section. The feet stay planted. Do not swap tube widths, turn either column upside down, add a third section, stretch solid metal, or lift only the tabletop.
CONTROLLER LOCATION:
One black hanging keypad BELOW the front long edge at the seated worker's RIGHT. For a button shot, the worker uses her RIGHT index finger and approaches from her own side of the desk. Keep the real front-right tabletop corner and a portion of the long edge in view; never mount the keypad on the short end.
ORIENTATION: FRONT means the long working edge nearest the seated woman; BACK means the opposite edge. RIGHT always means her anatomical right when she sits facing the work surface, never the camera's right. The keypad stays fixed at that physical right-front working position across cuts. Keep cameras on the worker-facing side of the desk; no camera crossing behind the back edge and no horizontal mirroring. If a reverse view is ever used, her physical right may appear on screen-left; do not relocate the controller to compensate.
CONTINUITY:
In person shots ONLY: the same adult woman, about 30, brown hair in a low ponytail, cream sweater, charcoal trousers. Empty shots have zero people or body parts. One-hand close-ups show only her right hand and its connected wrist/forearm. Keep the same room, props and light direction across hard cuts.
One modest German home office, soft daylight from a window on the worker's LEFT, pale wall, light oak floor, one centered slim laptop. Keep the same laptop, chair and room throughout.
COMPANION CHAIR — @image2:
Use only Furniwell high-back office chair, SKU G-OCNC23-0240-2, variant 44820467712266, grey mesh with its original light frame, padded seat and five-spoke base. Chair reference: https://cdn.shopify.com/s/files/1/0580/4615/2882/files/0240-Grey.jpg?v=1698643212
Chair product: https://furniwell.de/products/ergonomischer-burostuhl-mit-verstellbarer-hoher-rucken?variant=44820467712266
Actually upload this chair photograph as @image2. Preserve its separate mesh headrest, upper mesh back, separate lower lumbar support, original arms, seat, five-spoke base and five casters. Never substitute a headrest-free generic white chair or gaming chair. Keep the same chair through every shot. Desk @image1 and chair @image2 are independent shape references. The chair stays grounded when the desk rises. This chair is sold separately; do not imply a free chair or desk-and-chair bundle.
HUMAN / CONTACT GEOMETRY: establish physical staging before motion. The same adult appears ONLY in shots explicitly marked as a person shot. Empty shots do not inherit body parts from the previous shot. Start each clip from its own approved still and join clips with HARD CUTS. Never combine sitting down, standing up, turning, operating controls and lifting into one continuous action. Lock the camera for human-contact shots. No human is present during desk motion. Camera-only shots have no hand or furniture motion. Body, clothing, desktop and chair are separate opaque solids: resolve occlusion by real depth, never transparency, melting or disappearance.

SHOT CAST AND SPATIAL LOCK:
CAST: ZERO people, ZERO hands and ZERO feet. The chair is fully empty; no trouser legs, shoes or human silhouette beneath it. Cut directly to this approved empty start frame; never dissolve a person away within the clip.
Locked camera and focal length; no push, zoom or orbit.
The ONLY motion is verified small desk travel. No human enters the motion zone; no button-operating hand is shown.

ONLY ACTION:

Only a SMALL partial lift of a few centimeters: the wider upper sleeves and level desktop move upward together, revealing more of the anchored narrow lower sections. Feet and camera fixed; no person or hand; chair still. No full sit-to-stand transition in three seconds.

END STATE:

The same desk after the small lift, with cable slack, feet and chair unchanged.

No internal cut, orbit or unrequested action. Use ONLY the camera or body motion specified for this shot, never both. Preserve everything else.

START-FRAME AND CLIP ACCEPTANCE: before animation, check actor/hand count, shoulder-elbow-wrist continuity, pelvis supported by seat, chair back behind the person, and clearance to desktop and armrests. Hand details contain only one right hand; empty shots have no leftover legs or feet. Reject an invalid start frame before animation; do not ask the video model to repair it. Inspect beginning, middle of action and end of each clip. Extra hands, detached torso, intersections or disappearing body mean reject the whole clip and regenerate with less motion or retain the approved still. Blurring, fading or cropping the defect is not a repair. Prompts reduce risk but do not guarantee every generated frame.

HARD FAILURES: wrong SKU, mirrored scene, controller on user-left or a short end, second controller, ordinary columns with wider lower tubes, changed stage count, floating feet, bending/tilting/elastic desktop, extra drawer, extra leg, disappearing cable, unsupported accessory. No generated captions, voice-over, music, promo badge or brand lettering. Add German subtitles and branding in editing. If geometry cannot be kept, reduce the action or retain the approved still; do not redesign the product.
```

## 镜头 4 · 9–12 秒
后期德语字幕：Dein Rhythmus.
### 首帧提示词
```text
@image1 @image2

Create ONE photorealistic 9:16 still image, not a storyboard or collage. The attached @image1 is the exact official desk photograph and the only desk-shape reference; @image2 independently locks the companion chair. Preserve the furniture; change only the human staging and room described below.

Production recipe FV-01, shot 4 START FRAME.

PRODUCT IDENTITY — highest priority:
Furniwell Economy, SKU G-HAD241222B, variant 44533451587850. White 120 x 60 cm FOUR-PANEL desktop, with the exact seam pattern in @image1. Two white lifting columns, TWO telescoping sections per column. Two original white T-shaped floor feet with their original dark leveling pads. Exactly ONE original black hanging digital keypad under the user-facing FRONT LONG EDGE, on the seated user's anatomical RIGHT. Copy its actual housing, angle, display and buttons from @image1. No drawer, glass top, third column, wheels, extra keypad or added cable tray.
COLUMN ASSEMBLY:
INVERTED TWO-STAGE COLUMNS: the WIDER outer sleeve is UPPER, attached to the underside frame; the NARROWER inner section is LOWER, attached to the floor foot. Thick at the top, slim at the bottom. The thick upper sleeve and desktop travel upward together; the thin lower section remains anchored to the foot, so more of the thin section becomes visible below the upper sleeve. On lowering, the upper sleeve covers more of the lower section. The feet stay planted. Do not swap tube widths, turn either column upside down, add a third section, stretch solid metal, or lift only the tabletop.
CONTROLLER LOCATION:
One black hanging keypad BELOW the front long edge at the seated worker's RIGHT. For a button shot, the worker uses her RIGHT index finger and approaches from her own side of the desk. Keep the real front-right tabletop corner and a portion of the long edge in view; never mount the keypad on the short end.
ORIENTATION: FRONT means the long working edge nearest the seated woman; BACK means the opposite edge. RIGHT always means her anatomical right when she sits facing the work surface, never the camera's right. The keypad stays fixed at that physical right-front working position across cuts. Keep cameras on the worker-facing side of the desk; no camera crossing behind the back edge and no horizontal mirroring. If a reverse view is ever used, her physical right may appear on screen-left; do not relocate the controller to compensate.
CONTINUITY:
In person shots ONLY: the same adult woman, about 30, brown hair in a low ponytail, cream sweater, charcoal trousers. Empty shots have zero people or body parts. One-hand close-ups show only her right hand and its connected wrist/forearm. Keep the same room, props and light direction across hard cuts.
One modest German home office, soft daylight from a window on the worker's LEFT, pale wall, light oak floor, one centered slim laptop. Keep the same laptop, chair and room throughout.
COMPANION CHAIR — @image2:
Use only Furniwell high-back office chair, SKU G-OCNC23-0240-2, variant 44820467712266, grey mesh with its original light frame, padded seat and five-spoke base. Chair reference: https://cdn.shopify.com/s/files/1/0580/4615/2882/files/0240-Grey.jpg?v=1698643212
Chair product: https://furniwell.de/products/ergonomischer-burostuhl-mit-verstellbarer-hoher-rucken?variant=44820467712266
Actually upload this chair photograph as @image2. Preserve its separate mesh headrest, upper mesh back, separate lower lumbar support, original arms, seat, five-spoke base and five casters. Never substitute a headrest-free generic white chair or gaming chair. Keep the same chair through every shot. Desk @image1 and chair @image2 are independent shape references. The chair stays grounded when the desk rises. This chair is sold separately; do not imply a free chair or desk-and-chair bundle.
HUMAN / CONTACT GEOMETRY: establish physical staging before motion. The same adult appears ONLY in shots explicitly marked as a person shot. Empty shots do not inherit body parts from the previous shot. Start each clip from its own approved still and join clips with HARD CUTS. Never combine sitting down, standing up, turning, operating controls and lifting into one continuous action. Lock the camera for human-contact shots. No human is present during desk motion. Camera-only shots have no hand or furniture motion. Body, clothing, desktop and chair are separate opaque solids: resolve occlusion by real depth, never transparency, melting or disappearance.

SHOT CAST AND SPATIAL LOCK:
CAST: exactly ONE anatomically complete seated adult, already seated in the start frame. Pelvis supported by the seat; chair back behind the torso; chest facing the desk; two thighs connected to the same pelvis and knees; both feet on the floor. Exactly one left and one right hand rest separately on their corresponding thighs, palms down, and stay there: no typing or reaching for controls. Each hand connects continuously through wrist, elbow and shoulder to this one person. The person is in FRONT of the chair back. Never film a face through a foreground chair back or hide the entire head and torso while leaving orphan trouser legs. Keep a visible gap between torso and desktop; armrests remain outside the front desk edge and never enter the desktop.
Locked side view from the person's right, making side profile, shoulder, torso and seat depth readable; never orbit behind or film through the chair back.

THIS SHOT START FRAME:

The same adult is already seated facing the laptop at an approved seated desk height. Hands rest separately on thighs; armrests are not pushed under the desktop.

Freeze this single start pose; do not include the action or end state. No motion trail, duplicate pose or simultaneous before/after states. Reject a faulty anatomical start frame before video generation.

START-FRAME AND CLIP ACCEPTANCE: before animation, check actor/hand count, shoulder-elbow-wrist continuity, pelvis supported by seat, chair back behind the person, and clearance to desktop and armrests. Hand details contain only one right hand; empty shots have no leftover legs or feet. Reject an invalid start frame before animation; do not ask the video model to repair it. Inspect beginning, middle of action and end of each clip. Extra hands, detached torso, intersections or disappearing body mean reject the whole clip and regenerate with less motion or retain the approved still. Blurring, fading or cropping the defect is not a repair. Prompts reduce risk but do not guarantee every generated frame.

HARD FAILURES: wrong SKU, mirrored scene, controller on user-left or a short end, second controller, ordinary columns with wider lower tubes, changed stage count, floating feet, bending/tilting/elastic desktop, extra drawer, extra leg, disappearing cable, unsupported accessory. No generated captions, voice-over, music, promo badge or brand lettering. Add German subtitles and branding in editing. If geometry cannot be kept, reduce the action or retain the approved still; do not redesign the product.
```
### 单镜头 Grok 图生视频提示词
```text
@image1 @image2 @image3

Generate ONE 3-second vertical 9:16 image-to-video clip. In this separate clip task, @image1 is the official product identity reference; @image2 is the approved Furniwell chair photograph; @image3 is THIS SHOT'S already approved start frame. Begin exactly from @image3. Preserve its framing, pose, geometry, room, props and lighting. Do not create a different opening composition.

PRODUCT IDENTITY — highest priority:
Furniwell Economy, SKU G-HAD241222B, variant 44533451587850. White 120 x 60 cm FOUR-PANEL desktop, with the exact seam pattern in @image1. Two white lifting columns, TWO telescoping sections per column. Two original white T-shaped floor feet with their original dark leveling pads. Exactly ONE original black hanging digital keypad under the user-facing FRONT LONG EDGE, on the seated user's anatomical RIGHT. Copy its actual housing, angle, display and buttons from @image1. No drawer, glass top, third column, wheels, extra keypad or added cable tray.
COLUMN ASSEMBLY:
INVERTED TWO-STAGE COLUMNS: the WIDER outer sleeve is UPPER, attached to the underside frame; the NARROWER inner section is LOWER, attached to the floor foot. Thick at the top, slim at the bottom. The thick upper sleeve and desktop travel upward together; the thin lower section remains anchored to the foot, so more of the thin section becomes visible below the upper sleeve. On lowering, the upper sleeve covers more of the lower section. The feet stay planted. Do not swap tube widths, turn either column upside down, add a third section, stretch solid metal, or lift only the tabletop.
CONTROLLER LOCATION:
One black hanging keypad BELOW the front long edge at the seated worker's RIGHT. For a button shot, the worker uses her RIGHT index finger and approaches from her own side of the desk. Keep the real front-right tabletop corner and a portion of the long edge in view; never mount the keypad on the short end.
ORIENTATION: FRONT means the long working edge nearest the seated woman; BACK means the opposite edge. RIGHT always means her anatomical right when she sits facing the work surface, never the camera's right. The keypad stays fixed at that physical right-front working position across cuts. Keep cameras on the worker-facing side of the desk; no camera crossing behind the back edge and no horizontal mirroring. If a reverse view is ever used, her physical right may appear on screen-left; do not relocate the controller to compensate.
CONTINUITY:
In person shots ONLY: the same adult woman, about 30, brown hair in a low ponytail, cream sweater, charcoal trousers. Empty shots have zero people or body parts. One-hand close-ups show only her right hand and its connected wrist/forearm. Keep the same room, props and light direction across hard cuts.
One modest German home office, soft daylight from a window on the worker's LEFT, pale wall, light oak floor, one centered slim laptop. Keep the same laptop, chair and room throughout.
COMPANION CHAIR — @image2:
Use only Furniwell high-back office chair, SKU G-OCNC23-0240-2, variant 44820467712266, grey mesh with its original light frame, padded seat and five-spoke base. Chair reference: https://cdn.shopify.com/s/files/1/0580/4615/2882/files/0240-Grey.jpg?v=1698643212
Chair product: https://furniwell.de/products/ergonomischer-burostuhl-mit-verstellbarer-hoher-rucken?variant=44820467712266
Actually upload this chair photograph as @image2. Preserve its separate mesh headrest, upper mesh back, separate lower lumbar support, original arms, seat, five-spoke base and five casters. Never substitute a headrest-free generic white chair or gaming chair. Keep the same chair through every shot. Desk @image1 and chair @image2 are independent shape references. The chair stays grounded when the desk rises. This chair is sold separately; do not imply a free chair or desk-and-chair bundle.
HUMAN / CONTACT GEOMETRY: establish physical staging before motion. The same adult appears ONLY in shots explicitly marked as a person shot. Empty shots do not inherit body parts from the previous shot. Start each clip from its own approved still and join clips with HARD CUTS. Never combine sitting down, standing up, turning, operating controls and lifting into one continuous action. Lock the camera for human-contact shots. No human is present during desk motion. Camera-only shots have no hand or furniture motion. Body, clothing, desktop and chair are separate opaque solids: resolve occlusion by real depth, never transparency, melting or disappearance.

SHOT CAST AND SPATIAL LOCK:
CAST: exactly ONE anatomically complete seated adult, already seated in the start frame. Pelvis supported by the seat; chair back behind the torso; chest facing the desk; two thighs connected to the same pelvis and knees; both feet on the floor. Exactly one left and one right hand rest separately on their corresponding thighs, palms down, and stay there: no typing or reaching for controls. Each hand connects continuously through wrist, elbow and shoulder to this one person. The person is in FRONT of the chair back. Never film a face through a foreground chair back or hide the entire head and torso while leaving orphan trouser legs. Keep a visible gap between torso and desktop; armrests remain outside the front desk edge and never enter the desktop.
Locked side view from the person's right, making side profile, shoulder, torso and seat depth readable; never orbit behind or film through the chair back.

ONLY ACTION:

Only one tiny glance/head nod toward the screen; hands, torso, chair and desk stay in place.

END STATE:

The same complete seated pose, with both hands still on their thighs; no reach or rising.

No internal cut, orbit or unrequested action. Use ONLY the camera or body motion specified for this shot, never both. Preserve everything else.

START-FRAME AND CLIP ACCEPTANCE: before animation, check actor/hand count, shoulder-elbow-wrist continuity, pelvis supported by seat, chair back behind the person, and clearance to desktop and armrests. Hand details contain only one right hand; empty shots have no leftover legs or feet. Reject an invalid start frame before animation; do not ask the video model to repair it. Inspect beginning, middle of action and end of each clip. Extra hands, detached torso, intersections or disappearing body mean reject the whole clip and regenerate with less motion or retain the approved still. Blurring, fading or cropping the defect is not a repair. Prompts reduce risk but do not guarantee every generated frame.

HARD FAILURES: wrong SKU, mirrored scene, controller on user-left or a short end, second controller, ordinary columns with wider lower tubes, changed stage count, floating feet, bending/tilting/elastic desktop, extra drawer, extra leg, disappearing cable, unsupported accessory. No generated captions, voice-over, music, promo badge or brand lettering. Add German subtitles and branding in editing. If geometry cannot be kept, reduce the action or retain the approved still; do not redesign the product.
```

## 镜头 5 · 12–15 秒
后期德语字幕：Jetzt bei Furniwell entdecken.
### 首帧提示词
```text
@image1 @image2

Create ONE photorealistic 9:16 still image, not a storyboard or collage. The attached @image1 is the exact official desk photograph and the only desk-shape reference; @image2 independently locks the companion chair. Preserve the furniture; change only the human staging and room described below.

Production recipe FV-01, shot 5 START FRAME.

PRODUCT IDENTITY — highest priority:
Furniwell Economy, SKU G-HAD241222B, variant 44533451587850. White 120 x 60 cm FOUR-PANEL desktop, with the exact seam pattern in @image1. Two white lifting columns, TWO telescoping sections per column. Two original white T-shaped floor feet with their original dark leveling pads. Exactly ONE original black hanging digital keypad under the user-facing FRONT LONG EDGE, on the seated user's anatomical RIGHT. Copy its actual housing, angle, display and buttons from @image1. No drawer, glass top, third column, wheels, extra keypad or added cable tray.
COLUMN ASSEMBLY:
INVERTED TWO-STAGE COLUMNS: the WIDER outer sleeve is UPPER, attached to the underside frame; the NARROWER inner section is LOWER, attached to the floor foot. Thick at the top, slim at the bottom. The thick upper sleeve and desktop travel upward together; the thin lower section remains anchored to the foot, so more of the thin section becomes visible below the upper sleeve. On lowering, the upper sleeve covers more of the lower section. The feet stay planted. Do not swap tube widths, turn either column upside down, add a third section, stretch solid metal, or lift only the tabletop.
CONTROLLER LOCATION:
One black hanging keypad BELOW the front long edge at the seated worker's RIGHT. For a button shot, the worker uses her RIGHT index finger and approaches from her own side of the desk. Keep the real front-right tabletop corner and a portion of the long edge in view; never mount the keypad on the short end.
ORIENTATION: FRONT means the long working edge nearest the seated woman; BACK means the opposite edge. RIGHT always means her anatomical right when she sits facing the work surface, never the camera's right. The keypad stays fixed at that physical right-front working position across cuts. Keep cameras on the worker-facing side of the desk; no camera crossing behind the back edge and no horizontal mirroring. If a reverse view is ever used, her physical right may appear on screen-left; do not relocate the controller to compensate.
CONTINUITY:
In person shots ONLY: the same adult woman, about 30, brown hair in a low ponytail, cream sweater, charcoal trousers. Empty shots have zero people or body parts. One-hand close-ups show only her right hand and its connected wrist/forearm. Keep the same room, props and light direction across hard cuts.
One modest German home office, soft daylight from a window on the worker's LEFT, pale wall, light oak floor, one centered slim laptop. Keep the same laptop, chair and room throughout.
COMPANION CHAIR — @image2:
Use only Furniwell high-back office chair, SKU G-OCNC23-0240-2, variant 44820467712266, grey mesh with its original light frame, padded seat and five-spoke base. Chair reference: https://cdn.shopify.com/s/files/1/0580/4615/2882/files/0240-Grey.jpg?v=1698643212
Chair product: https://furniwell.de/products/ergonomischer-burostuhl-mit-verstellbarer-hoher-rucken?variant=44820467712266
Actually upload this chair photograph as @image2. Preserve its separate mesh headrest, upper mesh back, separate lower lumbar support, original arms, seat, five-spoke base and five casters. Never substitute a headrest-free generic white chair or gaming chair. Keep the same chair through every shot. Desk @image1 and chair @image2 are independent shape references. The chair stays grounded when the desk rises. This chair is sold separately; do not imply a free chair or desk-and-chair bundle.
HUMAN / CONTACT GEOMETRY: establish physical staging before motion. The same adult appears ONLY in shots explicitly marked as a person shot. Empty shots do not inherit body parts from the previous shot. Start each clip from its own approved still and join clips with HARD CUTS. Never combine sitting down, standing up, turning, operating controls and lifting into one continuous action. Lock the camera for human-contact shots. No human is present during desk motion. Camera-only shots have no hand or furniture motion. Body, clothing, desktop and chair are separate opaque solids: resolve occlusion by real depth, never transparency, melting or disappearance.

SHOT CAST AND SPATIAL LOCK:
CAST: ZERO people, ZERO hands and ZERO feet. The chair is fully empty; no trouser legs, shoes or human silhouette beneath it. Cut directly to this approved empty start frame; never dissolve a person away within the clip.
Keep the complete product and floor feet readable. A very small straight push-in only; no orbit or perspective switch.

THIS SHOT START FRAME:

The exact product and the same specified chair are already staged. Full product, empty scene, furniture and props still.

Freeze this single start pose; do not include the action or end state. No motion trail, duplicate pose or simultaneous before/after states. Reject a faulty anatomical start frame before video generation.

START-FRAME AND CLIP ACCEPTANCE: before animation, check actor/hand count, shoulder-elbow-wrist continuity, pelvis supported by seat, chair back behind the person, and clearance to desktop and armrests. Hand details contain only one right hand; empty shots have no leftover legs or feet. Reject an invalid start frame before animation; do not ask the video model to repair it. Inspect beginning, middle of action and end of each clip. Extra hands, detached torso, intersections or disappearing body mean reject the whole clip and regenerate with less motion or retain the approved still. Blurring, fading or cropping the defect is not a repair. Prompts reduce risk but do not guarantee every generated frame.

HARD FAILURES: wrong SKU, mirrored scene, controller on user-left or a short end, second controller, ordinary columns with wider lower tubes, changed stage count, floating feet, bending/tilting/elastic desktop, extra drawer, extra leg, disappearing cable, unsupported accessory. No generated captions, voice-over, music, promo badge or brand lettering. Add German subtitles and branding in editing. If geometry cannot be kept, reduce the action or retain the approved still; do not redesign the product.
```
### 单镜头 Grok 图生视频提示词
```text
@image1 @image2 @image3

Generate ONE 3-second vertical 9:16 image-to-video clip. In this separate clip task, @image1 is the official product identity reference; @image2 is the approved Furniwell chair photograph; @image3 is THIS SHOT'S already approved start frame. Begin exactly from @image3. Preserve its framing, pose, geometry, room, props and lighting. Do not create a different opening composition.

PRODUCT IDENTITY — highest priority:
Furniwell Economy, SKU G-HAD241222B, variant 44533451587850. White 120 x 60 cm FOUR-PANEL desktop, with the exact seam pattern in @image1. Two white lifting columns, TWO telescoping sections per column. Two original white T-shaped floor feet with their original dark leveling pads. Exactly ONE original black hanging digital keypad under the user-facing FRONT LONG EDGE, on the seated user's anatomical RIGHT. Copy its actual housing, angle, display and buttons from @image1. No drawer, glass top, third column, wheels, extra keypad or added cable tray.
COLUMN ASSEMBLY:
INVERTED TWO-STAGE COLUMNS: the WIDER outer sleeve is UPPER, attached to the underside frame; the NARROWER inner section is LOWER, attached to the floor foot. Thick at the top, slim at the bottom. The thick upper sleeve and desktop travel upward together; the thin lower section remains anchored to the foot, so more of the thin section becomes visible below the upper sleeve. On lowering, the upper sleeve covers more of the lower section. The feet stay planted. Do not swap tube widths, turn either column upside down, add a third section, stretch solid metal, or lift only the tabletop.
CONTROLLER LOCATION:
One black hanging keypad BELOW the front long edge at the seated worker's RIGHT. For a button shot, the worker uses her RIGHT index finger and approaches from her own side of the desk. Keep the real front-right tabletop corner and a portion of the long edge in view; never mount the keypad on the short end.
ORIENTATION: FRONT means the long working edge nearest the seated woman; BACK means the opposite edge. RIGHT always means her anatomical right when she sits facing the work surface, never the camera's right. The keypad stays fixed at that physical right-front working position across cuts. Keep cameras on the worker-facing side of the desk; no camera crossing behind the back edge and no horizontal mirroring. If a reverse view is ever used, her physical right may appear on screen-left; do not relocate the controller to compensate.
CONTINUITY:
In person shots ONLY: the same adult woman, about 30, brown hair in a low ponytail, cream sweater, charcoal trousers. Empty shots have zero people or body parts. One-hand close-ups show only her right hand and its connected wrist/forearm. Keep the same room, props and light direction across hard cuts.
One modest German home office, soft daylight from a window on the worker's LEFT, pale wall, light oak floor, one centered slim laptop. Keep the same laptop, chair and room throughout.
COMPANION CHAIR — @image2:
Use only Furniwell high-back office chair, SKU G-OCNC23-0240-2, variant 44820467712266, grey mesh with its original light frame, padded seat and five-spoke base. Chair reference: https://cdn.shopify.com/s/files/1/0580/4615/2882/files/0240-Grey.jpg?v=1698643212
Chair product: https://furniwell.de/products/ergonomischer-burostuhl-mit-verstellbarer-hoher-rucken?variant=44820467712266
Actually upload this chair photograph as @image2. Preserve its separate mesh headrest, upper mesh back, separate lower lumbar support, original arms, seat, five-spoke base and five casters. Never substitute a headrest-free generic white chair or gaming chair. Keep the same chair through every shot. Desk @image1 and chair @image2 are independent shape references. The chair stays grounded when the desk rises. This chair is sold separately; do not imply a free chair or desk-and-chair bundle.
HUMAN / CONTACT GEOMETRY: establish physical staging before motion. The same adult appears ONLY in shots explicitly marked as a person shot. Empty shots do not inherit body parts from the previous shot. Start each clip from its own approved still and join clips with HARD CUTS. Never combine sitting down, standing up, turning, operating controls and lifting into one continuous action. Lock the camera for human-contact shots. No human is present during desk motion. Camera-only shots have no hand or furniture motion. Body, clothing, desktop and chair are separate opaque solids: resolve occlusion by real depth, never transparency, melting or disappearance.

SHOT CAST AND SPATIAL LOCK:
CAST: ZERO people, ZERO hands and ZERO feet. The chair is fully empty; no trouser legs, shoes or human silhouette beneath it. Cut directly to this approved empty start frame; never dissolve a person away within the clip.
Keep the complete product and floor feet readable. A very small straight push-in only; no orbit or perspective switch.

ONLY ACTION:

Only the camera makes a tiny straight push-in; product, chair and props remain still.

END STATE:

The same complete product and empty chair; room for an editor-added CTA.

No internal cut, orbit or unrequested action. Use ONLY the camera or body motion specified for this shot, never both. Preserve everything else.

START-FRAME AND CLIP ACCEPTANCE: before animation, check actor/hand count, shoulder-elbow-wrist continuity, pelvis supported by seat, chair back behind the person, and clearance to desktop and armrests. Hand details contain only one right hand; empty shots have no leftover legs or feet. Reject an invalid start frame before animation; do not ask the video model to repair it. Inspect beginning, middle of action and end of each clip. Extra hands, detached torso, intersections or disappearing body mean reject the whole clip and regenerate with less motion or retain the approved still. Blurring, fading or cropping the defect is not a repair. Prompts reduce risk but do not guarantee every generated frame.

HARD FAILURES: wrong SKU, mirrored scene, controller on user-left or a short end, second controller, ordinary columns with wider lower tubes, changed stage count, floating feet, bending/tilting/elastic desktop, extra drawer, extra leg, disappearing cable, unsupported accessory. No generated captions, voice-over, music, promo badge or brand lettering. Add German subtitles and branding in editing. If geometry cannot be kept, reduce the action or retain the approved still; do not redesign the product.
```

## 验收
- 产品名称、SKU、尺寸、颜色与三视图一致；四拼、整板、玻璃桌不能混用。
- 控制器只有一个，位于入座者右侧；外挂与 G2 内嵌形式正确；没有装到短边。
- 倒装立柱粗管在上、细管在下；节数、立柱数量、脚型正确；底脚贴地。
- 升降时桌面与上部套管一起移动；桌面水平；没有拉伸变形或全行程瞬移。
- G2 只有原装一个抽屉；L 桌保留原朝向及三根立柱；未确认结构不补画。
- 对比首帧、运动中间帧和尾帧。发现多手、断身、人体消失、穿桌板/椅架、错款或结构变形，整段退回重做；不通过模糊、淡化或裁切掩盖错误，不进入投放。
- 搭配椅是指定灰色高背款，独立头枕、腰靠、扶手与五爪底座正确；image2 不是首帧，image3 才是当前镜头首帧。
- 人物镜头恰好一个完整成年人，双手分放对应大腿；椅背在身后，骨盆由坐垫承托。不能从椅背后拍正脸，不能只剩椅下裤腿。
- 手部特写只见一只右手与连续手腕前臂；无人镜头连残留的手、腿、脚与人影也不能有。

制作边界：提示词与参考图可降低结构错误，不能保证生成模型每帧正确。首帧与成片都要人工核对；错款画面不进入投放。

# FV-02 · 一边电脑，一边书写 · Grok 产品锁定版
更新日期：2026-10-29（北京时间）；研究样本日期仍为 2026-10-27。
固定产品：L 型黑色桌 160 × 140 × 60 cm
SKU：G-SDF23-0285-0-B-G-HADT23-0286-BK；variant：45028720378122
商品：https://furniwell.de/products/l-form-eckschreibtisch-hohenverstellbar-elektrisch-ergonomischer-stehtisch?variant=45028720378122
官网原图 / image1：https://cdn.shopify.com/s/files/1/0580/4615/2882/files/L-Form_Eckschreibtisch_hohenverstellbar_Elektrisch_Ergonomischer_Stehtisch_Schwarz-_Schwarz_abe49266-f00a-463f-b9d4-c0fd761fa9ad.jpg?v=1765536019
搭配椅 / image2：G-OCNC23-0240-2；https://furniwell.de/products/ergonomischer-burostuhl-mit-verstellbarer-hoher-rucken?variant=44820467712266
椅子官网原图：https://cdn.shopify.com/s/files/1/0580/4615/2882/files/0240-Grey.jpg?v=1698643212
每镜头首帧作为 image3；搭配椅单独销售。更换椅子款式或颜色请使用网页的中文 Prompt 生成区。

## 使用顺序
1. 先下载主商品原图与灰色高背办公椅原图并实际上传，分别作为 image1、image2。只粘贴商品链接不会绑定图片。
2. 先复制每镜头的“首帧提示词”制作单张 9:16 首帧；先验收人数、手数、肩肘腕连接、椅背在身后及桌沿间隙，再核对产品。错误首帧必须重做，不能交给视频模型修复。
3. 推荐分镜生成：每镜头开独立任务，先上传主商品原图作为 image1、搭配椅原图作为 image2，再上传本镜头已验收首帧作为 image3。image2 不再指首帧，不要上传另一镜头的首帧。
4. 15 秒总提示词现在是剪辑计划，不直接整段交给 Grok 连续生成。每镜头只复制本段 3 秒图生视频指令；image1 主商品、image2 搭配椅、image3 当前首帧。界面不识别标签时手动指定附件。
5. 每段只做一个小动作：人物镜头桌椅固定，手部特写仅一只右手，升降镜头无人且椅子在运动区外。不生成入座、起身或转身过程；用硬切连接已完成状态。字幕、口播、品牌和促销信息后期添加。

## 固定产品结构
- 黑色 160 × 140 × 60 cm；保留原图 L 形朝向、两翼长度及拼缝。
- 三根立柱、三只原装长条底脚；不改成直桌两柱结构。
- 唯一手控器位于主工作面靠人的前长边下方、入座者右手侧。
- 倒装要求按本次用户确认；主图为收合状态，不猜两节或三节，本脚本保持桌架静止。
核验边界：三柱与脚型已核对；收合主图不足以确认伸缩节数，因此暂不生成 L 型桌伸缩过程。

## 15 秒剪辑计划（纯英文；不要整段连续生成）
```text
Production recipe FV-02. EDIT PLAN ONLY: five INDEPENDENT 3-second vertical 9:16 clips, joined into a 15-second ad. Do NOT submit this complete plan as a single continuous Grok generation. Make and approve each start still, then copy only that shot's image-to-video prompt. Actually upload @image1 as the official product reference and @image2 as the companion chair reference; each separate clip also uses its own approved @image3.

PRODUCT IDENTITY — highest priority:
Furniwell black L-shaped electric corner desk, SKU G-SDF23-0285-0-B-G-HADT23-0286-BK, variant 45028720378122, 160 x 140 x 60 cm. Preserve the exact L silhouette, return direction, unequal wing proportions, seams, THREE black lifting columns and THREE original floor feet in @image1. The seated worker occupies the inner working corner and faces the main long working edge; the return is on her LEFT as in the reference. Exactly ONE original hanging keypad remains below the main user-facing long edge on her RIGHT. Never mirror the L, swap its wings, replace it with two separate desks or a two-leg straight desk. No added wheels or drawers.
COLUMN ASSEMBLY:
Preserve the user-confirmed INVERTED column installation: upper outer sleeve above the lower inner section. Keep the exact visible collapsed column geometry in @image1. The collapsed photo does not establish the hidden telescoping stage count: do not invent a two-stage or three-stage mechanism. THIS RECIPE HAS NO HEIGHT-CHANGE SHOT; all three columns and feet remain motionless. A lifting shot requires a separately verified raised-state reference of this exact SKU first.
CONTROLLER LOCATION:
The one hanging keypad stays under the MAIN user-facing LONG edge on the seated worker's RIGHT, never on either outer short end and never moved to the return. The desk does not move; this recipe shows an empty control detail without hands.
ORIENTATION: FRONT means the long working edge nearest the seated woman; BACK means the opposite edge. RIGHT always means her anatomical right when she sits facing the work surface, never the camera's right. The keypad stays fixed at that physical right-front working position across cuts. Keep cameras on the worker-facing side of the desk; no camera crossing behind the back edge and no horizontal mirroring. If a reverse view is ever used, her physical right may appear on screen-left; do not relocate the controller to compensate.
CONTINUITY:
In person shots ONLY: the same adult woman, about 30, brown hair in a low ponytail, cream sweater, charcoal trousers. Empty shots have zero people or body parts. One-hand close-ups show only her right hand and its connected wrist/forearm. Keep the same room, props and light direction across hard cuts.
One German home-office corner, soft window light from the worker's LEFT. One laptop on the main wing and an open notebook on the LEFT return. One woman, one chair, one continuous L-shaped desk.
COMPANION CHAIR — @image2:
Use only Furniwell high-back office chair, SKU G-OCNC23-0240-2, variant 44820467712266, grey mesh with its original light frame, padded seat and five-spoke base. Chair reference: https://cdn.shopify.com/s/files/1/0580/4615/2882/files/0240-Grey.jpg?v=1698643212
Chair product: https://furniwell.de/products/ergonomischer-burostuhl-mit-verstellbarer-hoher-rucken?variant=44820467712266
Actually upload this chair photograph as @image2. Preserve its separate mesh headrest, upper mesh back, separate lower lumbar support, original arms, seat, five-spoke base and five casters. Never substitute a headrest-free generic white chair or gaming chair. Keep the same chair through every shot. Desk @image1 and chair @image2 are independent shape references. The chair stays grounded when the desk rises. This chair is sold separately; do not imply a free chair or desk-and-chair bundle.
HUMAN / CONTACT GEOMETRY: establish physical staging before motion. The same adult appears ONLY in shots explicitly marked as a person shot. Empty shots do not inherit body parts from the previous shot. Start each clip from its own approved still and join clips with HARD CUTS. Never combine sitting down, standing up, turning, operating controls and lifting into one continuous action. Lock the camera for human-contact shots. No human is present during desk motion. Camera-only shots have no hand or furniture motion. Body, clothing, desktop and chair are separate opaque solids: resolve occlusion by real depth, never transparency, melting or disappearance.

EDITING: HARD CUTS between already-established poses. Never animate sitting down, rising from the chair, turning across the desk, or a full sit-to-stand lift.

SHOT 1, 0-3s: @image1 @image2
SHOT CAST AND SPATIAL LOCK:
CAST: exactly ONE anatomically complete seated adult, already seated in the start frame. Pelvis supported by the seat; chair back behind the torso; chest facing the desk; two thighs connected to the same pelvis and knees; both feet on the floor. Exactly one left and one right hand rest separately on their corresponding thighs, palms down, and stay there: no typing or reaching for controls. Each hand connects continuously through wrist, elbow and shoulder to this one person. The person is in FRONT of the chair back. Never film a face through a foreground chair back or hide the entire head and torso while leaving orphan trouser legs. Keep a visible gap between torso and desktop; armrests remain outside the front desk edge and never enter the desktop.
Locked side view from the person's right, making side profile, shoulder, torso and seat depth readable; never orbit behind or film through the chair back.
START: The same adult is already seated facing the laptop at an approved seated desk height. Hands rest separately on thighs; armrests are not pushed under the desktop.
ACTION: Only one tiny glance/head nod toward the screen; hands, torso, chair and desk stay in place.
END: The same complete seated pose, with both hands still on their thighs; no reach or rising.

SHOT 2, 3-6s: @image1 @image2
SHOT CAST AND SPATIAL LOCK:
CAST: ZERO people, ZERO hands and ZERO feet. The chair is fully empty; no trouser legs, shoes or human silhouette beneath it. Cut directly to this approved empty start frame; never dissolve a person away within the clip.
Keep the target detail and its surface or mounting context readable with a tiny straight push-in. Do not force a full-product view into this detail crop; no orbit.
START: Empty start frame preserving the same L orientation, three columns and three feet; laptop and existing notebook occupy their two original zones.
ACTION: Only a tiny camera push shows both zones; wings, equipment and chair remain still.
END: Product, props and empty chair remain intact; no body, hands or feet enter.

SHOT 3, 6-9s: @image1 @image2
SHOT CAST AND SPATIAL LOCK:
CAST: only ONE right hand belonging to the same adult, continuously connected to one wrist and forearm entering from the worker-side edge of the frame. No second hand, extra forearm, face or torso in this crop. The left hand stays on the lap, entirely outside the crop. The right hand has five fingers. Keep the start-frame grip and perform only the specified small local action; palm, wrist and forearm stay connected with unchanged lengths and no regripping. No hand emerges through the desktop, chair or keypad. If contact is occluded, repair the start-frame camera position instead of inventing another hand.
Locked contextual close-up showing the real component, its mounting edge/surface and contact point. No push-in, orbit or extreme wide angle.
START: The crop already frames the original notebook; only one right hand holds a pen, tip already at the start point on paper. Torso stays outside the crop; no turning into this shot.
ACTION: The same pen hand writes only one short stroke; notebook, wrist position, desk and camera stay fixed.
END: Same paper, one right hand and one short stroke; neither wing moves.

SHOT 4, 9-12s: @image1 @image2
SHOT CAST AND SPATIAL LOCK:
CAST: ZERO people, ZERO hands and ZERO feet. The chair is fully empty; no trouser legs, shoes or human silhouette beneath it. Cut directly to this approved empty start frame; never dissolve a person away within the clip.
Keep the target detail and its surface or mounting context readable with a tiny straight push-in. Do not force a full-product view into this detail crop; no orbit.
START: Empty contextual detail of the original keypad on the main working LONG edge, with its user-right corner visible; original mounting unchanged.
ACTION: Only a tiny camera push; frame and mechanical joints remain stationary, with no button press or lift.
END: Product, props and empty chair remain intact; no body, hands or feet enter.

SHOT 5, 12-15s: @image1 @image2
SHOT CAST AND SPATIAL LOCK:
CAST: ZERO people, ZERO hands and ZERO feet. The chair is fully empty; no trouser legs, shoes or human silhouette beneath it. Cut directly to this approved empty start frame; never dissolve a person away within the clip.
Keep the complete product and floor feet readable. A very small straight push-in only; no orbit or perspective switch.
START: The exact product and the same specified chair are already staged. Full product, empty scene, furniture and props still.
ACTION: Only the camera makes a tiny straight push-in; product, chair and props remain still.
END: The same complete product and empty chair; room for an editor-added CTA.

START-FRAME AND CLIP ACCEPTANCE: before animation, check actor/hand count, shoulder-elbow-wrist continuity, pelvis supported by seat, chair back behind the person, and clearance to desktop and armrests. Hand details contain only one right hand; empty shots have no leftover legs or feet. Reject an invalid start frame before animation; do not ask the video model to repair it. Inspect beginning, middle of action and end of each clip. Extra hands, detached torso, intersections or disappearing body mean reject the whole clip and regenerate with less motion or retain the approved still. Blurring, fading or cropping the defect is not a repair. Prompts reduce risk but do not guarantee every generated frame.

HARD FAILURES: wrong SKU, mirrored scene, controller on user-left or a short end, second controller, ordinary columns with wider lower tubes, changed stage count, floating feet, bending/tilting/elastic desktop, extra drawer, extra leg, disappearing cable, unsupported accessory. No generated captions, voice-over, music, promo badge or brand lettering. Add German subtitles and branding in editing. If geometry cannot be kept, reduce the action or retain the approved still; do not redesign the product.
```

## 镜头 1 · 0–3 秒
后期德语字幕：Arbeiten, ohne ständig umzuräumen.
### 首帧提示词
```text
@image1 @image2

Create ONE photorealistic 9:16 still image, not a storyboard or collage. The attached @image1 is the exact official desk photograph and the only desk-shape reference; @image2 independently locks the companion chair. Preserve the furniture; change only the human staging and room described below.

Production recipe FV-02, shot 1 START FRAME.

PRODUCT IDENTITY — highest priority:
Furniwell black L-shaped electric corner desk, SKU G-SDF23-0285-0-B-G-HADT23-0286-BK, variant 45028720378122, 160 x 140 x 60 cm. Preserve the exact L silhouette, return direction, unequal wing proportions, seams, THREE black lifting columns and THREE original floor feet in @image1. The seated worker occupies the inner working corner and faces the main long working edge; the return is on her LEFT as in the reference. Exactly ONE original hanging keypad remains below the main user-facing long edge on her RIGHT. Never mirror the L, swap its wings, replace it with two separate desks or a two-leg straight desk. No added wheels or drawers.
COLUMN ASSEMBLY:
Preserve the user-confirmed INVERTED column installation: upper outer sleeve above the lower inner section. Keep the exact visible collapsed column geometry in @image1. The collapsed photo does not establish the hidden telescoping stage count: do not invent a two-stage or three-stage mechanism. THIS RECIPE HAS NO HEIGHT-CHANGE SHOT; all three columns and feet remain motionless. A lifting shot requires a separately verified raised-state reference of this exact SKU first.
CONTROLLER LOCATION:
The one hanging keypad stays under the MAIN user-facing LONG edge on the seated worker's RIGHT, never on either outer short end and never moved to the return. The desk does not move; this recipe shows an empty control detail without hands.
ORIENTATION: FRONT means the long working edge nearest the seated woman; BACK means the opposite edge. RIGHT always means her anatomical right when she sits facing the work surface, never the camera's right. The keypad stays fixed at that physical right-front working position across cuts. Keep cameras on the worker-facing side of the desk; no camera crossing behind the back edge and no horizontal mirroring. If a reverse view is ever used, her physical right may appear on screen-left; do not relocate the controller to compensate.
CONTINUITY:
In person shots ONLY: the same adult woman, about 30, brown hair in a low ponytail, cream sweater, charcoal trousers. Empty shots have zero people or body parts. One-hand close-ups show only her right hand and its connected wrist/forearm. Keep the same room, props and light direction across hard cuts.
One German home-office corner, soft window light from the worker's LEFT. One laptop on the main wing and an open notebook on the LEFT return. One woman, one chair, one continuous L-shaped desk.
COMPANION CHAIR — @image2:
Use only Furniwell high-back office chair, SKU G-OCNC23-0240-2, variant 44820467712266, grey mesh with its original light frame, padded seat and five-spoke base. Chair reference: https://cdn.shopify.com/s/files/1/0580/4615/2882/files/0240-Grey.jpg?v=1698643212
Chair product: https://furniwell.de/products/ergonomischer-burostuhl-mit-verstellbarer-hoher-rucken?variant=44820467712266
Actually upload this chair photograph as @image2. Preserve its separate mesh headrest, upper mesh back, separate lower lumbar support, original arms, seat, five-spoke base and five casters. Never substitute a headrest-free generic white chair or gaming chair. Keep the same chair through every shot. Desk @image1 and chair @image2 are independent shape references. The chair stays grounded when the desk rises. This chair is sold separately; do not imply a free chair or desk-and-chair bundle.
HUMAN / CONTACT GEOMETRY: establish physical staging before motion. The same adult appears ONLY in shots explicitly marked as a person shot. Empty shots do not inherit body parts from the previous shot. Start each clip from its own approved still and join clips with HARD CUTS. Never combine sitting down, standing up, turning, operating controls and lifting into one continuous action. Lock the camera for human-contact shots. No human is present during desk motion. Camera-only shots have no hand or furniture motion. Body, clothing, desktop and chair are separate opaque solids: resolve occlusion by real depth, never transparency, melting or disappearance.

SHOT CAST AND SPATIAL LOCK:
CAST: exactly ONE anatomically complete seated adult, already seated in the start frame. Pelvis supported by the seat; chair back behind the torso; chest facing the desk; two thighs connected to the same pelvis and knees; both feet on the floor. Exactly one left and one right hand rest separately on their corresponding thighs, palms down, and stay there: no typing or reaching for controls. Each hand connects continuously through wrist, elbow and shoulder to this one person. The person is in FRONT of the chair back. Never film a face through a foreground chair back or hide the entire head and torso while leaving orphan trouser legs. Keep a visible gap between torso and desktop; armrests remain outside the front desk edge and never enter the desktop.
Locked side view from the person's right, making side profile, shoulder, torso and seat depth readable; never orbit behind or film through the chair back.

THIS SHOT START FRAME:

The same adult is already seated facing the laptop at an approved seated desk height. Hands rest separately on thighs; armrests are not pushed under the desktop.

Freeze this single start pose; do not include the action or end state. No motion trail, duplicate pose or simultaneous before/after states. Reject a faulty anatomical start frame before video generation.

START-FRAME AND CLIP ACCEPTANCE: before animation, check actor/hand count, shoulder-elbow-wrist continuity, pelvis supported by seat, chair back behind the person, and clearance to desktop and armrests. Hand details contain only one right hand; empty shots have no leftover legs or feet. Reject an invalid start frame before animation; do not ask the video model to repair it. Inspect beginning, middle of action and end of each clip. Extra hands, detached torso, intersections or disappearing body mean reject the whole clip and regenerate with less motion or retain the approved still. Blurring, fading or cropping the defect is not a repair. Prompts reduce risk but do not guarantee every generated frame.

HARD FAILURES: wrong SKU, mirrored scene, controller on user-left or a short end, second controller, ordinary columns with wider lower tubes, changed stage count, floating feet, bending/tilting/elastic desktop, extra drawer, extra leg, disappearing cable, unsupported accessory. No generated captions, voice-over, music, promo badge or brand lettering. Add German subtitles and branding in editing. If geometry cannot be kept, reduce the action or retain the approved still; do not redesign the product.
```
### 单镜头 Grok 图生视频提示词
```text
@image1 @image2 @image3

Generate ONE 3-second vertical 9:16 image-to-video clip. In this separate clip task, @image1 is the official product identity reference; @image2 is the approved Furniwell chair photograph; @image3 is THIS SHOT'S already approved start frame. Begin exactly from @image3. Preserve its framing, pose, geometry, room, props and lighting. Do not create a different opening composition.

PRODUCT IDENTITY — highest priority:
Furniwell black L-shaped electric corner desk, SKU G-SDF23-0285-0-B-G-HADT23-0286-BK, variant 45028720378122, 160 x 140 x 60 cm. Preserve the exact L silhouette, return direction, unequal wing proportions, seams, THREE black lifting columns and THREE original floor feet in @image1. The seated worker occupies the inner working corner and faces the main long working edge; the return is on her LEFT as in the reference. Exactly ONE original hanging keypad remains below the main user-facing long edge on her RIGHT. Never mirror the L, swap its wings, replace it with two separate desks or a two-leg straight desk. No added wheels or drawers.
COLUMN ASSEMBLY:
Preserve the user-confirmed INVERTED column installation: upper outer sleeve above the lower inner section. Keep the exact visible collapsed column geometry in @image1. The collapsed photo does not establish the hidden telescoping stage count: do not invent a two-stage or three-stage mechanism. THIS RECIPE HAS NO HEIGHT-CHANGE SHOT; all three columns and feet remain motionless. A lifting shot requires a separately verified raised-state reference of this exact SKU first.
CONTROLLER LOCATION:
The one hanging keypad stays under the MAIN user-facing LONG edge on the seated worker's RIGHT, never on either outer short end and never moved to the return. The desk does not move; this recipe shows an empty control detail without hands.
ORIENTATION: FRONT means the long working edge nearest the seated woman; BACK means the opposite edge. RIGHT always means her anatomical right when she sits facing the work surface, never the camera's right. The keypad stays fixed at that physical right-front working position across cuts. Keep cameras on the worker-facing side of the desk; no camera crossing behind the back edge and no horizontal mirroring. If a reverse view is ever used, her physical right may appear on screen-left; do not relocate the controller to compensate.
CONTINUITY:
In person shots ONLY: the same adult woman, about 30, brown hair in a low ponytail, cream sweater, charcoal trousers. Empty shots have zero people or body parts. One-hand close-ups show only her right hand and its connected wrist/forearm. Keep the same room, props and light direction across hard cuts.
One German home-office corner, soft window light from the worker's LEFT. One laptop on the main wing and an open notebook on the LEFT return. One woman, one chair, one continuous L-shaped desk.
COMPANION CHAIR — @image2:
Use only Furniwell high-back office chair, SKU G-OCNC23-0240-2, variant 44820467712266, grey mesh with its original light frame, padded seat and five-spoke base. Chair reference: https://cdn.shopify.com/s/files/1/0580/4615/2882/files/0240-Grey.jpg?v=1698643212
Chair product: https://furniwell.de/products/ergonomischer-burostuhl-mit-verstellbarer-hoher-rucken?variant=44820467712266
Actually upload this chair photograph as @image2. Preserve its separate mesh headrest, upper mesh back, separate lower lumbar support, original arms, seat, five-spoke base and five casters. Never substitute a headrest-free generic white chair or gaming chair. Keep the same chair through every shot. Desk @image1 and chair @image2 are independent shape references. The chair stays grounded when the desk rises. This chair is sold separately; do not imply a free chair or desk-and-chair bundle.
HUMAN / CONTACT GEOMETRY: establish physical staging before motion. The same adult appears ONLY in shots explicitly marked as a person shot. Empty shots do not inherit body parts from the previous shot. Start each clip from its own approved still and join clips with HARD CUTS. Never combine sitting down, standing up, turning, operating controls and lifting into one continuous action. Lock the camera for human-contact shots. No human is present during desk motion. Camera-only shots have no hand or furniture motion. Body, clothing, desktop and chair are separate opaque solids: resolve occlusion by real depth, never transparency, melting or disappearance.

SHOT CAST AND SPATIAL LOCK:
CAST: exactly ONE anatomically complete seated adult, already seated in the start frame. Pelvis supported by the seat; chair back behind the torso; chest facing the desk; two thighs connected to the same pelvis and knees; both feet on the floor. Exactly one left and one right hand rest separately on their corresponding thighs, palms down, and stay there: no typing or reaching for controls. Each hand connects continuously through wrist, elbow and shoulder to this one person. The person is in FRONT of the chair back. Never film a face through a foreground chair back or hide the entire head and torso while leaving orphan trouser legs. Keep a visible gap between torso and desktop; armrests remain outside the front desk edge and never enter the desktop.
Locked side view from the person's right, making side profile, shoulder, torso and seat depth readable; never orbit behind or film through the chair back.

ONLY ACTION:

Only one tiny glance/head nod toward the screen; hands, torso, chair and desk stay in place.

END STATE:

The same complete seated pose, with both hands still on their thighs; no reach or rising.

No internal cut, orbit or unrequested action. Use ONLY the camera or body motion specified for this shot, never both. Preserve everything else.

START-FRAME AND CLIP ACCEPTANCE: before animation, check actor/hand count, shoulder-elbow-wrist continuity, pelvis supported by seat, chair back behind the person, and clearance to desktop and armrests. Hand details contain only one right hand; empty shots have no leftover legs or feet. Reject an invalid start frame before animation; do not ask the video model to repair it. Inspect beginning, middle of action and end of each clip. Extra hands, detached torso, intersections or disappearing body mean reject the whole clip and regenerate with less motion or retain the approved still. Blurring, fading or cropping the defect is not a repair. Prompts reduce risk but do not guarantee every generated frame.

HARD FAILURES: wrong SKU, mirrored scene, controller on user-left or a short end, second controller, ordinary columns with wider lower tubes, changed stage count, floating feet, bending/tilting/elastic desktop, extra drawer, extra leg, disappearing cable, unsupported accessory. No generated captions, voice-over, music, promo badge or brand lettering. Add German subtitles and branding in editing. If geometry cannot be kept, reduce the action or retain the approved still; do not redesign the product.
```

## 镜头 2 · 3–6 秒
后期德语字幕：Zwei Bereiche.
### 首帧提示词
```text
@image1 @image2

Create ONE photorealistic 9:16 still image, not a storyboard or collage. The attached @image1 is the exact official desk photograph and the only desk-shape reference; @image2 independently locks the companion chair. Preserve the furniture; change only the human staging and room described below.

Production recipe FV-02, shot 2 START FRAME.

PRODUCT IDENTITY — highest priority:
Furniwell black L-shaped electric corner desk, SKU G-SDF23-0285-0-B-G-HADT23-0286-BK, variant 45028720378122, 160 x 140 x 60 cm. Preserve the exact L silhouette, return direction, unequal wing proportions, seams, THREE black lifting columns and THREE original floor feet in @image1. The seated worker occupies the inner working corner and faces the main long working edge; the return is on her LEFT as in the reference. Exactly ONE original hanging keypad remains below the main user-facing long edge on her RIGHT. Never mirror the L, swap its wings, replace it with two separate desks or a two-leg straight desk. No added wheels or drawers.
COLUMN ASSEMBLY:
Preserve the user-confirmed INVERTED column installation: upper outer sleeve above the lower inner section. Keep the exact visible collapsed column geometry in @image1. The collapsed photo does not establish the hidden telescoping stage count: do not invent a two-stage or three-stage mechanism. THIS RECIPE HAS NO HEIGHT-CHANGE SHOT; all three columns and feet remain motionless. A lifting shot requires a separately verified raised-state reference of this exact SKU first.
CONTROLLER LOCATION:
The one hanging keypad stays under the MAIN user-facing LONG edge on the seated worker's RIGHT, never on either outer short end and never moved to the return. The desk does not move; this recipe shows an empty control detail without hands.
ORIENTATION: FRONT means the long working edge nearest the seated woman; BACK means the opposite edge. RIGHT always means her anatomical right when she sits facing the work surface, never the camera's right. The keypad stays fixed at that physical right-front working position across cuts. Keep cameras on the worker-facing side of the desk; no camera crossing behind the back edge and no horizontal mirroring. If a reverse view is ever used, her physical right may appear on screen-left; do not relocate the controller to compensate.
CONTINUITY:
In person shots ONLY: the same adult woman, about 30, brown hair in a low ponytail, cream sweater, charcoal trousers. Empty shots have zero people or body parts. One-hand close-ups show only her right hand and its connected wrist/forearm. Keep the same room, props and light direction across hard cuts.
One German home-office corner, soft window light from the worker's LEFT. One laptop on the main wing and an open notebook on the LEFT return. One woman, one chair, one continuous L-shaped desk.
COMPANION CHAIR — @image2:
Use only Furniwell high-back office chair, SKU G-OCNC23-0240-2, variant 44820467712266, grey mesh with its original light frame, padded seat and five-spoke base. Chair reference: https://cdn.shopify.com/s/files/1/0580/4615/2882/files/0240-Grey.jpg?v=1698643212
Chair product: https://furniwell.de/products/ergonomischer-burostuhl-mit-verstellbarer-hoher-rucken?variant=44820467712266
Actually upload this chair photograph as @image2. Preserve its separate mesh headrest, upper mesh back, separate lower lumbar support, original arms, seat, five-spoke base and five casters. Never substitute a headrest-free generic white chair or gaming chair. Keep the same chair through every shot. Desk @image1 and chair @image2 are independent shape references. The chair stays grounded when the desk rises. This chair is sold separately; do not imply a free chair or desk-and-chair bundle.
HUMAN / CONTACT GEOMETRY: establish physical staging before motion. The same adult appears ONLY in shots explicitly marked as a person shot. Empty shots do not inherit body parts from the previous shot. Start each clip from its own approved still and join clips with HARD CUTS. Never combine sitting down, standing up, turning, operating controls and lifting into one continuous action. Lock the camera for human-contact shots. No human is present during desk motion. Camera-only shots have no hand or furniture motion. Body, clothing, desktop and chair are separate opaque solids: resolve occlusion by real depth, never transparency, melting or disappearance.

SHOT CAST AND SPATIAL LOCK:
CAST: ZERO people, ZERO hands and ZERO feet. The chair is fully empty; no trouser legs, shoes or human silhouette beneath it. Cut directly to this approved empty start frame; never dissolve a person away within the clip.
Keep the target detail and its surface or mounting context readable with a tiny straight push-in. Do not force a full-product view into this detail crop; no orbit.

THIS SHOT START FRAME:

Empty start frame preserving the same L orientation, three columns and three feet; laptop and existing notebook occupy their two original zones.

Freeze this single start pose; do not include the action or end state. No motion trail, duplicate pose or simultaneous before/after states. Reject a faulty anatomical start frame before video generation.

START-FRAME AND CLIP ACCEPTANCE: before animation, check actor/hand count, shoulder-elbow-wrist continuity, pelvis supported by seat, chair back behind the person, and clearance to desktop and armrests. Hand details contain only one right hand; empty shots have no leftover legs or feet. Reject an invalid start frame before animation; do not ask the video model to repair it. Inspect beginning, middle of action and end of each clip. Extra hands, detached torso, intersections or disappearing body mean reject the whole clip and regenerate with less motion or retain the approved still. Blurring, fading or cropping the defect is not a repair. Prompts reduce risk but do not guarantee every generated frame.

HARD FAILURES: wrong SKU, mirrored scene, controller on user-left or a short end, second controller, ordinary columns with wider lower tubes, changed stage count, floating feet, bending/tilting/elastic desktop, extra drawer, extra leg, disappearing cable, unsupported accessory. No generated captions, voice-over, music, promo badge or brand lettering. Add German subtitles and branding in editing. If geometry cannot be kept, reduce the action or retain the approved still; do not redesign the product.
```
### 单镜头 Grok 图生视频提示词
```text
@image1 @image2 @image3

Generate ONE 3-second vertical 9:16 image-to-video clip. In this separate clip task, @image1 is the official product identity reference; @image2 is the approved Furniwell chair photograph; @image3 is THIS SHOT'S already approved start frame. Begin exactly from @image3. Preserve its framing, pose, geometry, room, props and lighting. Do not create a different opening composition.

PRODUCT IDENTITY — highest priority:
Furniwell black L-shaped electric corner desk, SKU G-SDF23-0285-0-B-G-HADT23-0286-BK, variant 45028720378122, 160 x 140 x 60 cm. Preserve the exact L silhouette, return direction, unequal wing proportions, seams, THREE black lifting columns and THREE original floor feet in @image1. The seated worker occupies the inner working corner and faces the main long working edge; the return is on her LEFT as in the reference. Exactly ONE original hanging keypad remains below the main user-facing long edge on her RIGHT. Never mirror the L, swap its wings, replace it with two separate desks or a two-leg straight desk. No added wheels or drawers.
COLUMN ASSEMBLY:
Preserve the user-confirmed INVERTED column installation: upper outer sleeve above the lower inner section. Keep the exact visible collapsed column geometry in @image1. The collapsed photo does not establish the hidden telescoping stage count: do not invent a two-stage or three-stage mechanism. THIS RECIPE HAS NO HEIGHT-CHANGE SHOT; all three columns and feet remain motionless. A lifting shot requires a separately verified raised-state reference of this exact SKU first.
CONTROLLER LOCATION:
The one hanging keypad stays under the MAIN user-facing LONG edge on the seated worker's RIGHT, never on either outer short end and never moved to the return. The desk does not move; this recipe shows an empty control detail without hands.
ORIENTATION: FRONT means the long working edge nearest the seated woman; BACK means the opposite edge. RIGHT always means her anatomical right when she sits facing the work surface, never the camera's right. The keypad stays fixed at that physical right-front working position across cuts. Keep cameras on the worker-facing side of the desk; no camera crossing behind the back edge and no horizontal mirroring. If a reverse view is ever used, her physical right may appear on screen-left; do not relocate the controller to compensate.
CONTINUITY:
In person shots ONLY: the same adult woman, about 30, brown hair in a low ponytail, cream sweater, charcoal trousers. Empty shots have zero people or body parts. One-hand close-ups show only her right hand and its connected wrist/forearm. Keep the same room, props and light direction across hard cuts.
One German home-office corner, soft window light from the worker's LEFT. One laptop on the main wing and an open notebook on the LEFT return. One woman, one chair, one continuous L-shaped desk.
COMPANION CHAIR — @image2:
Use only Furniwell high-back office chair, SKU G-OCNC23-0240-2, variant 44820467712266, grey mesh with its original light frame, padded seat and five-spoke base. Chair reference: https://cdn.shopify.com/s/files/1/0580/4615/2882/files/0240-Grey.jpg?v=1698643212
Chair product: https://furniwell.de/products/ergonomischer-burostuhl-mit-verstellbarer-hoher-rucken?variant=44820467712266
Actually upload this chair photograph as @image2. Preserve its separate mesh headrest, upper mesh back, separate lower lumbar support, original arms, seat, five-spoke base and five casters. Never substitute a headrest-free generic white chair or gaming chair. Keep the same chair through every shot. Desk @image1 and chair @image2 are independent shape references. The chair stays grounded when the desk rises. This chair is sold separately; do not imply a free chair or desk-and-chair bundle.
HUMAN / CONTACT GEOMETRY: establish physical staging before motion. The same adult appears ONLY in shots explicitly marked as a person shot. Empty shots do not inherit body parts from the previous shot. Start each clip from its own approved still and join clips with HARD CUTS. Never combine sitting down, standing up, turning, operating controls and lifting into one continuous action. Lock the camera for human-contact shots. No human is present during desk motion. Camera-only shots have no hand or furniture motion. Body, clothing, desktop and chair are separate opaque solids: resolve occlusion by real depth, never transparency, melting or disappearance.

SHOT CAST AND SPATIAL LOCK:
CAST: ZERO people, ZERO hands and ZERO feet. The chair is fully empty; no trouser legs, shoes or human silhouette beneath it. Cut directly to this approved empty start frame; never dissolve a person away within the clip.
Keep the target detail and its surface or mounting context readable with a tiny straight push-in. Do not force a full-product view into this detail crop; no orbit.

ONLY ACTION:

Only a tiny camera push shows both zones; wings, equipment and chair remain still.

END STATE:

Product, props and empty chair remain intact; no body, hands or feet enter.

No internal cut, orbit or unrequested action. Use ONLY the camera or body motion specified for this shot, never both. Preserve everything else.

START-FRAME AND CLIP ACCEPTANCE: before animation, check actor/hand count, shoulder-elbow-wrist continuity, pelvis supported by seat, chair back behind the person, and clearance to desktop and armrests. Hand details contain only one right hand; empty shots have no leftover legs or feet. Reject an invalid start frame before animation; do not ask the video model to repair it. Inspect beginning, middle of action and end of each clip. Extra hands, detached torso, intersections or disappearing body mean reject the whole clip and regenerate with less motion or retain the approved still. Blurring, fading or cropping the defect is not a repair. Prompts reduce risk but do not guarantee every generated frame.

HARD FAILURES: wrong SKU, mirrored scene, controller on user-left or a short end, second controller, ordinary columns with wider lower tubes, changed stage count, floating feet, bending/tilting/elastic desktop, extra drawer, extra leg, disappearing cable, unsupported accessory. No generated captions, voice-over, music, promo badge or brand lettering. Add German subtitles and branding in editing. If geometry cannot be kept, reduce the action or retain the approved still; do not redesign the product.
```

## 镜头 3 · 6–9 秒
后期德语字幕：Ein Arbeitsplatz.
### 首帧提示词
```text
@image1 @image2

Create ONE photorealistic 9:16 still image, not a storyboard or collage. The attached @image1 is the exact official desk photograph and the only desk-shape reference; @image2 independently locks the companion chair. Preserve the furniture; change only the human staging and room described below.

Production recipe FV-02, shot 3 START FRAME.

PRODUCT IDENTITY — highest priority:
Furniwell black L-shaped electric corner desk, SKU G-SDF23-0285-0-B-G-HADT23-0286-BK, variant 45028720378122, 160 x 140 x 60 cm. Preserve the exact L silhouette, return direction, unequal wing proportions, seams, THREE black lifting columns and THREE original floor feet in @image1. The seated worker occupies the inner working corner and faces the main long working edge; the return is on her LEFT as in the reference. Exactly ONE original hanging keypad remains below the main user-facing long edge on her RIGHT. Never mirror the L, swap its wings, replace it with two separate desks or a two-leg straight desk. No added wheels or drawers.
COLUMN ASSEMBLY:
Preserve the user-confirmed INVERTED column installation: upper outer sleeve above the lower inner section. Keep the exact visible collapsed column geometry in @image1. The collapsed photo does not establish the hidden telescoping stage count: do not invent a two-stage or three-stage mechanism. THIS RECIPE HAS NO HEIGHT-CHANGE SHOT; all three columns and feet remain motionless. A lifting shot requires a separately verified raised-state reference of this exact SKU first.
CONTROLLER LOCATION:
The one hanging keypad stays under the MAIN user-facing LONG edge on the seated worker's RIGHT, never on either outer short end and never moved to the return. The desk does not move; this recipe shows an empty control detail without hands.
ORIENTATION: FRONT means the long working edge nearest the seated woman; BACK means the opposite edge. RIGHT always means her anatomical right when she sits facing the work surface, never the camera's right. The keypad stays fixed at that physical right-front working position across cuts. Keep cameras on the worker-facing side of the desk; no camera crossing behind the back edge and no horizontal mirroring. If a reverse view is ever used, her physical right may appear on screen-left; do not relocate the controller to compensate.
CONTINUITY:
In person shots ONLY: the same adult woman, about 30, brown hair in a low ponytail, cream sweater, charcoal trousers. Empty shots have zero people or body parts. One-hand close-ups show only her right hand and its connected wrist/forearm. Keep the same room, props and light direction across hard cuts.
One German home-office corner, soft window light from the worker's LEFT. One laptop on the main wing and an open notebook on the LEFT return. One woman, one chair, one continuous L-shaped desk.
COMPANION CHAIR — @image2:
Use only Furniwell high-back office chair, SKU G-OCNC23-0240-2, variant 44820467712266, grey mesh with its original light frame, padded seat and five-spoke base. Chair reference: https://cdn.shopify.com/s/files/1/0580/4615/2882/files/0240-Grey.jpg?v=1698643212
Chair product: https://furniwell.de/products/ergonomischer-burostuhl-mit-verstellbarer-hoher-rucken?variant=44820467712266
Actually upload this chair photograph as @image2. Preserve its separate mesh headrest, upper mesh back, separate lower lumbar support, original arms, seat, five-spoke base and five casters. Never substitute a headrest-free generic white chair or gaming chair. Keep the same chair through every shot. Desk @image1 and chair @image2 are independent shape references. The chair stays grounded when the desk rises. This chair is sold separately; do not imply a free chair or desk-and-chair bundle.
HUMAN / CONTACT GEOMETRY: establish physical staging before motion. The same adult appears ONLY in shots explicitly marked as a person shot. Empty shots do not inherit body parts from the previous shot. Start each clip from its own approved still and join clips with HARD CUTS. Never combine sitting down, standing up, turning, operating controls and lifting into one continuous action. Lock the camera for human-contact shots. No human is present during desk motion. Camera-only shots have no hand or furniture motion. Body, clothing, desktop and chair are separate opaque solids: resolve occlusion by real depth, never transparency, melting or disappearance.

SHOT CAST AND SPATIAL LOCK:
CAST: only ONE right hand belonging to the same adult, continuously connected to one wrist and forearm entering from the worker-side edge of the frame. No second hand, extra forearm, face or torso in this crop. The left hand stays on the lap, entirely outside the crop. The right hand has five fingers. Keep the start-frame grip and perform only the specified small local action; palm, wrist and forearm stay connected with unchanged lengths and no regripping. No hand emerges through the desktop, chair or keypad. If contact is occluded, repair the start-frame camera position instead of inventing another hand.
Locked contextual close-up showing the real component, its mounting edge/surface and contact point. No push-in, orbit or extreme wide angle.

THIS SHOT START FRAME:

The crop already frames the original notebook; only one right hand holds a pen, tip already at the start point on paper. Torso stays outside the crop; no turning into this shot.

Freeze this single start pose; do not include the action or end state. No motion trail, duplicate pose or simultaneous before/after states. Reject a faulty anatomical start frame before video generation.

START-FRAME AND CLIP ACCEPTANCE: before animation, check actor/hand count, shoulder-elbow-wrist continuity, pelvis supported by seat, chair back behind the person, and clearance to desktop and armrests. Hand details contain only one right hand; empty shots have no leftover legs or feet. Reject an invalid start frame before animation; do not ask the video model to repair it. Inspect beginning, middle of action and end of each clip. Extra hands, detached torso, intersections or disappearing body mean reject the whole clip and regenerate with less motion or retain the approved still. Blurring, fading or cropping the defect is not a repair. Prompts reduce risk but do not guarantee every generated frame.

HARD FAILURES: wrong SKU, mirrored scene, controller on user-left or a short end, second controller, ordinary columns with wider lower tubes, changed stage count, floating feet, bending/tilting/elastic desktop, extra drawer, extra leg, disappearing cable, unsupported accessory. No generated captions, voice-over, music, promo badge or brand lettering. Add German subtitles and branding in editing. If geometry cannot be kept, reduce the action or retain the approved still; do not redesign the product.
```
### 单镜头 Grok 图生视频提示词
```text
@image1 @image2 @image3

Generate ONE 3-second vertical 9:16 image-to-video clip. In this separate clip task, @image1 is the official product identity reference; @image2 is the approved Furniwell chair photograph; @image3 is THIS SHOT'S already approved start frame. Begin exactly from @image3. Preserve its framing, pose, geometry, room, props and lighting. Do not create a different opening composition.

PRODUCT IDENTITY — highest priority:
Furniwell black L-shaped electric corner desk, SKU G-SDF23-0285-0-B-G-HADT23-0286-BK, variant 45028720378122, 160 x 140 x 60 cm. Preserve the exact L silhouette, return direction, unequal wing proportions, seams, THREE black lifting columns and THREE original floor feet in @image1. The seated worker occupies the inner working corner and faces the main long working edge; the return is on her LEFT as in the reference. Exactly ONE original hanging keypad remains below the main user-facing long edge on her RIGHT. Never mirror the L, swap its wings, replace it with two separate desks or a two-leg straight desk. No added wheels or drawers.
COLUMN ASSEMBLY:
Preserve the user-confirmed INVERTED column installation: upper outer sleeve above the lower inner section. Keep the exact visible collapsed column geometry in @image1. The collapsed photo does not establish the hidden telescoping stage count: do not invent a two-stage or three-stage mechanism. THIS RECIPE HAS NO HEIGHT-CHANGE SHOT; all three columns and feet remain motionless. A lifting shot requires a separately verified raised-state reference of this exact SKU first.
CONTROLLER LOCATION:
The one hanging keypad stays under the MAIN user-facing LONG edge on the seated worker's RIGHT, never on either outer short end and never moved to the return. The desk does not move; this recipe shows an empty control detail without hands.
ORIENTATION: FRONT means the long working edge nearest the seated woman; BACK means the opposite edge. RIGHT always means her anatomical right when she sits facing the work surface, never the camera's right. The keypad stays fixed at that physical right-front working position across cuts. Keep cameras on the worker-facing side of the desk; no camera crossing behind the back edge and no horizontal mirroring. If a reverse view is ever used, her physical right may appear on screen-left; do not relocate the controller to compensate.
CONTINUITY:
In person shots ONLY: the same adult woman, about 30, brown hair in a low ponytail, cream sweater, charcoal trousers. Empty shots have zero people or body parts. One-hand close-ups show only her right hand and its connected wrist/forearm. Keep the same room, props and light direction across hard cuts.
One German home-office corner, soft window light from the worker's LEFT. One laptop on the main wing and an open notebook on the LEFT return. One woman, one chair, one continuous L-shaped desk.
COMPANION CHAIR — @image2:
Use only Furniwell high-back office chair, SKU G-OCNC23-0240-2, variant 44820467712266, grey mesh with its original light frame, padded seat and five-spoke base. Chair reference: https://cdn.shopify.com/s/files/1/0580/4615/2882/files/0240-Grey.jpg?v=1698643212
Chair product: https://furniwell.de/products/ergonomischer-burostuhl-mit-verstellbarer-hoher-rucken?variant=44820467712266
Actually upload this chair photograph as @image2. Preserve its separate mesh headrest, upper mesh back, separate lower lumbar support, original arms, seat, five-spoke base and five casters. Never substitute a headrest-free generic white chair or gaming chair. Keep the same chair through every shot. Desk @image1 and chair @image2 are independent shape references. The chair stays grounded when the desk rises. This chair is sold separately; do not imply a free chair or desk-and-chair bundle.
HUMAN / CONTACT GEOMETRY: establish physical staging before motion. The same adult appears ONLY in shots explicitly marked as a person shot. Empty shots do not inherit body parts from the previous shot. Start each clip from its own approved still and join clips with HARD CUTS. Never combine sitting down, standing up, turning, operating controls and lifting into one continuous action. Lock the camera for human-contact shots. No human is present during desk motion. Camera-only shots have no hand or furniture motion. Body, clothing, desktop and chair are separate opaque solids: resolve occlusion by real depth, never transparency, melting or disappearance.

SHOT CAST AND SPATIAL LOCK:
CAST: only ONE right hand belonging to the same adult, continuously connected to one wrist and forearm entering from the worker-side edge of the frame. No second hand, extra forearm, face or torso in this crop. The left hand stays on the lap, entirely outside the crop. The right hand has five fingers. Keep the start-frame grip and perform only the specified small local action; palm, wrist and forearm stay connected with unchanged lengths and no regripping. No hand emerges through the desktop, chair or keypad. If contact is occluded, repair the start-frame camera position instead of inventing another hand.
Locked contextual close-up showing the real component, its mounting edge/surface and contact point. No push-in, orbit or extreme wide angle.

ONLY ACTION:

The same pen hand writes only one short stroke; notebook, wrist position, desk and camera stay fixed.

END STATE:

Same paper, one right hand and one short stroke; neither wing moves.

No internal cut, orbit or unrequested action. Use ONLY the camera or body motion specified for this shot, never both. Preserve everything else.

START-FRAME AND CLIP ACCEPTANCE: before animation, check actor/hand count, shoulder-elbow-wrist continuity, pelvis supported by seat, chair back behind the person, and clearance to desktop and armrests. Hand details contain only one right hand; empty shots have no leftover legs or feet. Reject an invalid start frame before animation; do not ask the video model to repair it. Inspect beginning, middle of action and end of each clip. Extra hands, detached torso, intersections or disappearing body mean reject the whole clip and regenerate with less motion or retain the approved still. Blurring, fading or cropping the defect is not a repair. Prompts reduce risk but do not guarantee every generated frame.

HARD FAILURES: wrong SKU, mirrored scene, controller on user-left or a short end, second controller, ordinary columns with wider lower tubes, changed stage count, floating feet, bending/tilting/elastic desktop, extra drawer, extra leg, disappearing cable, unsupported accessory. No generated captions, voice-over, music, promo badge or brand lettering. Add German subtitles and branding in editing. If geometry cannot be kept, reduce the action or retain the approved still; do not redesign the product.
```

## 镜头 4 · 9–12 秒
后期德语字幕：Alles bleibt an seinem Platz.
### 首帧提示词
```text
@image1 @image2

Create ONE photorealistic 9:16 still image, not a storyboard or collage. The attached @image1 is the exact official desk photograph and the only desk-shape reference; @image2 independently locks the companion chair. Preserve the furniture; change only the human staging and room described below.

Production recipe FV-02, shot 4 START FRAME.

PRODUCT IDENTITY — highest priority:
Furniwell black L-shaped electric corner desk, SKU G-SDF23-0285-0-B-G-HADT23-0286-BK, variant 45028720378122, 160 x 140 x 60 cm. Preserve the exact L silhouette, return direction, unequal wing proportions, seams, THREE black lifting columns and THREE original floor feet in @image1. The seated worker occupies the inner working corner and faces the main long working edge; the return is on her LEFT as in the reference. Exactly ONE original hanging keypad remains below the main user-facing long edge on her RIGHT. Never mirror the L, swap its wings, replace it with two separate desks or a two-leg straight desk. No added wheels or drawers.
COLUMN ASSEMBLY:
Preserve the user-confirmed INVERTED column installation: upper outer sleeve above the lower inner section. Keep the exact visible collapsed column geometry in @image1. The collapsed photo does not establish the hidden telescoping stage count: do not invent a two-stage or three-stage mechanism. THIS RECIPE HAS NO HEIGHT-CHANGE SHOT; all three columns and feet remain motionless. A lifting shot requires a separately verified raised-state reference of this exact SKU first.
CONTROLLER LOCATION:
The one hanging keypad stays under the MAIN user-facing LONG edge on the seated worker's RIGHT, never on either outer short end and never moved to the return. The desk does not move; this recipe shows an empty control detail without hands.
ORIENTATION: FRONT means the long working edge nearest the seated woman; BACK means the opposite edge. RIGHT always means her anatomical right when she sits facing the work surface, never the camera's right. The keypad stays fixed at that physical right-front working position across cuts. Keep cameras on the worker-facing side of the desk; no camera crossing behind the back edge and no horizontal mirroring. If a reverse view is ever used, her physical right may appear on screen-left; do not relocate the controller to compensate.
CONTINUITY:
In person shots ONLY: the same adult woman, about 30, brown hair in a low ponytail, cream sweater, charcoal trousers. Empty shots have zero people or body parts. One-hand close-ups show only her right hand and its connected wrist/forearm. Keep the same room, props and light direction across hard cuts.
One German home-office corner, soft window light from the worker's LEFT. One laptop on the main wing and an open notebook on the LEFT return. One woman, one chair, one continuous L-shaped desk.
COMPANION CHAIR — @image2:
Use only Furniwell high-back office chair, SKU G-OCNC23-0240-2, variant 44820467712266, grey mesh with its original light frame, padded seat and five-spoke base. Chair reference: https://cdn.shopify.com/s/files/1/0580/4615/2882/files/0240-Grey.jpg?v=1698643212
Chair product: https://furniwell.de/products/ergonomischer-burostuhl-mit-verstellbarer-hoher-rucken?variant=44820467712266
Actually upload this chair photograph as @image2. Preserve its separate mesh headrest, upper mesh back, separate lower lumbar support, original arms, seat, five-spoke base and five casters. Never substitute a headrest-free generic white chair or gaming chair. Keep the same chair through every shot. Desk @image1 and chair @image2 are independent shape references. The chair stays grounded when the desk rises. This chair is sold separately; do not imply a free chair or desk-and-chair bundle.
HUMAN / CONTACT GEOMETRY: establish physical staging before motion. The same adult appears ONLY in shots explicitly marked as a person shot. Empty shots do not inherit body parts from the previous shot. Start each clip from its own approved still and join clips with HARD CUTS. Never combine sitting down, standing up, turning, operating controls and lifting into one continuous action. Lock the camera for human-contact shots. No human is present during desk motion. Camera-only shots have no hand or furniture motion. Body, clothing, desktop and chair are separate opaque solids: resolve occlusion by real depth, never transparency, melting or disappearance.

SHOT CAST AND SPATIAL LOCK:
CAST: ZERO people, ZERO hands and ZERO feet. The chair is fully empty; no trouser legs, shoes or human silhouette beneath it. Cut directly to this approved empty start frame; never dissolve a person away within the clip.
Keep the target detail and its surface or mounting context readable with a tiny straight push-in. Do not force a full-product view into this detail crop; no orbit.

THIS SHOT START FRAME:

Empty contextual detail of the original keypad on the main working LONG edge, with its user-right corner visible; original mounting unchanged.

Freeze this single start pose; do not include the action or end state. No motion trail, duplicate pose or simultaneous before/after states. Reject a faulty anatomical start frame before video generation.

START-FRAME AND CLIP ACCEPTANCE: before animation, check actor/hand count, shoulder-elbow-wrist continuity, pelvis supported by seat, chair back behind the person, and clearance to desktop and armrests. Hand details contain only one right hand; empty shots have no leftover legs or feet. Reject an invalid start frame before animation; do not ask the video model to repair it. Inspect beginning, middle of action and end of each clip. Extra hands, detached torso, intersections or disappearing body mean reject the whole clip and regenerate with less motion or retain the approved still. Blurring, fading or cropping the defect is not a repair. Prompts reduce risk but do not guarantee every generated frame.

HARD FAILURES: wrong SKU, mirrored scene, controller on user-left or a short end, second controller, ordinary columns with wider lower tubes, changed stage count, floating feet, bending/tilting/elastic desktop, extra drawer, extra leg, disappearing cable, unsupported accessory. No generated captions, voice-over, music, promo badge or brand lettering. Add German subtitles and branding in editing. If geometry cannot be kept, reduce the action or retain the approved still; do not redesign the product.
```
### 单镜头 Grok 图生视频提示词
```text
@image1 @image2 @image3

Generate ONE 3-second vertical 9:16 image-to-video clip. In this separate clip task, @image1 is the official product identity reference; @image2 is the approved Furniwell chair photograph; @image3 is THIS SHOT'S already approved start frame. Begin exactly from @image3. Preserve its framing, pose, geometry, room, props and lighting. Do not create a different opening composition.

PRODUCT IDENTITY — highest priority:
Furniwell black L-shaped electric corner desk, SKU G-SDF23-0285-0-B-G-HADT23-0286-BK, variant 45028720378122, 160 x 140 x 60 cm. Preserve the exact L silhouette, return direction, unequal wing proportions, seams, THREE black lifting columns and THREE original floor feet in @image1. The seated worker occupies the inner working corner and faces the main long working edge; the return is on her LEFT as in the reference. Exactly ONE original hanging keypad remains below the main user-facing long edge on her RIGHT. Never mirror the L, swap its wings, replace it with two separate desks or a two-leg straight desk. No added wheels or drawers.
COLUMN ASSEMBLY:
Preserve the user-confirmed INVERTED column installation: upper outer sleeve above the lower inner section. Keep the exact visible collapsed column geometry in @image1. The collapsed photo does not establish the hidden telescoping stage count: do not invent a two-stage or three-stage mechanism. THIS RECIPE HAS NO HEIGHT-CHANGE SHOT; all three columns and feet remain motionless. A lifting shot requires a separately verified raised-state reference of this exact SKU first.
CONTROLLER LOCATION:
The one hanging keypad stays under the MAIN user-facing LONG edge on the seated worker's RIGHT, never on either outer short end and never moved to the return. The desk does not move; this recipe shows an empty control detail without hands.
ORIENTATION: FRONT means the long working edge nearest the seated woman; BACK means the opposite edge. RIGHT always means her anatomical right when she sits facing the work surface, never the camera's right. The keypad stays fixed at that physical right-front working position across cuts. Keep cameras on the worker-facing side of the desk; no camera crossing behind the back edge and no horizontal mirroring. If a reverse view is ever used, her physical right may appear on screen-left; do not relocate the controller to compensate.
CONTINUITY:
In person shots ONLY: the same adult woman, about 30, brown hair in a low ponytail, cream sweater, charcoal trousers. Empty shots have zero people or body parts. One-hand close-ups show only her right hand and its connected wrist/forearm. Keep the same room, props and light direction across hard cuts.
One German home-office corner, soft window light from the worker's LEFT. One laptop on the main wing and an open notebook on the LEFT return. One woman, one chair, one continuous L-shaped desk.
COMPANION CHAIR — @image2:
Use only Furniwell high-back office chair, SKU G-OCNC23-0240-2, variant 44820467712266, grey mesh with its original light frame, padded seat and five-spoke base. Chair reference: https://cdn.shopify.com/s/files/1/0580/4615/2882/files/0240-Grey.jpg?v=1698643212
Chair product: https://furniwell.de/products/ergonomischer-burostuhl-mit-verstellbarer-hoher-rucken?variant=44820467712266
Actually upload this chair photograph as @image2. Preserve its separate mesh headrest, upper mesh back, separate lower lumbar support, original arms, seat, five-spoke base and five casters. Never substitute a headrest-free generic white chair or gaming chair. Keep the same chair through every shot. Desk @image1 and chair @image2 are independent shape references. The chair stays grounded when the desk rises. This chair is sold separately; do not imply a free chair or desk-and-chair bundle.
HUMAN / CONTACT GEOMETRY: establish physical staging before motion. The same adult appears ONLY in shots explicitly marked as a person shot. Empty shots do not inherit body parts from the previous shot. Start each clip from its own approved still and join clips with HARD CUTS. Never combine sitting down, standing up, turning, operating controls and lifting into one continuous action. Lock the camera for human-contact shots. No human is present during desk motion. Camera-only shots have no hand or furniture motion. Body, clothing, desktop and chair are separate opaque solids: resolve occlusion by real depth, never transparency, melting or disappearance.

SHOT CAST AND SPATIAL LOCK:
CAST: ZERO people, ZERO hands and ZERO feet. The chair is fully empty; no trouser legs, shoes or human silhouette beneath it. Cut directly to this approved empty start frame; never dissolve a person away within the clip.
Keep the target detail and its surface or mounting context readable with a tiny straight push-in. Do not force a full-product view into this detail crop; no orbit.

ONLY ACTION:

Only a tiny camera push; frame and mechanical joints remain stationary, with no button press or lift.

END STATE:

Product, props and empty chair remain intact; no body, hands or feet enter.

No internal cut, orbit or unrequested action. Use ONLY the camera or body motion specified for this shot, never both. Preserve everything else.

START-FRAME AND CLIP ACCEPTANCE: before animation, check actor/hand count, shoulder-elbow-wrist continuity, pelvis supported by seat, chair back behind the person, and clearance to desktop and armrests. Hand details contain only one right hand; empty shots have no leftover legs or feet. Reject an invalid start frame before animation; do not ask the video model to repair it. Inspect beginning, middle of action and end of each clip. Extra hands, detached torso, intersections or disappearing body mean reject the whole clip and regenerate with less motion or retain the approved still. Blurring, fading or cropping the defect is not a repair. Prompts reduce risk but do not guarantee every generated frame.

HARD FAILURES: wrong SKU, mirrored scene, controller on user-left or a short end, second controller, ordinary columns with wider lower tubes, changed stage count, floating feet, bending/tilting/elastic desktop, extra drawer, extra leg, disappearing cable, unsupported accessory. No generated captions, voice-over, music, promo badge or brand lettering. Add German subtitles and branding in editing. If geometry cannot be kept, reduce the action or retain the approved still; do not redesign the product.
```

## 镜头 5 · 12–15 秒
后期德语字幕：Jetzt bei Furniwell entdecken.
### 首帧提示词
```text
@image1 @image2

Create ONE photorealistic 9:16 still image, not a storyboard or collage. The attached @image1 is the exact official desk photograph and the only desk-shape reference; @image2 independently locks the companion chair. Preserve the furniture; change only the human staging and room described below.

Production recipe FV-02, shot 5 START FRAME.

PRODUCT IDENTITY — highest priority:
Furniwell black L-shaped electric corner desk, SKU G-SDF23-0285-0-B-G-HADT23-0286-BK, variant 45028720378122, 160 x 140 x 60 cm. Preserve the exact L silhouette, return direction, unequal wing proportions, seams, THREE black lifting columns and THREE original floor feet in @image1. The seated worker occupies the inner working corner and faces the main long working edge; the return is on her LEFT as in the reference. Exactly ONE original hanging keypad remains below the main user-facing long edge on her RIGHT. Never mirror the L, swap its wings, replace it with two separate desks or a two-leg straight desk. No added wheels or drawers.
COLUMN ASSEMBLY:
Preserve the user-confirmed INVERTED column installation: upper outer sleeve above the lower inner section. Keep the exact visible collapsed column geometry in @image1. The collapsed photo does not establish the hidden telescoping stage count: do not invent a two-stage or three-stage mechanism. THIS RECIPE HAS NO HEIGHT-CHANGE SHOT; all three columns and feet remain motionless. A lifting shot requires a separately verified raised-state reference of this exact SKU first.
CONTROLLER LOCATION:
The one hanging keypad stays under the MAIN user-facing LONG edge on the seated worker's RIGHT, never on either outer short end and never moved to the return. The desk does not move; this recipe shows an empty control detail without hands.
ORIENTATION: FRONT means the long working edge nearest the seated woman; BACK means the opposite edge. RIGHT always means her anatomical right when she sits facing the work surface, never the camera's right. The keypad stays fixed at that physical right-front working position across cuts. Keep cameras on the worker-facing side of the desk; no camera crossing behind the back edge and no horizontal mirroring. If a reverse view is ever used, her physical right may appear on screen-left; do not relocate the controller to compensate.
CONTINUITY:
In person shots ONLY: the same adult woman, about 30, brown hair in a low ponytail, cream sweater, charcoal trousers. Empty shots have zero people or body parts. One-hand close-ups show only her right hand and its connected wrist/forearm. Keep the same room, props and light direction across hard cuts.
One German home-office corner, soft window light from the worker's LEFT. One laptop on the main wing and an open notebook on the LEFT return. One woman, one chair, one continuous L-shaped desk.
COMPANION CHAIR — @image2:
Use only Furniwell high-back office chair, SKU G-OCNC23-0240-2, variant 44820467712266, grey mesh with its original light frame, padded seat and five-spoke base. Chair reference: https://cdn.shopify.com/s/files/1/0580/4615/2882/files/0240-Grey.jpg?v=1698643212
Chair product: https://furniwell.de/products/ergonomischer-burostuhl-mit-verstellbarer-hoher-rucken?variant=44820467712266
Actually upload this chair photograph as @image2. Preserve its separate mesh headrest, upper mesh back, separate lower lumbar support, original arms, seat, five-spoke base and five casters. Never substitute a headrest-free generic white chair or gaming chair. Keep the same chair through every shot. Desk @image1 and chair @image2 are independent shape references. The chair stays grounded when the desk rises. This chair is sold separately; do not imply a free chair or desk-and-chair bundle.
HUMAN / CONTACT GEOMETRY: establish physical staging before motion. The same adult appears ONLY in shots explicitly marked as a person shot. Empty shots do not inherit body parts from the previous shot. Start each clip from its own approved still and join clips with HARD CUTS. Never combine sitting down, standing up, turning, operating controls and lifting into one continuous action. Lock the camera for human-contact shots. No human is present during desk motion. Camera-only shots have no hand or furniture motion. Body, clothing, desktop and chair are separate opaque solids: resolve occlusion by real depth, never transparency, melting or disappearance.

SHOT CAST AND SPATIAL LOCK:
CAST: ZERO people, ZERO hands and ZERO feet. The chair is fully empty; no trouser legs, shoes or human silhouette beneath it. Cut directly to this approved empty start frame; never dissolve a person away within the clip.
Keep the complete product and floor feet readable. A very small straight push-in only; no orbit or perspective switch.

THIS SHOT START FRAME:

The exact product and the same specified chair are already staged. Full product, empty scene, furniture and props still.

Freeze this single start pose; do not include the action or end state. No motion trail, duplicate pose or simultaneous before/after states. Reject a faulty anatomical start frame before video generation.

START-FRAME AND CLIP ACCEPTANCE: before animation, check actor/hand count, shoulder-elbow-wrist continuity, pelvis supported by seat, chair back behind the person, and clearance to desktop and armrests. Hand details contain only one right hand; empty shots have no leftover legs or feet. Reject an invalid start frame before animation; do not ask the video model to repair it. Inspect beginning, middle of action and end of each clip. Extra hands, detached torso, intersections or disappearing body mean reject the whole clip and regenerate with less motion or retain the approved still. Blurring, fading or cropping the defect is not a repair. Prompts reduce risk but do not guarantee every generated frame.

HARD FAILURES: wrong SKU, mirrored scene, controller on user-left or a short end, second controller, ordinary columns with wider lower tubes, changed stage count, floating feet, bending/tilting/elastic desktop, extra drawer, extra leg, disappearing cable, unsupported accessory. No generated captions, voice-over, music, promo badge or brand lettering. Add German subtitles and branding in editing. If geometry cannot be kept, reduce the action or retain the approved still; do not redesign the product.
```
### 单镜头 Grok 图生视频提示词
```text
@image1 @image2 @image3

Generate ONE 3-second vertical 9:16 image-to-video clip. In this separate clip task, @image1 is the official product identity reference; @image2 is the approved Furniwell chair photograph; @image3 is THIS SHOT'S already approved start frame. Begin exactly from @image3. Preserve its framing, pose, geometry, room, props and lighting. Do not create a different opening composition.

PRODUCT IDENTITY — highest priority:
Furniwell black L-shaped electric corner desk, SKU G-SDF23-0285-0-B-G-HADT23-0286-BK, variant 45028720378122, 160 x 140 x 60 cm. Preserve the exact L silhouette, return direction, unequal wing proportions, seams, THREE black lifting columns and THREE original floor feet in @image1. The seated worker occupies the inner working corner and faces the main long working edge; the return is on her LEFT as in the reference. Exactly ONE original hanging keypad remains below the main user-facing long edge on her RIGHT. Never mirror the L, swap its wings, replace it with two separate desks or a two-leg straight desk. No added wheels or drawers.
COLUMN ASSEMBLY:
Preserve the user-confirmed INVERTED column installation: upper outer sleeve above the lower inner section. Keep the exact visible collapsed column geometry in @image1. The collapsed photo does not establish the hidden telescoping stage count: do not invent a two-stage or three-stage mechanism. THIS RECIPE HAS NO HEIGHT-CHANGE SHOT; all three columns and feet remain motionless. A lifting shot requires a separately verified raised-state reference of this exact SKU first.
CONTROLLER LOCATION:
The one hanging keypad stays under the MAIN user-facing LONG edge on the seated worker's RIGHT, never on either outer short end and never moved to the return. The desk does not move; this recipe shows an empty control detail without hands.
ORIENTATION: FRONT means the long working edge nearest the seated woman; BACK means the opposite edge. RIGHT always means her anatomical right when she sits facing the work surface, never the camera's right. The keypad stays fixed at that physical right-front working position across cuts. Keep cameras on the worker-facing side of the desk; no camera crossing behind the back edge and no horizontal mirroring. If a reverse view is ever used, her physical right may appear on screen-left; do not relocate the controller to compensate.
CONTINUITY:
In person shots ONLY: the same adult woman, about 30, brown hair in a low ponytail, cream sweater, charcoal trousers. Empty shots have zero people or body parts. One-hand close-ups show only her right hand and its connected wrist/forearm. Keep the same room, props and light direction across hard cuts.
One German home-office corner, soft window light from the worker's LEFT. One laptop on the main wing and an open notebook on the LEFT return. One woman, one chair, one continuous L-shaped desk.
COMPANION CHAIR — @image2:
Use only Furniwell high-back office chair, SKU G-OCNC23-0240-2, variant 44820467712266, grey mesh with its original light frame, padded seat and five-spoke base. Chair reference: https://cdn.shopify.com/s/files/1/0580/4615/2882/files/0240-Grey.jpg?v=1698643212
Chair product: https://furniwell.de/products/ergonomischer-burostuhl-mit-verstellbarer-hoher-rucken?variant=44820467712266
Actually upload this chair photograph as @image2. Preserve its separate mesh headrest, upper mesh back, separate lower lumbar support, original arms, seat, five-spoke base and five casters. Never substitute a headrest-free generic white chair or gaming chair. Keep the same chair through every shot. Desk @image1 and chair @image2 are independent shape references. The chair stays grounded when the desk rises. This chair is sold separately; do not imply a free chair or desk-and-chair bundle.
HUMAN / CONTACT GEOMETRY: establish physical staging before motion. The same adult appears ONLY in shots explicitly marked as a person shot. Empty shots do not inherit body parts from the previous shot. Start each clip from its own approved still and join clips with HARD CUTS. Never combine sitting down, standing up, turning, operating controls and lifting into one continuous action. Lock the camera for human-contact shots. No human is present during desk motion. Camera-only shots have no hand or furniture motion. Body, clothing, desktop and chair are separate opaque solids: resolve occlusion by real depth, never transparency, melting or disappearance.

SHOT CAST AND SPATIAL LOCK:
CAST: ZERO people, ZERO hands and ZERO feet. The chair is fully empty; no trouser legs, shoes or human silhouette beneath it. Cut directly to this approved empty start frame; never dissolve a person away within the clip.
Keep the complete product and floor feet readable. A very small straight push-in only; no orbit or perspective switch.

ONLY ACTION:

Only the camera makes a tiny straight push-in; product, chair and props remain still.

END STATE:

The same complete product and empty chair; room for an editor-added CTA.

No internal cut, orbit or unrequested action. Use ONLY the camera or body motion specified for this shot, never both. Preserve everything else.

START-FRAME AND CLIP ACCEPTANCE: before animation, check actor/hand count, shoulder-elbow-wrist continuity, pelvis supported by seat, chair back behind the person, and clearance to desktop and armrests. Hand details contain only one right hand; empty shots have no leftover legs or feet. Reject an invalid start frame before animation; do not ask the video model to repair it. Inspect beginning, middle of action and end of each clip. Extra hands, detached torso, intersections or disappearing body mean reject the whole clip and regenerate with less motion or retain the approved still. Blurring, fading or cropping the defect is not a repair. Prompts reduce risk but do not guarantee every generated frame.

HARD FAILURES: wrong SKU, mirrored scene, controller on user-left or a short end, second controller, ordinary columns with wider lower tubes, changed stage count, floating feet, bending/tilting/elastic desktop, extra drawer, extra leg, disappearing cable, unsupported accessory. No generated captions, voice-over, music, promo badge or brand lettering. Add German subtitles and branding in editing. If geometry cannot be kept, reduce the action or retain the approved still; do not redesign the product.
```

## 验收
- 产品名称、SKU、尺寸、颜色与三视图一致；四拼、整板、玻璃桌不能混用。
- 控制器只有一个，位于入座者右侧；外挂与 G2 内嵌形式正确；没有装到短边。
- 倒装立柱粗管在上、细管在下；节数、立柱数量、脚型正确；底脚贴地。
- 升降时桌面与上部套管一起移动；桌面水平；没有拉伸变形或全行程瞬移。
- G2 只有原装一个抽屉；L 桌保留原朝向及三根立柱；未确认结构不补画。
- 对比首帧、运动中间帧和尾帧。发现多手、断身、人体消失、穿桌板/椅架、错款或结构变形，整段退回重做；不通过模糊、淡化或裁切掩盖错误，不进入投放。
- 搭配椅是指定灰色高背款，独立头枕、腰靠、扶手与五爪底座正确；image2 不是首帧，image3 才是当前镜头首帧。
- 人物镜头恰好一个完整成年人，双手分放对应大腿；椅背在身后，骨盆由坐垫承托。不能从椅背后拍正脸，不能只剩椅下裤腿。
- 手部特写只见一只右手与连续手腕前臂；无人镜头连残留的手、腿、脚与人影也不能有。

制作边界：提示词与参考图可降低结构错误，不能保证生成模型每帧正确。首帧与成片都要人工核对；错款画面不进入投放。

# FV-03 · 保留线长余量，再让桌子升起来 · Grok 产品锁定版
更新日期：2026-10-29（北京时间）；研究样本日期仍为 2026-10-27。
固定产品：Economy 白色四拼桌板 120 × 60 cm
SKU：G-HAD241222B；variant：44533451587850
商品：https://furniwell.de/products/economy-elektrisch-hohenverstellbarer-schreibtisch?variant=44533451587850
官网原图 / image1：https://cdn.shopify.com/s/files/1/0580/4615/2882/files/EconomyElektrischHohenverstellbarerSchreibtisch-sku_1.jpg?v=1764671992
搭配椅 / image2：G-OCNC23-0240-2；https://furniwell.de/products/ergonomischer-burostuhl-mit-verstellbarer-hoher-rucken?variant=44820467712266
椅子官网原图：https://cdn.shopify.com/s/files/1/0580/4615/2882/files/0240-Grey.jpg?v=1698643212
每镜头首帧作为 image3；搭配椅单独销售。更换椅子款式或颜色请使用网页的中文 Prompt 生成区。

## 使用顺序
1. 先下载主商品原图与灰色高背办公椅原图并实际上传，分别作为 image1、image2。只粘贴商品链接不会绑定图片。
2. 先复制每镜头的“首帧提示词”制作单张 9:16 首帧；先验收人数、手数、肩肘腕连接、椅背在身后及桌沿间隙，再核对产品。错误首帧必须重做，不能交给视频模型修复。
3. 推荐分镜生成：每镜头开独立任务，先上传主商品原图作为 image1、搭配椅原图作为 image2，再上传本镜头已验收首帧作为 image3。image2 不再指首帧，不要上传另一镜头的首帧。
4. 15 秒总提示词现在是剪辑计划，不直接整段交给 Grok 连续生成。每镜头只复制本段 3 秒图生视频指令；image1 主商品、image2 搭配椅、image3 当前首帧。界面不识别标签时手动指定附件。
5. 每段只做一个小动作：人物镜头桌椅固定，手部特写仅一只右手，升降镜头无人且椅子在运动区外。不生成入座、起身或转身过程；用硬切连接已完成状态。字幕、口播、品牌和促销信息后期添加。

## 固定产品结构
- 白色 120 × 60 cm；四片拼接桌板，保留原图拼缝。
- 两根白色立柱，每根两节：粗外套管在上，细内管在下并连接底脚。
- 两只原装白色长条 T 脚，保留黑色脚垫、横梁与线缆。
- 仅一个黑色外挂手控器：入座者右手侧、靠人的前长边下方；不是右侧短边。
核验边界：已对照同一变体官方主图确认两节倒装。

## 15 秒剪辑计划（纯英文；不要整段连续生成）
```text
Production recipe FV-03. EDIT PLAN ONLY: five INDEPENDENT 3-second vertical 9:16 clips, joined into a 15-second ad. Do NOT submit this complete plan as a single continuous Grok generation. Make and approve each start still, then copy only that shot's image-to-video prompt. Actually upload @image1 as the official product reference and @image2 as the companion chair reference; each separate clip also uses its own approved @image3.

PRODUCT IDENTITY — highest priority:
Furniwell Economy, SKU G-HAD241222B, variant 44533451587850. White 120 x 60 cm FOUR-PANEL desktop, with the exact seam pattern in @image1. Two white lifting columns, TWO telescoping sections per column. Two original white T-shaped floor feet with their original dark leveling pads. Exactly ONE original black hanging digital keypad under the user-facing FRONT LONG EDGE, on the seated user's anatomical RIGHT. Copy its actual housing, angle, display and buttons from @image1. No drawer, glass top, third column, wheels, extra keypad or added cable tray.
COLUMN ASSEMBLY:
INVERTED TWO-STAGE COLUMNS: the WIDER outer sleeve is UPPER, attached to the underside frame; the NARROWER inner section is LOWER, attached to the floor foot. Thick at the top, slim at the bottom. The thick upper sleeve and desktop travel upward together; the thin lower section remains anchored to the foot, so more of the thin section becomes visible below the upper sleeve. On lowering, the upper sleeve covers more of the lower section. The feet stay planted. Do not swap tube widths, turn either column upside down, add a third section, stretch solid metal, or lift only the tabletop.
CONTROLLER LOCATION:
One black hanging keypad BELOW the front long edge at the seated worker's RIGHT. For a button shot, the worker uses her RIGHT index finger and approaches from her own side of the desk. Keep the real front-right tabletop corner and a portion of the long edge in view; never mount the keypad on the short end.
ORIENTATION: FRONT means the long working edge nearest the seated woman; BACK means the opposite edge. RIGHT always means her anatomical right when she sits facing the work surface, never the camera's right. The keypad stays fixed at that physical right-front working position across cuts. Keep cameras on the worker-facing side of the desk; no camera crossing behind the back edge and no horizontal mirroring. If a reverse view is ever used, her physical right may appear on screen-left; do not relocate the controller to compensate.
CONTINUITY:
In person shots ONLY: the same adult woman, about 30, brown hair in a low ponytail, cream sweater, charcoal trousers. Empty shots have zero people or body parts. One-hand close-ups show only her right hand and its connected wrist/forearm. Keep the same room, props and light direction across hard cuts.
One German home office, same woman and one laptop. Only the real desk power lead and laptop lead are present. The existing power connection stays connected. No cable tray, magnetic cover or hidden power box is included or invented.
COMPANION CHAIR — @image2:
Use only Furniwell high-back office chair, SKU G-OCNC23-0240-2, variant 44820467712266, grey mesh with its original light frame, padded seat and five-spoke base. Chair reference: https://cdn.shopify.com/s/files/1/0580/4615/2882/files/0240-Grey.jpg?v=1698643212
Chair product: https://furniwell.de/products/ergonomischer-burostuhl-mit-verstellbarer-hoher-rucken?variant=44820467712266
Actually upload this chair photograph as @image2. Preserve its separate mesh headrest, upper mesh back, separate lower lumbar support, original arms, seat, five-spoke base and five casters. Never substitute a headrest-free generic white chair or gaming chair. Keep the same chair through every shot. Desk @image1 and chair @image2 are independent shape references. The chair stays grounded when the desk rises. This chair is sold separately; do not imply a free chair or desk-and-chair bundle.
HUMAN / CONTACT GEOMETRY: establish physical staging before motion. The same adult appears ONLY in shots explicitly marked as a person shot. Empty shots do not inherit body parts from the previous shot. Start each clip from its own approved still and join clips with HARD CUTS. Never combine sitting down, standing up, turning, operating controls and lifting into one continuous action. Lock the camera for human-contact shots. No human is present during desk motion. Camera-only shots have no hand or furniture motion. Body, clothing, desktop and chair are separate opaque solids: resolve occlusion by real depth, never transparency, melting or disappearance.

EDITING: HARD CUTS between already-established poses. Never animate sitting down, rising from the chair, turning across the desk, or a full sit-to-stand lift.

SHOT 1, 0-3s: @image1 @image2
SHOT CAST AND SPATIAL LOCK:
CAST: ZERO people, ZERO hands and ZERO feet. The chair is fully empty; no trouser legs, shoes or human silhouette beneath it. Cut directly to this approved empty start frame; never dissolve a person away within the clip.
Keep the target detail and its surface or mounting context readable with a tiny straight push-in. Do not force a full-product view into this detail crop; no orbit.
START: Empty low view; original power lead connected with slack and clear of telescoping joints. No person crouches under the desk.
ACTION: Tiny camera push to inspect the original lead only; no hands, unplugging or added organizers.
END: Product, props and empty chair remain intact; no body, hands or feet enter.

SHOT 2, 3-6s: @image1 @image2
SHOT CAST AND SPATIAL LOCK:
CAST: ZERO people, ZERO hands and ZERO feet. The chair is fully empty; no trouser legs, shoes or human silhouette beneath it. Cut directly to this approved empty start frame; never dissolve a person away within the clip.
Keep the target detail and its surface or mounting context readable with a tiny straight push-in. Do not force a full-product view into this detail crop; no orbit.
START: At a HARD CUT, the original lead already forms a broad slack U-loop; connection stays intact. Do not show the arranging process.
ACTION: Tiny camera push to inspect the established slack; cable and furniture remain still.
END: Product, props and empty chair remain intact; no body, hands or feet enter.

SHOT 3, 6-9s: @image1 @image2
SHOT CAST AND SPATIAL LOCK:
CAST: ZERO people, ZERO hands and ZERO feet. The chair is fully empty; no trouser legs, shoes or human silhouette beneath it. Cut directly to this approved empty start frame; never dissolve a person away within the clip.
Locked camera and focal length; no push, zoom or orbit.
The ONLY motion is verified small desk travel. No human enters the motion zone; no button-operating hand is shown.
START: Empty lifting shot with level top, both complete inverted columns and floor feet readable. Chair is already clear of the lifting path; armrests have clearance from the top and frame. Original cable has slack; feet are grounded.
ACTION: Only a SMALL partial lift of a few centimeters: the wider upper sleeves and level desktop move upward together, revealing more of the anchored narrow lower sections. Feet and camera fixed; no person or hand; chair still. No full sit-to-stand transition in three seconds.
END: The same desk after the small lift, with cable slack, feet and chair unchanged.

SHOT 4, 9-12s: @image1 @image2
SHOT CAST AND SPATIAL LOCK:
CAST: exactly ONE anatomically complete seated adult, already seated in the start frame. Pelvis supported by the seat; chair back behind the torso; chest facing the desk; two thighs connected to the same pelvis and knees; both feet on the floor. Exactly one left and one right hand rest separately on their corresponding thighs, palms down, and stay there: no typing or reaching for controls. Each hand connects continuously through wrist, elbow and shoulder to this one person. The person is in FRONT of the chair back. Never film a face through a foreground chair back or hide the entire head and torso while leaving orphan trouser legs. Keep a visible gap between torso and desktop; armrests remain outside the front desk edge and never enter the desktop.
Locked side view from the person's right, making side profile, shoulder, torso and seat depth readable; never orbit behind or film through the chair back.
START: The same adult is already seated facing the laptop at an approved seated desk height. Hands rest separately on thighs; armrests are not pushed under the desktop.
ACTION: Only one tiny glance/head nod toward the screen; hands, torso, chair and desk stay in place.
END: The same complete seated pose, with both hands still on their thighs; no reach or rising.

SHOT 5, 12-15s: @image1 @image2
SHOT CAST AND SPATIAL LOCK:
CAST: ZERO people, ZERO hands and ZERO feet. The chair is fully empty; no trouser legs, shoes or human silhouette beneath it. Cut directly to this approved empty start frame; never dissolve a person away within the clip.
Keep the complete product and floor feet readable. A very small straight push-in only; no orbit or perspective switch.
START: The exact product and the same specified chair are already staged. Full product, empty scene, furniture and props still.
ACTION: Only the camera makes a tiny straight push-in; product, chair and props remain still.
END: The same complete product and empty chair; room for an editor-added CTA.

START-FRAME AND CLIP ACCEPTANCE: before animation, check actor/hand count, shoulder-elbow-wrist continuity, pelvis supported by seat, chair back behind the person, and clearance to desktop and armrests. Hand details contain only one right hand; empty shots have no leftover legs or feet. Reject an invalid start frame before animation; do not ask the video model to repair it. Inspect beginning, middle of action and end of each clip. Extra hands, detached torso, intersections or disappearing body mean reject the whole clip and regenerate with less motion or retain the approved still. Blurring, fading or cropping the defect is not a repair. Prompts reduce risk but do not guarantee every generated frame.

HARD FAILURES: wrong SKU, mirrored scene, controller on user-left or a short end, second controller, ordinary columns with wider lower tubes, changed stage count, floating feet, bending/tilting/elastic desktop, extra drawer, extra leg, disappearing cable, unsupported accessory. No generated captions, voice-over, music, promo badge or brand lettering. Add German subtitles and branding in editing. If geometry cannot be kept, reduce the action or retain the approved still; do not redesign the product.
```

## 镜头 1 · 0–3 秒
后期德语字幕：Genug Spielraum für deine Kabel.
### 首帧提示词
```text
@image1 @image2

Create ONE photorealistic 9:16 still image, not a storyboard or collage. The attached @image1 is the exact official desk photograph and the only desk-shape reference; @image2 independently locks the companion chair. Preserve the furniture; change only the human staging and room described below.

Production recipe FV-03, shot 1 START FRAME.

PRODUCT IDENTITY — highest priority:
Furniwell Economy, SKU G-HAD241222B, variant 44533451587850. White 120 x 60 cm FOUR-PANEL desktop, with the exact seam pattern in @image1. Two white lifting columns, TWO telescoping sections per column. Two original white T-shaped floor feet with their original dark leveling pads. Exactly ONE original black hanging digital keypad under the user-facing FRONT LONG EDGE, on the seated user's anatomical RIGHT. Copy its actual housing, angle, display and buttons from @image1. No drawer, glass top, third column, wheels, extra keypad or added cable tray.
COLUMN ASSEMBLY:
INVERTED TWO-STAGE COLUMNS: the WIDER outer sleeve is UPPER, attached to the underside frame; the NARROWER inner section is LOWER, attached to the floor foot. Thick at the top, slim at the bottom. The thick upper sleeve and desktop travel upward together; the thin lower section remains anchored to the foot, so more of the thin section becomes visible below the upper sleeve. On lowering, the upper sleeve covers more of the lower section. The feet stay planted. Do not swap tube widths, turn either column upside down, add a third section, stretch solid metal, or lift only the tabletop.
CONTROLLER LOCATION:
One black hanging keypad BELOW the front long edge at the seated worker's RIGHT. For a button shot, the worker uses her RIGHT index finger and approaches from her own side of the desk. Keep the real front-right tabletop corner and a portion of the long edge in view; never mount the keypad on the short end.
ORIENTATION: FRONT means the long working edge nearest the seated woman; BACK means the opposite edge. RIGHT always means her anatomical right when she sits facing the work surface, never the camera's right. The keypad stays fixed at that physical right-front working position across cuts. Keep cameras on the worker-facing side of the desk; no camera crossing behind the back edge and no horizontal mirroring. If a reverse view is ever used, her physical right may appear on screen-left; do not relocate the controller to compensate.
CONTINUITY:
In person shots ONLY: the same adult woman, about 30, brown hair in a low ponytail, cream sweater, charcoal trousers. Empty shots have zero people or body parts. One-hand close-ups show only her right hand and its connected wrist/forearm. Keep the same room, props and light direction across hard cuts.
One German home office, same woman and one laptop. Only the real desk power lead and laptop lead are present. The existing power connection stays connected. No cable tray, magnetic cover or hidden power box is included or invented.
COMPANION CHAIR — @image2:
Use only Furniwell high-back office chair, SKU G-OCNC23-0240-2, variant 44820467712266, grey mesh with its original light frame, padded seat and five-spoke base. Chair reference: https://cdn.shopify.com/s/files/1/0580/4615/2882/files/0240-Grey.jpg?v=1698643212
Chair product: https://furniwell.de/products/ergonomischer-burostuhl-mit-verstellbarer-hoher-rucken?variant=44820467712266
Actually upload this chair photograph as @image2. Preserve its separate mesh headrest, upper mesh back, separate lower lumbar support, original arms, seat, five-spoke base and five casters. Never substitute a headrest-free generic white chair or gaming chair. Keep the same chair through every shot. Desk @image1 and chair @image2 are independent shape references. The chair stays grounded when the desk rises. This chair is sold separately; do not imply a free chair or desk-and-chair bundle.
HUMAN / CONTACT GEOMETRY: establish physical staging before motion. The same adult appears ONLY in shots explicitly marked as a person shot. Empty shots do not inherit body parts from the previous shot. Start each clip from its own approved still and join clips with HARD CUTS. Never combine sitting down, standing up, turning, operating controls and lifting into one continuous action. Lock the camera for human-contact shots. No human is present during desk motion. Camera-only shots have no hand or furniture motion. Body, clothing, desktop and chair are separate opaque solids: resolve occlusion by real depth, never transparency, melting or disappearance.

SHOT CAST AND SPATIAL LOCK:
CAST: ZERO people, ZERO hands and ZERO feet. The chair is fully empty; no trouser legs, shoes or human silhouette beneath it. Cut directly to this approved empty start frame; never dissolve a person away within the clip.
Keep the target detail and its surface or mounting context readable with a tiny straight push-in. Do not force a full-product view into this detail crop; no orbit.

THIS SHOT START FRAME:

Empty low view; original power lead connected with slack and clear of telescoping joints. No person crouches under the desk.

Freeze this single start pose; do not include the action or end state. No motion trail, duplicate pose or simultaneous before/after states. Reject a faulty anatomical start frame before video generation.

START-FRAME AND CLIP ACCEPTANCE: before animation, check actor/hand count, shoulder-elbow-wrist continuity, pelvis supported by seat, chair back behind the person, and clearance to desktop and armrests. Hand details contain only one right hand; empty shots have no leftover legs or feet. Reject an invalid start frame before animation; do not ask the video model to repair it. Inspect beginning, middle of action and end of each clip. Extra hands, detached torso, intersections or disappearing body mean reject the whole clip and regenerate with less motion or retain the approved still. Blurring, fading or cropping the defect is not a repair. Prompts reduce risk but do not guarantee every generated frame.

HARD FAILURES: wrong SKU, mirrored scene, controller on user-left or a short end, second controller, ordinary columns with wider lower tubes, changed stage count, floating feet, bending/tilting/elastic desktop, extra drawer, extra leg, disappearing cable, unsupported accessory. No generated captions, voice-over, music, promo badge or brand lettering. Add German subtitles and branding in editing. If geometry cannot be kept, reduce the action or retain the approved still; do not redesign the product.
```
### 单镜头 Grok 图生视频提示词
```text
@image1 @image2 @image3

Generate ONE 3-second vertical 9:16 image-to-video clip. In this separate clip task, @image1 is the official product identity reference; @image2 is the approved Furniwell chair photograph; @image3 is THIS SHOT'S already approved start frame. Begin exactly from @image3. Preserve its framing, pose, geometry, room, props and lighting. Do not create a different opening composition.

PRODUCT IDENTITY — highest priority:
Furniwell Economy, SKU G-HAD241222B, variant 44533451587850. White 120 x 60 cm FOUR-PANEL desktop, with the exact seam pattern in @image1. Two white lifting columns, TWO telescoping sections per column. Two original white T-shaped floor feet with their original dark leveling pads. Exactly ONE original black hanging digital keypad under the user-facing FRONT LONG EDGE, on the seated user's anatomical RIGHT. Copy its actual housing, angle, display and buttons from @image1. No drawer, glass top, third column, wheels, extra keypad or added cable tray.
COLUMN ASSEMBLY:
INVERTED TWO-STAGE COLUMNS: the WIDER outer sleeve is UPPER, attached to the underside frame; the NARROWER inner section is LOWER, attached to the floor foot. Thick at the top, slim at the bottom. The thick upper sleeve and desktop travel upward together; the thin lower section remains anchored to the foot, so more of the thin section becomes visible below the upper sleeve. On lowering, the upper sleeve covers more of the lower section. The feet stay planted. Do not swap tube widths, turn either column upside down, add a third section, stretch solid metal, or lift only the tabletop.
CONTROLLER LOCATION:
One black hanging keypad BELOW the front long edge at the seated worker's RIGHT. For a button shot, the worker uses her RIGHT index finger and approaches from her own side of the desk. Keep the real front-right tabletop corner and a portion of the long edge in view; never mount the keypad on the short end.
ORIENTATION: FRONT means the long working edge nearest the seated woman; BACK means the opposite edge. RIGHT always means her anatomical right when she sits facing the work surface, never the camera's right. The keypad stays fixed at that physical right-front working position across cuts. Keep cameras on the worker-facing side of the desk; no camera crossing behind the back edge and no horizontal mirroring. If a reverse view is ever used, her physical right may appear on screen-left; do not relocate the controller to compensate.
CONTINUITY:
In person shots ONLY: the same adult woman, about 30, brown hair in a low ponytail, cream sweater, charcoal trousers. Empty shots have zero people or body parts. One-hand close-ups show only her right hand and its connected wrist/forearm. Keep the same room, props and light direction across hard cuts.
One German home office, same woman and one laptop. Only the real desk power lead and laptop lead are present. The existing power connection stays connected. No cable tray, magnetic cover or hidden power box is included or invented.
COMPANION CHAIR — @image2:
Use only Furniwell high-back office chair, SKU G-OCNC23-0240-2, variant 44820467712266, grey mesh with its original light frame, padded seat and five-spoke base. Chair reference: https://cdn.shopify.com/s/files/1/0580/4615/2882/files/0240-Grey.jpg?v=1698643212
Chair product: https://furniwell.de/products/ergonomischer-burostuhl-mit-verstellbarer-hoher-rucken?variant=44820467712266
Actually upload this chair photograph as @image2. Preserve its separate mesh headrest, upper mesh back, separate lower lumbar support, original arms, seat, five-spoke base and five casters. Never substitute a headrest-free generic white chair or gaming chair. Keep the same chair through every shot. Desk @image1 and chair @image2 are independent shape references. The chair stays grounded when the desk rises. This chair is sold separately; do not imply a free chair or desk-and-chair bundle.
HUMAN / CONTACT GEOMETRY: establish physical staging before motion. The same adult appears ONLY in shots explicitly marked as a person shot. Empty shots do not inherit body parts from the previous shot. Start each clip from its own approved still and join clips with HARD CUTS. Never combine sitting down, standing up, turning, operating controls and lifting into one continuous action. Lock the camera for human-contact shots. No human is present during desk motion. Camera-only shots have no hand or furniture motion. Body, clothing, desktop and chair are separate opaque solids: resolve occlusion by real depth, never transparency, melting or disappearance.

SHOT CAST AND SPATIAL LOCK:
CAST: ZERO people, ZERO hands and ZERO feet. The chair is fully empty; no trouser legs, shoes or human silhouette beneath it. Cut directly to this approved empty start frame; never dissolve a person away within the clip.
Keep the target detail and its surface or mounting context readable with a tiny straight push-in. Do not force a full-product view into this detail crop; no orbit.

ONLY ACTION:

Tiny camera push to inspect the original lead only; no hands, unplugging or added organizers.

END STATE:

Product, props and empty chair remain intact; no body, hands or feet enter.

No internal cut, orbit or unrequested action. Use ONLY the camera or body motion specified for this shot, never both. Preserve everything else.

START-FRAME AND CLIP ACCEPTANCE: before animation, check actor/hand count, shoulder-elbow-wrist continuity, pelvis supported by seat, chair back behind the person, and clearance to desktop and armrests. Hand details contain only one right hand; empty shots have no leftover legs or feet. Reject an invalid start frame before animation; do not ask the video model to repair it. Inspect beginning, middle of action and end of each clip. Extra hands, detached torso, intersections or disappearing body mean reject the whole clip and regenerate with less motion or retain the approved still. Blurring, fading or cropping the defect is not a repair. Prompts reduce risk but do not guarantee every generated frame.

HARD FAILURES: wrong SKU, mirrored scene, controller on user-left or a short end, second controller, ordinary columns with wider lower tubes, changed stage count, floating feet, bending/tilting/elastic desktop, extra drawer, extra leg, disappearing cable, unsupported accessory. No generated captions, voice-over, music, promo badge or brand lettering. Add German subtitles and branding in editing. If geometry cannot be kept, reduce the action or retain the approved still; do not redesign the product.
```

## 镜头 2 · 3–6 秒
后期德语字幕：Mit etwas Spielraum.
### 首帧提示词
```text
@image1 @image2

Create ONE photorealistic 9:16 still image, not a storyboard or collage. The attached @image1 is the exact official desk photograph and the only desk-shape reference; @image2 independently locks the companion chair. Preserve the furniture; change only the human staging and room described below.

Production recipe FV-03, shot 2 START FRAME.

PRODUCT IDENTITY — highest priority:
Furniwell Economy, SKU G-HAD241222B, variant 44533451587850. White 120 x 60 cm FOUR-PANEL desktop, with the exact seam pattern in @image1. Two white lifting columns, TWO telescoping sections per column. Two original white T-shaped floor feet with their original dark leveling pads. Exactly ONE original black hanging digital keypad under the user-facing FRONT LONG EDGE, on the seated user's anatomical RIGHT. Copy its actual housing, angle, display and buttons from @image1. No drawer, glass top, third column, wheels, extra keypad or added cable tray.
COLUMN ASSEMBLY:
INVERTED TWO-STAGE COLUMNS: the WIDER outer sleeve is UPPER, attached to the underside frame; the NARROWER inner section is LOWER, attached to the floor foot. Thick at the top, slim at the bottom. The thick upper sleeve and desktop travel upward together; the thin lower section remains anchored to the foot, so more of the thin section becomes visible below the upper sleeve. On lowering, the upper sleeve covers more of the lower section. The feet stay planted. Do not swap tube widths, turn either column upside down, add a third section, stretch solid metal, or lift only the tabletop.
CONTROLLER LOCATION:
One black hanging keypad BELOW the front long edge at the seated worker's RIGHT. For a button shot, the worker uses her RIGHT index finger and approaches from her own side of the desk. Keep the real front-right tabletop corner and a portion of the long edge in view; never mount the keypad on the short end.
ORIENTATION: FRONT means the long working edge nearest the seated woman; BACK means the opposite edge. RIGHT always means her anatomical right when she sits facing the work surface, never the camera's right. The keypad stays fixed at that physical right-front working position across cuts. Keep cameras on the worker-facing side of the desk; no camera crossing behind the back edge and no horizontal mirroring. If a reverse view is ever used, her physical right may appear on screen-left; do not relocate the controller to compensate.
CONTINUITY:
In person shots ONLY: the same adult woman, about 30, brown hair in a low ponytail, cream sweater, charcoal trousers. Empty shots have zero people or body parts. One-hand close-ups show only her right hand and its connected wrist/forearm. Keep the same room, props and light direction across hard cuts.
One German home office, same woman and one laptop. Only the real desk power lead and laptop lead are present. The existing power connection stays connected. No cable tray, magnetic cover or hidden power box is included or invented.
COMPANION CHAIR — @image2:
Use only Furniwell high-back office chair, SKU G-OCNC23-0240-2, variant 44820467712266, grey mesh with its original light frame, padded seat and five-spoke base. Chair reference: https://cdn.shopify.com/s/files/1/0580/4615/2882/files/0240-Grey.jpg?v=1698643212
Chair product: https://furniwell.de/products/ergonomischer-burostuhl-mit-verstellbarer-hoher-rucken?variant=44820467712266
Actually upload this chair photograph as @image2. Preserve its separate mesh headrest, upper mesh back, separate lower lumbar support, original arms, seat, five-spoke base and five casters. Never substitute a headrest-free generic white chair or gaming chair. Keep the same chair through every shot. Desk @image1 and chair @image2 are independent shape references. The chair stays grounded when the desk rises. This chair is sold separately; do not imply a free chair or desk-and-chair bundle.
HUMAN / CONTACT GEOMETRY: establish physical staging before motion. The same adult appears ONLY in shots explicitly marked as a person shot. Empty shots do not inherit body parts from the previous shot. Start each clip from its own approved still and join clips with HARD CUTS. Never combine sitting down, standing up, turning, operating controls and lifting into one continuous action. Lock the camera for human-contact shots. No human is present during desk motion. Camera-only shots have no hand or furniture motion. Body, clothing, desktop and chair are separate opaque solids: resolve occlusion by real depth, never transparency, melting or disappearance.

SHOT CAST AND SPATIAL LOCK:
CAST: ZERO people, ZERO hands and ZERO feet. The chair is fully empty; no trouser legs, shoes or human silhouette beneath it. Cut directly to this approved empty start frame; never dissolve a person away within the clip.
Keep the target detail and its surface or mounting context readable with a tiny straight push-in. Do not force a full-product view into this detail crop; no orbit.

THIS SHOT START FRAME:

At a HARD CUT, the original lead already forms a broad slack U-loop; connection stays intact. Do not show the arranging process.

Freeze this single start pose; do not include the action or end state. No motion trail, duplicate pose or simultaneous before/after states. Reject a faulty anatomical start frame before video generation.

START-FRAME AND CLIP ACCEPTANCE: before animation, check actor/hand count, shoulder-elbow-wrist continuity, pelvis supported by seat, chair back behind the person, and clearance to desktop and armrests. Hand details contain only one right hand; empty shots have no leftover legs or feet. Reject an invalid start frame before animation; do not ask the video model to repair it. Inspect beginning, middle of action and end of each clip. Extra hands, detached torso, intersections or disappearing body mean reject the whole clip and regenerate with less motion or retain the approved still. Blurring, fading or cropping the defect is not a repair. Prompts reduce risk but do not guarantee every generated frame.

HARD FAILURES: wrong SKU, mirrored scene, controller on user-left or a short end, second controller, ordinary columns with wider lower tubes, changed stage count, floating feet, bending/tilting/elastic desktop, extra drawer, extra leg, disappearing cable, unsupported accessory. No generated captions, voice-over, music, promo badge or brand lettering. Add German subtitles and branding in editing. If geometry cannot be kept, reduce the action or retain the approved still; do not redesign the product.
```
### 单镜头 Grok 图生视频提示词
```text
@image1 @image2 @image3

Generate ONE 3-second vertical 9:16 image-to-video clip. In this separate clip task, @image1 is the official product identity reference; @image2 is the approved Furniwell chair photograph; @image3 is THIS SHOT'S already approved start frame. Begin exactly from @image3. Preserve its framing, pose, geometry, room, props and lighting. Do not create a different opening composition.

PRODUCT IDENTITY — highest priority:
Furniwell Economy, SKU G-HAD241222B, variant 44533451587850. White 120 x 60 cm FOUR-PANEL desktop, with the exact seam pattern in @image1. Two white lifting columns, TWO telescoping sections per column. Two original white T-shaped floor feet with their original dark leveling pads. Exactly ONE original black hanging digital keypad under the user-facing FRONT LONG EDGE, on the seated user's anatomical RIGHT. Copy its actual housing, angle, display and buttons from @image1. No drawer, glass top, third column, wheels, extra keypad or added cable tray.
COLUMN ASSEMBLY:
INVERTED TWO-STAGE COLUMNS: the WIDER outer sleeve is UPPER, attached to the underside frame; the NARROWER inner section is LOWER, attached to the floor foot. Thick at the top, slim at the bottom. The thick upper sleeve and desktop travel upward together; the thin lower section remains anchored to the foot, so more of the thin section becomes visible below the upper sleeve. On lowering, the upper sleeve covers more of the lower section. The feet stay planted. Do not swap tube widths, turn either column upside down, add a third section, stretch solid metal, or lift only the tabletop.
CONTROLLER LOCATION:
One black hanging keypad BELOW the front long edge at the seated worker's RIGHT. For a button shot, the worker uses her RIGHT index finger and approaches from her own side of the desk. Keep the real front-right tabletop corner and a portion of the long edge in view; never mount the keypad on the short end.
ORIENTATION: FRONT means the long working edge nearest the seated woman; BACK means the opposite edge. RIGHT always means her anatomical right when she sits facing the work surface, never the camera's right. The keypad stays fixed at that physical right-front working position across cuts. Keep cameras on the worker-facing side of the desk; no camera crossing behind the back edge and no horizontal mirroring. If a reverse view is ever used, her physical right may appear on screen-left; do not relocate the controller to compensate.
CONTINUITY:
In person shots ONLY: the same adult woman, about 30, brown hair in a low ponytail, cream sweater, charcoal trousers. Empty shots have zero people or body parts. One-hand close-ups show only her right hand and its connected wrist/forearm. Keep the same room, props and light direction across hard cuts.
One German home office, same woman and one laptop. Only the real desk power lead and laptop lead are present. The existing power connection stays connected. No cable tray, magnetic cover or hidden power box is included or invented.
COMPANION CHAIR — @image2:
Use only Furniwell high-back office chair, SKU G-OCNC23-0240-2, variant 44820467712266, grey mesh with its original light frame, padded seat and five-spoke base. Chair reference: https://cdn.shopify.com/s/files/1/0580/4615/2882/files/0240-Grey.jpg?v=1698643212
Chair product: https://furniwell.de/products/ergonomischer-burostuhl-mit-verstellbarer-hoher-rucken?variant=44820467712266
Actually upload this chair photograph as @image2. Preserve its separate mesh headrest, upper mesh back, separate lower lumbar support, original arms, seat, five-spoke base and five casters. Never substitute a headrest-free generic white chair or gaming chair. Keep the same chair through every shot. Desk @image1 and chair @image2 are independent shape references. The chair stays grounded when the desk rises. This chair is sold separately; do not imply a free chair or desk-and-chair bundle.
HUMAN / CONTACT GEOMETRY: establish physical staging before motion. The same adult appears ONLY in shots explicitly marked as a person shot. Empty shots do not inherit body parts from the previous shot. Start each clip from its own approved still and join clips with HARD CUTS. Never combine sitting down, standing up, turning, operating controls and lifting into one continuous action. Lock the camera for human-contact shots. No human is present during desk motion. Camera-only shots have no hand or furniture motion. Body, clothing, desktop and chair are separate opaque solids: resolve occlusion by real depth, never transparency, melting or disappearance.

SHOT CAST AND SPATIAL LOCK:
CAST: ZERO people, ZERO hands and ZERO feet. The chair is fully empty; no trouser legs, shoes or human silhouette beneath it. Cut directly to this approved empty start frame; never dissolve a person away within the clip.
Keep the target detail and its surface or mounting context readable with a tiny straight push-in. Do not force a full-product view into this detail crop; no orbit.

ONLY ACTION:

Tiny camera push to inspect the established slack; cable and furniture remain still.

END STATE:

Product, props and empty chair remain intact; no body, hands or feet enter.

No internal cut, orbit or unrequested action. Use ONLY the camera or body motion specified for this shot, never both. Preserve everything else.

START-FRAME AND CLIP ACCEPTANCE: before animation, check actor/hand count, shoulder-elbow-wrist continuity, pelvis supported by seat, chair back behind the person, and clearance to desktop and armrests. Hand details contain only one right hand; empty shots have no leftover legs or feet. Reject an invalid start frame before animation; do not ask the video model to repair it. Inspect beginning, middle of action and end of each clip. Extra hands, detached torso, intersections or disappearing body mean reject the whole clip and regenerate with less motion or retain the approved still. Blurring, fading or cropping the defect is not a repair. Prompts reduce risk but do not guarantee every generated frame.

HARD FAILURES: wrong SKU, mirrored scene, controller on user-left or a short end, second controller, ordinary columns with wider lower tubes, changed stage count, floating feet, bending/tilting/elastic desktop, extra drawer, extra leg, disappearing cable, unsupported accessory. No generated captions, voice-over, music, promo badge or brand lettering. Add German subtitles and branding in editing. If geometry cannot be kept, reduce the action or retain the approved still; do not redesign the product.
```

## 镜头 3 · 6–9 秒
后期德语字幕：Passend eingestellt.
### 首帧提示词
```text
@image1 @image2

Create ONE photorealistic 9:16 still image, not a storyboard or collage. The attached @image1 is the exact official desk photograph and the only desk-shape reference; @image2 independently locks the companion chair. Preserve the furniture; change only the human staging and room described below.

Production recipe FV-03, shot 3 START FRAME.

PRODUCT IDENTITY — highest priority:
Furniwell Economy, SKU G-HAD241222B, variant 44533451587850. White 120 x 60 cm FOUR-PANEL desktop, with the exact seam pattern in @image1. Two white lifting columns, TWO telescoping sections per column. Two original white T-shaped floor feet with their original dark leveling pads. Exactly ONE original black hanging digital keypad under the user-facing FRONT LONG EDGE, on the seated user's anatomical RIGHT. Copy its actual housing, angle, display and buttons from @image1. No drawer, glass top, third column, wheels, extra keypad or added cable tray.
COLUMN ASSEMBLY:
INVERTED TWO-STAGE COLUMNS: the WIDER outer sleeve is UPPER, attached to the underside frame; the NARROWER inner section is LOWER, attached to the floor foot. Thick at the top, slim at the bottom. The thick upper sleeve and desktop travel upward together; the thin lower section remains anchored to the foot, so more of the thin section becomes visible below the upper sleeve. On lowering, the upper sleeve covers more of the lower section. The feet stay planted. Do not swap tube widths, turn either column upside down, add a third section, stretch solid metal, or lift only the tabletop.
CONTROLLER LOCATION:
One black hanging keypad BELOW the front long edge at the seated worker's RIGHT. For a button shot, the worker uses her RIGHT index finger and approaches from her own side of the desk. Keep the real front-right tabletop corner and a portion of the long edge in view; never mount the keypad on the short end.
ORIENTATION: FRONT means the long working edge nearest the seated woman; BACK means the opposite edge. RIGHT always means her anatomical right when she sits facing the work surface, never the camera's right. The keypad stays fixed at that physical right-front working position across cuts. Keep cameras on the worker-facing side of the desk; no camera crossing behind the back edge and no horizontal mirroring. If a reverse view is ever used, her physical right may appear on screen-left; do not relocate the controller to compensate.
CONTINUITY:
In person shots ONLY: the same adult woman, about 30, brown hair in a low ponytail, cream sweater, charcoal trousers. Empty shots have zero people or body parts. One-hand close-ups show only her right hand and its connected wrist/forearm. Keep the same room, props and light direction across hard cuts.
One German home office, same woman and one laptop. Only the real desk power lead and laptop lead are present. The existing power connection stays connected. No cable tray, magnetic cover or hidden power box is included or invented.
COMPANION CHAIR — @image2:
Use only Furniwell high-back office chair, SKU G-OCNC23-0240-2, variant 44820467712266, grey mesh with its original light frame, padded seat and five-spoke base. Chair reference: https://cdn.shopify.com/s/files/1/0580/4615/2882/files/0240-Grey.jpg?v=1698643212
Chair product: https://furniwell.de/products/ergonomischer-burostuhl-mit-verstellbarer-hoher-rucken?variant=44820467712266
Actually upload this chair photograph as @image2. Preserve its separate mesh headrest, upper mesh back, separate lower lumbar support, original arms, seat, five-spoke base and five casters. Never substitute a headrest-free generic white chair or gaming chair. Keep the same chair through every shot. Desk @image1 and chair @image2 are independent shape references. The chair stays grounded when the desk rises. This chair is sold separately; do not imply a free chair or desk-and-chair bundle.
HUMAN / CONTACT GEOMETRY: establish physical staging before motion. The same adult appears ONLY in shots explicitly marked as a person shot. Empty shots do not inherit body parts from the previous shot. Start each clip from its own approved still and join clips with HARD CUTS. Never combine sitting down, standing up, turning, operating controls and lifting into one continuous action. Lock the camera for human-contact shots. No human is present during desk motion. Camera-only shots have no hand or furniture motion. Body, clothing, desktop and chair are separate opaque solids: resolve occlusion by real depth, never transparency, melting or disappearance.

SHOT CAST AND SPATIAL LOCK:
CAST: ZERO people, ZERO hands and ZERO feet. The chair is fully empty; no trouser legs, shoes or human silhouette beneath it. Cut directly to this approved empty start frame; never dissolve a person away within the clip.
Locked camera and focal length; no push, zoom or orbit.
The ONLY motion is verified small desk travel. No human enters the motion zone; no button-operating hand is shown.

THIS SHOT START FRAME:

Empty lifting shot with level top, both complete inverted columns and floor feet readable. Chair is already clear of the lifting path; armrests have clearance from the top and frame. Original cable has slack; feet are grounded.

Freeze this single start pose; do not include the action or end state. No motion trail, duplicate pose or simultaneous before/after states. Reject a faulty anatomical start frame before video generation.

START-FRAME AND CLIP ACCEPTANCE: before animation, check actor/hand count, shoulder-elbow-wrist continuity, pelvis supported by seat, chair back behind the person, and clearance to desktop and armrests. Hand details contain only one right hand; empty shots have no leftover legs or feet. Reject an invalid start frame before animation; do not ask the video model to repair it. Inspect beginning, middle of action and end of each clip. Extra hands, detached torso, intersections or disappearing body mean reject the whole clip and regenerate with less motion or retain the approved still. Blurring, fading or cropping the defect is not a repair. Prompts reduce risk but do not guarantee every generated frame.

HARD FAILURES: wrong SKU, mirrored scene, controller on user-left or a short end, second controller, ordinary columns with wider lower tubes, changed stage count, floating feet, bending/tilting/elastic desktop, extra drawer, extra leg, disappearing cable, unsupported accessory. No generated captions, voice-over, music, promo badge or brand lettering. Add German subtitles and branding in editing. If geometry cannot be kept, reduce the action or retain the approved still; do not redesign the product.
```
### 单镜头 Grok 图生视频提示词
```text
@image1 @image2 @image3

Generate ONE 3-second vertical 9:16 image-to-video clip. In this separate clip task, @image1 is the official product identity reference; @image2 is the approved Furniwell chair photograph; @image3 is THIS SHOT'S already approved start frame. Begin exactly from @image3. Preserve its framing, pose, geometry, room, props and lighting. Do not create a different opening composition.

PRODUCT IDENTITY — highest priority:
Furniwell Economy, SKU G-HAD241222B, variant 44533451587850. White 120 x 60 cm FOUR-PANEL desktop, with the exact seam pattern in @image1. Two white lifting columns, TWO telescoping sections per column. Two original white T-shaped floor feet with their original dark leveling pads. Exactly ONE original black hanging digital keypad under the user-facing FRONT LONG EDGE, on the seated user's anatomical RIGHT. Copy its actual housing, angle, display and buttons from @image1. No drawer, glass top, third column, wheels, extra keypad or added cable tray.
COLUMN ASSEMBLY:
INVERTED TWO-STAGE COLUMNS: the WIDER outer sleeve is UPPER, attached to the underside frame; the NARROWER inner section is LOWER, attached to the floor foot. Thick at the top, slim at the bottom. The thick upper sleeve and desktop travel upward together; the thin lower section remains anchored to the foot, so more of the thin section becomes visible below the upper sleeve. On lowering, the upper sleeve covers more of the lower section. The feet stay planted. Do not swap tube widths, turn either column upside down, add a third section, stretch solid metal, or lift only the tabletop.
CONTROLLER LOCATION:
One black hanging keypad BELOW the front long edge at the seated worker's RIGHT. For a button shot, the worker uses her RIGHT index finger and approaches from her own side of the desk. Keep the real front-right tabletop corner and a portion of the long edge in view; never mount the keypad on the short end.
ORIENTATION: FRONT means the long working edge nearest the seated woman; BACK means the opposite edge. RIGHT always means her anatomical right when she sits facing the work surface, never the camera's right. The keypad stays fixed at that physical right-front working position across cuts. Keep cameras on the worker-facing side of the desk; no camera crossing behind the back edge and no horizontal mirroring. If a reverse view is ever used, her physical right may appear on screen-left; do not relocate the controller to compensate.
CONTINUITY:
In person shots ONLY: the same adult woman, about 30, brown hair in a low ponytail, cream sweater, charcoal trousers. Empty shots have zero people or body parts. One-hand close-ups show only her right hand and its connected wrist/forearm. Keep the same room, props and light direction across hard cuts.
One German home office, same woman and one laptop. Only the real desk power lead and laptop lead are present. The existing power connection stays connected. No cable tray, magnetic cover or hidden power box is included or invented.
COMPANION CHAIR — @image2:
Use only Furniwell high-back office chair, SKU G-OCNC23-0240-2, variant 44820467712266, grey mesh with its original light frame, padded seat and five-spoke base. Chair reference: https://cdn.shopify.com/s/files/1/0580/4615/2882/files/0240-Grey.jpg?v=1698643212
Chair product: https://furniwell.de/products/ergonomischer-burostuhl-mit-verstellbarer-hoher-rucken?variant=44820467712266
Actually upload this chair photograph as @image2. Preserve its separate mesh headrest, upper mesh back, separate lower lumbar support, original arms, seat, five-spoke base and five casters. Never substitute a headrest-free generic white chair or gaming chair. Keep the same chair through every shot. Desk @image1 and chair @image2 are independent shape references. The chair stays grounded when the desk rises. This chair is sold separately; do not imply a free chair or desk-and-chair bundle.
HUMAN / CONTACT GEOMETRY: establish physical staging before motion. The same adult appears ONLY in shots explicitly marked as a person shot. Empty shots do not inherit body parts from the previous shot. Start each clip from its own approved still and join clips with HARD CUTS. Never combine sitting down, standing up, turning, operating controls and lifting into one continuous action. Lock the camera for human-contact shots. No human is present during desk motion. Camera-only shots have no hand or furniture motion. Body, clothing, desktop and chair are separate opaque solids: resolve occlusion by real depth, never transparency, melting or disappearance.

SHOT CAST AND SPATIAL LOCK:
CAST: ZERO people, ZERO hands and ZERO feet. The chair is fully empty; no trouser legs, shoes or human silhouette beneath it. Cut directly to this approved empty start frame; never dissolve a person away within the clip.
Locked camera and focal length; no push, zoom or orbit.
The ONLY motion is verified small desk travel. No human enters the motion zone; no button-operating hand is shown.

ONLY ACTION:

Only a SMALL partial lift of a few centimeters: the wider upper sleeves and level desktop move upward together, revealing more of the anchored narrow lower sections. Feet and camera fixed; no person or hand; chair still. No full sit-to-stand transition in three seconds.

END STATE:

The same desk after the small lift, with cable slack, feet and chair unchanged.

No internal cut, orbit or unrequested action. Use ONLY the camera or body motion specified for this shot, never both. Preserve everything else.

START-FRAME AND CLIP ACCEPTANCE: before animation, check actor/hand count, shoulder-elbow-wrist continuity, pelvis supported by seat, chair back behind the person, and clearance to desktop and armrests. Hand details contain only one right hand; empty shots have no leftover legs or feet. Reject an invalid start frame before animation; do not ask the video model to repair it. Inspect beginning, middle of action and end of each clip. Extra hands, detached torso, intersections or disappearing body mean reject the whole clip and regenerate with less motion or retain the approved still. Blurring, fading or cropping the defect is not a repair. Prompts reduce risk but do not guarantee every generated frame.

HARD FAILURES: wrong SKU, mirrored scene, controller on user-left or a short end, second controller, ordinary columns with wider lower tubes, changed stage count, floating feet, bending/tilting/elastic desktop, extra drawer, extra leg, disappearing cable, unsupported accessory. No generated captions, voice-over, music, promo badge or brand lettering. Add German subtitles and branding in editing. If geometry cannot be kept, reduce the action or retain the approved still; do not redesign the product.
```

## 镜头 4 · 9–12 秒
后期德语字幕：Bereit für deinen Alltag.
### 首帧提示词
```text
@image1 @image2

Create ONE photorealistic 9:16 still image, not a storyboard or collage. The attached @image1 is the exact official desk photograph and the only desk-shape reference; @image2 independently locks the companion chair. Preserve the furniture; change only the human staging and room described below.

Production recipe FV-03, shot 4 START FRAME.

PRODUCT IDENTITY — highest priority:
Furniwell Economy, SKU G-HAD241222B, variant 44533451587850. White 120 x 60 cm FOUR-PANEL desktop, with the exact seam pattern in @image1. Two white lifting columns, TWO telescoping sections per column. Two original white T-shaped floor feet with their original dark leveling pads. Exactly ONE original black hanging digital keypad under the user-facing FRONT LONG EDGE, on the seated user's anatomical RIGHT. Copy its actual housing, angle, display and buttons from @image1. No drawer, glass top, third column, wheels, extra keypad or added cable tray.
COLUMN ASSEMBLY:
INVERTED TWO-STAGE COLUMNS: the WIDER outer sleeve is UPPER, attached to the underside frame; the NARROWER inner section is LOWER, attached to the floor foot. Thick at the top, slim at the bottom. The thick upper sleeve and desktop travel upward together; the thin lower section remains anchored to the foot, so more of the thin section becomes visible below the upper sleeve. On lowering, the upper sleeve covers more of the lower section. The feet stay planted. Do not swap tube widths, turn either column upside down, add a third section, stretch solid metal, or lift only the tabletop.
CONTROLLER LOCATION:
One black hanging keypad BELOW the front long edge at the seated worker's RIGHT. For a button shot, the worker uses her RIGHT index finger and approaches from her own side of the desk. Keep the real front-right tabletop corner and a portion of the long edge in view; never mount the keypad on the short end.
ORIENTATION: FRONT means the long working edge nearest the seated woman; BACK means the opposite edge. RIGHT always means her anatomical right when she sits facing the work surface, never the camera's right. The keypad stays fixed at that physical right-front working position across cuts. Keep cameras on the worker-facing side of the desk; no camera crossing behind the back edge and no horizontal mirroring. If a reverse view is ever used, her physical right may appear on screen-left; do not relocate the controller to compensate.
CONTINUITY:
In person shots ONLY: the same adult woman, about 30, brown hair in a low ponytail, cream sweater, charcoal trousers. Empty shots have zero people or body parts. One-hand close-ups show only her right hand and its connected wrist/forearm. Keep the same room, props and light direction across hard cuts.
One German home office, same woman and one laptop. Only the real desk power lead and laptop lead are present. The existing power connection stays connected. No cable tray, magnetic cover or hidden power box is included or invented.
COMPANION CHAIR — @image2:
Use only Furniwell high-back office chair, SKU G-OCNC23-0240-2, variant 44820467712266, grey mesh with its original light frame, padded seat and five-spoke base. Chair reference: https://cdn.shopify.com/s/files/1/0580/4615/2882/files/0240-Grey.jpg?v=1698643212
Chair product: https://furniwell.de/products/ergonomischer-burostuhl-mit-verstellbarer-hoher-rucken?variant=44820467712266
Actually upload this chair photograph as @image2. Preserve its separate mesh headrest, upper mesh back, separate lower lumbar support, original arms, seat, five-spoke base and five casters. Never substitute a headrest-free generic white chair or gaming chair. Keep the same chair through every shot. Desk @image1 and chair @image2 are independent shape references. The chair stays grounded when the desk rises. This chair is sold separately; do not imply a free chair or desk-and-chair bundle.
HUMAN / CONTACT GEOMETRY: establish physical staging before motion. The same adult appears ONLY in shots explicitly marked as a person shot. Empty shots do not inherit body parts from the previous shot. Start each clip from its own approved still and join clips with HARD CUTS. Never combine sitting down, standing up, turning, operating controls and lifting into one continuous action. Lock the camera for human-contact shots. No human is present during desk motion. Camera-only shots have no hand or furniture motion. Body, clothing, desktop and chair are separate opaque solids: resolve occlusion by real depth, never transparency, melting or disappearance.

SHOT CAST AND SPATIAL LOCK:
CAST: exactly ONE anatomically complete seated adult, already seated in the start frame. Pelvis supported by the seat; chair back behind the torso; chest facing the desk; two thighs connected to the same pelvis and knees; both feet on the floor. Exactly one left and one right hand rest separately on their corresponding thighs, palms down, and stay there: no typing or reaching for controls. Each hand connects continuously through wrist, elbow and shoulder to this one person. The person is in FRONT of the chair back. Never film a face through a foreground chair back or hide the entire head and torso while leaving orphan trouser legs. Keep a visible gap between torso and desktop; armrests remain outside the front desk edge and never enter the desktop.
Locked side view from the person's right, making side profile, shoulder, torso and seat depth readable; never orbit behind or film through the chair back.

THIS SHOT START FRAME:

The same adult is already seated facing the laptop at an approved seated desk height. Hands rest separately on thighs; armrests are not pushed under the desktop.

Freeze this single start pose; do not include the action or end state. No motion trail, duplicate pose or simultaneous before/after states. Reject a faulty anatomical start frame before video generation.

START-FRAME AND CLIP ACCEPTANCE: before animation, check actor/hand count, shoulder-elbow-wrist continuity, pelvis supported by seat, chair back behind the person, and clearance to desktop and armrests. Hand details contain only one right hand; empty shots have no leftover legs or feet. Reject an invalid start frame before animation; do not ask the video model to repair it. Inspect beginning, middle of action and end of each clip. Extra hands, detached torso, intersections or disappearing body mean reject the whole clip and regenerate with less motion or retain the approved still. Blurring, fading or cropping the defect is not a repair. Prompts reduce risk but do not guarantee every generated frame.

HARD FAILURES: wrong SKU, mirrored scene, controller on user-left or a short end, second controller, ordinary columns with wider lower tubes, changed stage count, floating feet, bending/tilting/elastic desktop, extra drawer, extra leg, disappearing cable, unsupported accessory. No generated captions, voice-over, music, promo badge or brand lettering. Add German subtitles and branding in editing. If geometry cannot be kept, reduce the action or retain the approved still; do not redesign the product.
```
### 单镜头 Grok 图生视频提示词
```text
@image1 @image2 @image3

Generate ONE 3-second vertical 9:16 image-to-video clip. In this separate clip task, @image1 is the official product identity reference; @image2 is the approved Furniwell chair photograph; @image3 is THIS SHOT'S already approved start frame. Begin exactly from @image3. Preserve its framing, pose, geometry, room, props and lighting. Do not create a different opening composition.

PRODUCT IDENTITY — highest priority:
Furniwell Economy, SKU G-HAD241222B, variant 44533451587850. White 120 x 60 cm FOUR-PANEL desktop, with the exact seam pattern in @image1. Two white lifting columns, TWO telescoping sections per column. Two original white T-shaped floor feet with their original dark leveling pads. Exactly ONE original black hanging digital keypad under the user-facing FRONT LONG EDGE, on the seated user's anatomical RIGHT. Copy its actual housing, angle, display and buttons from @image1. No drawer, glass top, third column, wheels, extra keypad or added cable tray.
COLUMN ASSEMBLY:
INVERTED TWO-STAGE COLUMNS: the WIDER outer sleeve is UPPER, attached to the underside frame; the NARROWER inner section is LOWER, attached to the floor foot. Thick at the top, slim at the bottom. The thick upper sleeve and desktop travel upward together; the thin lower section remains anchored to the foot, so more of the thin section becomes visible below the upper sleeve. On lowering, the upper sleeve covers more of the lower section. The feet stay planted. Do not swap tube widths, turn either column upside down, add a third section, stretch solid metal, or lift only the tabletop.
CONTROLLER LOCATION:
One black hanging keypad BELOW the front long edge at the seated worker's RIGHT. For a button shot, the worker uses her RIGHT index finger and approaches from her own side of the desk. Keep the real front-right tabletop corner and a portion of the long edge in view; never mount the keypad on the short end.
ORIENTATION: FRONT means the long working edge nearest the seated woman; BACK means the opposite edge. RIGHT always means her anatomical right when she sits facing the work surface, never the camera's right. The keypad stays fixed at that physical right-front working position across cuts. Keep cameras on the worker-facing side of the desk; no camera crossing behind the back edge and no horizontal mirroring. If a reverse view is ever used, her physical right may appear on screen-left; do not relocate the controller to compensate.
CONTINUITY:
In person shots ONLY: the same adult woman, about 30, brown hair in a low ponytail, cream sweater, charcoal trousers. Empty shots have zero people or body parts. One-hand close-ups show only her right hand and its connected wrist/forearm. Keep the same room, props and light direction across hard cuts.
One German home office, same woman and one laptop. Only the real desk power lead and laptop lead are present. The existing power connection stays connected. No cable tray, magnetic cover or hidden power box is included or invented.
COMPANION CHAIR — @image2:
Use only Furniwell high-back office chair, SKU G-OCNC23-0240-2, variant 44820467712266, grey mesh with its original light frame, padded seat and five-spoke base. Chair reference: https://cdn.shopify.com/s/files/1/0580/4615/2882/files/0240-Grey.jpg?v=1698643212
Chair product: https://furniwell.de/products/ergonomischer-burostuhl-mit-verstellbarer-hoher-rucken?variant=44820467712266
Actually upload this chair photograph as @image2. Preserve its separate mesh headrest, upper mesh back, separate lower lumbar support, original arms, seat, five-spoke base and five casters. Never substitute a headrest-free generic white chair or gaming chair. Keep the same chair through every shot. Desk @image1 and chair @image2 are independent shape references. The chair stays grounded when the desk rises. This chair is sold separately; do not imply a free chair or desk-and-chair bundle.
HUMAN / CONTACT GEOMETRY: establish physical staging before motion. The same adult appears ONLY in shots explicitly marked as a person shot. Empty shots do not inherit body parts from the previous shot. Start each clip from its own approved still and join clips with HARD CUTS. Never combine sitting down, standing up, turning, operating controls and lifting into one continuous action. Lock the camera for human-contact shots. No human is present during desk motion. Camera-only shots have no hand or furniture motion. Body, clothing, desktop and chair are separate opaque solids: resolve occlusion by real depth, never transparency, melting or disappearance.

SHOT CAST AND SPATIAL LOCK:
CAST: exactly ONE anatomically complete seated adult, already seated in the start frame. Pelvis supported by the seat; chair back behind the torso; chest facing the desk; two thighs connected to the same pelvis and knees; both feet on the floor. Exactly one left and one right hand rest separately on their corresponding thighs, palms down, and stay there: no typing or reaching for controls. Each hand connects continuously through wrist, elbow and shoulder to this one person. The person is in FRONT of the chair back. Never film a face through a foreground chair back or hide the entire head and torso while leaving orphan trouser legs. Keep a visible gap between torso and desktop; armrests remain outside the front desk edge and never enter the desktop.
Locked side view from the person's right, making side profile, shoulder, torso and seat depth readable; never orbit behind or film through the chair back.

ONLY ACTION:

Only one tiny glance/head nod toward the screen; hands, torso, chair and desk stay in place.

END STATE:

The same complete seated pose, with both hands still on their thighs; no reach or rising.

No internal cut, orbit or unrequested action. Use ONLY the camera or body motion specified for this shot, never both. Preserve everything else.

START-FRAME AND CLIP ACCEPTANCE: before animation, check actor/hand count, shoulder-elbow-wrist continuity, pelvis supported by seat, chair back behind the person, and clearance to desktop and armrests. Hand details contain only one right hand; empty shots have no leftover legs or feet. Reject an invalid start frame before animation; do not ask the video model to repair it. Inspect beginning, middle of action and end of each clip. Extra hands, detached torso, intersections or disappearing body mean reject the whole clip and regenerate with less motion or retain the approved still. Blurring, fading or cropping the defect is not a repair. Prompts reduce risk but do not guarantee every generated frame.

HARD FAILURES: wrong SKU, mirrored scene, controller on user-left or a short end, second controller, ordinary columns with wider lower tubes, changed stage count, floating feet, bending/tilting/elastic desktop, extra drawer, extra leg, disappearing cable, unsupported accessory. No generated captions, voice-over, music, promo badge or brand lettering. Add German subtitles and branding in editing. If geometry cannot be kept, reduce the action or retain the approved still; do not redesign the product.
```

## 镜头 5 · 12–15 秒
后期德语字幕：Jetzt bei Furniwell entdecken.
### 首帧提示词
```text
@image1 @image2

Create ONE photorealistic 9:16 still image, not a storyboard or collage. The attached @image1 is the exact official desk photograph and the only desk-shape reference; @image2 independently locks the companion chair. Preserve the furniture; change only the human staging and room described below.

Production recipe FV-03, shot 5 START FRAME.

PRODUCT IDENTITY — highest priority:
Furniwell Economy, SKU G-HAD241222B, variant 44533451587850. White 120 x 60 cm FOUR-PANEL desktop, with the exact seam pattern in @image1. Two white lifting columns, TWO telescoping sections per column. Two original white T-shaped floor feet with their original dark leveling pads. Exactly ONE original black hanging digital keypad under the user-facing FRONT LONG EDGE, on the seated user's anatomical RIGHT. Copy its actual housing, angle, display and buttons from @image1. No drawer, glass top, third column, wheels, extra keypad or added cable tray.
COLUMN ASSEMBLY:
INVERTED TWO-STAGE COLUMNS: the WIDER outer sleeve is UPPER, attached to the underside frame; the NARROWER inner section is LOWER, attached to the floor foot. Thick at the top, slim at the bottom. The thick upper sleeve and desktop travel upward together; the thin lower section remains anchored to the foot, so more of the thin section becomes visible below the upper sleeve. On lowering, the upper sleeve covers more of the lower section. The feet stay planted. Do not swap tube widths, turn either column upside down, add a third section, stretch solid metal, or lift only the tabletop.
CONTROLLER LOCATION:
One black hanging keypad BELOW the front long edge at the seated worker's RIGHT. For a button shot, the worker uses her RIGHT index finger and approaches from her own side of the desk. Keep the real front-right tabletop corner and a portion of the long edge in view; never mount the keypad on the short end.
ORIENTATION: FRONT means the long working edge nearest the seated woman; BACK means the opposite edge. RIGHT always means her anatomical right when she sits facing the work surface, never the camera's right. The keypad stays fixed at that physical right-front working position across cuts. Keep cameras on the worker-facing side of the desk; no camera crossing behind the back edge and no horizontal mirroring. If a reverse view is ever used, her physical right may appear on screen-left; do not relocate the controller to compensate.
CONTINUITY:
In person shots ONLY: the same adult woman, about 30, brown hair in a low ponytail, cream sweater, charcoal trousers. Empty shots have zero people or body parts. One-hand close-ups show only her right hand and its connected wrist/forearm. Keep the same room, props and light direction across hard cuts.
One German home office, same woman and one laptop. Only the real desk power lead and laptop lead are present. The existing power connection stays connected. No cable tray, magnetic cover or hidden power box is included or invented.
COMPANION CHAIR — @image2:
Use only Furniwell high-back office chair, SKU G-OCNC23-0240-2, variant 44820467712266, grey mesh with its original light frame, padded seat and five-spoke base. Chair reference: https://cdn.shopify.com/s/files/1/0580/4615/2882/files/0240-Grey.jpg?v=1698643212
Chair product: https://furniwell.de/products/ergonomischer-burostuhl-mit-verstellbarer-hoher-rucken?variant=44820467712266
Actually upload this chair photograph as @image2. Preserve its separate mesh headrest, upper mesh back, separate lower lumbar support, original arms, seat, five-spoke base and five casters. Never substitute a headrest-free generic white chair or gaming chair. Keep the same chair through every shot. Desk @image1 and chair @image2 are independent shape references. The chair stays grounded when the desk rises. This chair is sold separately; do not imply a free chair or desk-and-chair bundle.
HUMAN / CONTACT GEOMETRY: establish physical staging before motion. The same adult appears ONLY in shots explicitly marked as a person shot. Empty shots do not inherit body parts from the previous shot. Start each clip from its own approved still and join clips with HARD CUTS. Never combine sitting down, standing up, turning, operating controls and lifting into one continuous action. Lock the camera for human-contact shots. No human is present during desk motion. Camera-only shots have no hand or furniture motion. Body, clothing, desktop and chair are separate opaque solids: resolve occlusion by real depth, never transparency, melting or disappearance.

SHOT CAST AND SPATIAL LOCK:
CAST: ZERO people, ZERO hands and ZERO feet. The chair is fully empty; no trouser legs, shoes or human silhouette beneath it. Cut directly to this approved empty start frame; never dissolve a person away within the clip.
Keep the complete product and floor feet readable. A very small straight push-in only; no orbit or perspective switch.

THIS SHOT START FRAME:

The exact product and the same specified chair are already staged. Full product, empty scene, furniture and props still.

Freeze this single start pose; do not include the action or end state. No motion trail, duplicate pose or simultaneous before/after states. Reject a faulty anatomical start frame before video generation.

START-FRAME AND CLIP ACCEPTANCE: before animation, check actor/hand count, shoulder-elbow-wrist continuity, pelvis supported by seat, chair back behind the person, and clearance to desktop and armrests. Hand details contain only one right hand; empty shots have no leftover legs or feet. Reject an invalid start frame before animation; do not ask the video model to repair it. Inspect beginning, middle of action and end of each clip. Extra hands, detached torso, intersections or disappearing body mean reject the whole clip and regenerate with less motion or retain the approved still. Blurring, fading or cropping the defect is not a repair. Prompts reduce risk but do not guarantee every generated frame.

HARD FAILURES: wrong SKU, mirrored scene, controller on user-left or a short end, second controller, ordinary columns with wider lower tubes, changed stage count, floating feet, bending/tilting/elastic desktop, extra drawer, extra leg, disappearing cable, unsupported accessory. No generated captions, voice-over, music, promo badge or brand lettering. Add German subtitles and branding in editing. If geometry cannot be kept, reduce the action or retain the approved still; do not redesign the product.
```
### 单镜头 Grok 图生视频提示词
```text
@image1 @image2 @image3

Generate ONE 3-second vertical 9:16 image-to-video clip. In this separate clip task, @image1 is the official product identity reference; @image2 is the approved Furniwell chair photograph; @image3 is THIS SHOT'S already approved start frame. Begin exactly from @image3. Preserve its framing, pose, geometry, room, props and lighting. Do not create a different opening composition.

PRODUCT IDENTITY — highest priority:
Furniwell Economy, SKU G-HAD241222B, variant 44533451587850. White 120 x 60 cm FOUR-PANEL desktop, with the exact seam pattern in @image1. Two white lifting columns, TWO telescoping sections per column. Two original white T-shaped floor feet with their original dark leveling pads. Exactly ONE original black hanging digital keypad under the user-facing FRONT LONG EDGE, on the seated user's anatomical RIGHT. Copy its actual housing, angle, display and buttons from @image1. No drawer, glass top, third column, wheels, extra keypad or added cable tray.
COLUMN ASSEMBLY:
INVERTED TWO-STAGE COLUMNS: the WIDER outer sleeve is UPPER, attached to the underside frame; the NARROWER inner section is LOWER, attached to the floor foot. Thick at the top, slim at the bottom. The thick upper sleeve and desktop travel upward together; the thin lower section remains anchored to the foot, so more of the thin section becomes visible below the upper sleeve. On lowering, the upper sleeve covers more of the lower section. The feet stay planted. Do not swap tube widths, turn either column upside down, add a third section, stretch solid metal, or lift only the tabletop.
CONTROLLER LOCATION:
One black hanging keypad BELOW the front long edge at the seated worker's RIGHT. For a button shot, the worker uses her RIGHT index finger and approaches from her own side of the desk. Keep the real front-right tabletop corner and a portion of the long edge in view; never mount the keypad on the short end.
ORIENTATION: FRONT means the long working edge nearest the seated woman; BACK means the opposite edge. RIGHT always means her anatomical right when she sits facing the work surface, never the camera's right. The keypad stays fixed at that physical right-front working position across cuts. Keep cameras on the worker-facing side of the desk; no camera crossing behind the back edge and no horizontal mirroring. If a reverse view is ever used, her physical right may appear on screen-left; do not relocate the controller to compensate.
CONTINUITY:
In person shots ONLY: the same adult woman, about 30, brown hair in a low ponytail, cream sweater, charcoal trousers. Empty shots have zero people or body parts. One-hand close-ups show only her right hand and its connected wrist/forearm. Keep the same room, props and light direction across hard cuts.
One German home office, same woman and one laptop. Only the real desk power lead and laptop lead are present. The existing power connection stays connected. No cable tray, magnetic cover or hidden power box is included or invented.
COMPANION CHAIR — @image2:
Use only Furniwell high-back office chair, SKU G-OCNC23-0240-2, variant 44820467712266, grey mesh with its original light frame, padded seat and five-spoke base. Chair reference: https://cdn.shopify.com/s/files/1/0580/4615/2882/files/0240-Grey.jpg?v=1698643212
Chair product: https://furniwell.de/products/ergonomischer-burostuhl-mit-verstellbarer-hoher-rucken?variant=44820467712266
Actually upload this chair photograph as @image2. Preserve its separate mesh headrest, upper mesh back, separate lower lumbar support, original arms, seat, five-spoke base and five casters. Never substitute a headrest-free generic white chair or gaming chair. Keep the same chair through every shot. Desk @image1 and chair @image2 are independent shape references. The chair stays grounded when the desk rises. This chair is sold separately; do not imply a free chair or desk-and-chair bundle.
HUMAN / CONTACT GEOMETRY: establish physical staging before motion. The same adult appears ONLY in shots explicitly marked as a person shot. Empty shots do not inherit body parts from the previous shot. Start each clip from its own approved still and join clips with HARD CUTS. Never combine sitting down, standing up, turning, operating controls and lifting into one continuous action. Lock the camera for human-contact shots. No human is present during desk motion. Camera-only shots have no hand or furniture motion. Body, clothing, desktop and chair are separate opaque solids: resolve occlusion by real depth, never transparency, melting or disappearance.

SHOT CAST AND SPATIAL LOCK:
CAST: ZERO people, ZERO hands and ZERO feet. The chair is fully empty; no trouser legs, shoes or human silhouette beneath it. Cut directly to this approved empty start frame; never dissolve a person away within the clip.
Keep the complete product and floor feet readable. A very small straight push-in only; no orbit or perspective switch.

ONLY ACTION:

Only the camera makes a tiny straight push-in; product, chair and props remain still.

END STATE:

The same complete product and empty chair; room for an editor-added CTA.

No internal cut, orbit or unrequested action. Use ONLY the camera or body motion specified for this shot, never both. Preserve everything else.

START-FRAME AND CLIP ACCEPTANCE: before animation, check actor/hand count, shoulder-elbow-wrist continuity, pelvis supported by seat, chair back behind the person, and clearance to desktop and armrests. Hand details contain only one right hand; empty shots have no leftover legs or feet. Reject an invalid start frame before animation; do not ask the video model to repair it. Inspect beginning, middle of action and end of each clip. Extra hands, detached torso, intersections or disappearing body mean reject the whole clip and regenerate with less motion or retain the approved still. Blurring, fading or cropping the defect is not a repair. Prompts reduce risk but do not guarantee every generated frame.

HARD FAILURES: wrong SKU, mirrored scene, controller on user-left or a short end, second controller, ordinary columns with wider lower tubes, changed stage count, floating feet, bending/tilting/elastic desktop, extra drawer, extra leg, disappearing cable, unsupported accessory. No generated captions, voice-over, music, promo badge or brand lettering. Add German subtitles and branding in editing. If geometry cannot be kept, reduce the action or retain the approved still; do not redesign the product.
```

## 验收
- 产品名称、SKU、尺寸、颜色与三视图一致；四拼、整板、玻璃桌不能混用。
- 控制器只有一个，位于入座者右侧；外挂与 G2 内嵌形式正确；没有装到短边。
- 倒装立柱粗管在上、细管在下；节数、立柱数量、脚型正确；底脚贴地。
- 升降时桌面与上部套管一起移动；桌面水平；没有拉伸变形或全行程瞬移。
- G2 只有原装一个抽屉；L 桌保留原朝向及三根立柱；未确认结构不补画。
- 对比首帧、运动中间帧和尾帧。发现多手、断身、人体消失、穿桌板/椅架、错款或结构变形，整段退回重做；不通过模糊、淡化或裁切掩盖错误，不进入投放。
- 搭配椅是指定灰色高背款，独立头枕、腰靠、扶手与五爪底座正确；image2 不是首帧，image3 才是当前镜头首帧。
- 人物镜头恰好一个完整成年人，双手分放对应大腿；椅背在身后，骨盆由坐垫承托。不能从椅背后拍正脸，不能只剩椅下裤腿。
- 手部特写只见一只右手与连续手腕前臂；无人镜头连残留的手、腿、脚与人影也不能有。

制作边界：提示词与参考图可降低结构错误，不能保证生成模型每帧正确。首帧与成片都要人工核对；错款画面不进入投放。

# FV-04 · G2：写下、收好、擦净 · Grok 产品锁定版
更新日期：2026-10-29（北京时间）；研究样本日期仍为 2026-10-27。
固定产品：G2 白色玻璃桌 140 × 70 cm
SKU：G-HAD24-0430-142WT-2；variant：45781441347850
商品：https://furniwell.de/products/hohenverstellbarer-schreibtisch-mit-einteilige-glasplatte-ergonomischer-stehschreibtisch-computertisch?variant=45781441347850
官网原图 / image1：https://cdn.shopify.com/s/files/1/0580/4615/2882/files/0430-1.4m.jpg?v=1718078234
搭配椅 / image2：G-OCNC23-0240-2；https://furniwell.de/products/ergonomischer-burostuhl-mit-verstellbarer-hoher-rucken?variant=44820467712266
椅子官网原图：https://cdn.shopify.com/s/files/1/0580/4615/2882/files/0240-Grey.jpg?v=1698643212
每镜头首帧作为 image3；搭配椅单独销售。更换椅子款式或颜色请使用网页的中文 Prompt 生成区。

## 使用顺序
1. 先下载主商品原图与灰色高背办公椅原图并实际上传，分别作为 image1、image2。只粘贴商品链接不会绑定图片。
2. 先复制每镜头的“首帧提示词”制作单张 9:16 首帧；先验收人数、手数、肩肘腕连接、椅背在身后及桌沿间隙，再核对产品。错误首帧必须重做，不能交给视频模型修复。
3. 推荐分镜生成：每镜头开独立任务，先上传主商品原图作为 image1、搭配椅原图作为 image2，再上传本镜头已验收首帧作为 image3。image2 不再指首帧，不要上传另一镜头的首帧。
4. 15 秒总提示词现在是剪辑计划，不直接整段交给 Grok 连续生成。每镜头只复制本段 3 秒图生视频指令；image1 主商品、image2 搭配椅、image3 当前首帧。界面不识别标签时手动指定附件。
5. 每段只做一个小动作：人物镜头桌椅固定，手部特写仅一只右手，升降镜头无人且椅子在运动区外。不生成入座、起身或转身过程；用硬切连接已完成状态。字幕、口播、品牌和促销信息后期添加。

## 固定产品结构
- 白色 140 × 70 cm；一整片玻璃桌面，不生成拼缝。
- 仅一个原装中央抽屉，保留原始宽度、抽屉面板和双侧滑轨。
- 两根白色两节倒装立柱：粗套管在上，细管在下；两只原装白色长条底脚。
- 控制面板内嵌于靠人的前长边右侧饰条；照原图保留按键与接口，不额外挂黑色控制器。
核验边界：已核对玻璃、原装单抽屉、前沿右侧内嵌控制面板与两节倒装立柱。

## 15 秒剪辑计划（纯英文；不要整段连续生成）
```text
Production recipe FV-04. EDIT PLAN ONLY: five INDEPENDENT 3-second vertical 9:16 clips, joined into a 15-second ad. Do NOT submit this complete plan as a single continuous Grok generation. Make and approve each start still, then copy only that shot's image-to-video prompt. Actually upload @image1 as the official product reference and @image2 as the companion chair reference; each separate clip also uses its own approved @image3.

PRODUCT IDENTITY — highest priority:
Furniwell G2 white glass desk, SKU G-HAD24-0430-142WT-2, variant 45781441347850, 140 x 70 cm. ONE continuous glass desktop, its original white front fascia, exactly ONE original central pull-out drawer with its real runners, two white columns and two original white floor feet. The ORIGINAL control strip and USB ports are INTEGRATED INTO the front fascia on the seated worker's RIGHT. Copy the exact visible layout in @image1. Do NOT add a separate hanging black Economy keypad. No desktop seams, wooden replacement top, second drawer, cabinet or wheel.
COLUMN ASSEMBLY:
INVERTED TWO-STAGE COLUMNS: the wider UPPER outer sleeve meets the under-desk frame; the narrower LOWER inner section meets the floor foot. Thick above, slim below, matching @image1. Keep that orientation in every frame. This writing-and-drawer recipe holds the desk at one height; do not animate leg extension or change the section count.
CONTROLLER LOCATION:
The one control strip is BUILT INTO the white FRONT FASCIA on the seated worker's RIGHT. It is not a hanging keypad under the desk and it is not mounted on a short end. Preserve its button and port positions; no duplicate controller.
ORIENTATION: FRONT means the long working edge nearest the seated woman; BACK means the opposite edge. RIGHT always means her anatomical right when she sits facing the work surface, never the camera's right. The keypad stays fixed at that physical right-front working position across cuts. Keep cameras on the worker-facing side of the desk; no camera crossing behind the back edge and no horizontal mirroring. If a reverse view is ever used, her physical right may appear on screen-left; do not relocate the controller to compensate.
CONTINUITY:
In person shots ONLY: the same adult woman, about 30, brown hair in a low ponytail, cream sweater, charcoal trousers. Empty shots have zero people or body parts. One-hand close-ups show only her right hand and its connected wrist/forearm. Keep the same room, props and light direction across hard cuts.
One bright German home office. The same woman, one suitable erasable glass marker and one small cloth. Keep the glass clear enough to see its continuous surface. All writing is a simple mark, not AI-generated words.
COMPANION CHAIR — @image2:
Use only Furniwell high-back office chair, SKU G-OCNC23-0240-2, variant 44820467712266, grey mesh with its original light frame, padded seat and five-spoke base. Chair reference: https://cdn.shopify.com/s/files/1/0580/4615/2882/files/0240-Grey.jpg?v=1698643212
Chair product: https://furniwell.de/products/ergonomischer-burostuhl-mit-verstellbarer-hoher-rucken?variant=44820467712266
Actually upload this chair photograph as @image2. Preserve its separate mesh headrest, upper mesh back, separate lower lumbar support, original arms, seat, five-spoke base and five casters. Never substitute a headrest-free generic white chair or gaming chair. Keep the same chair through every shot. Desk @image1 and chair @image2 are independent shape references. The chair stays grounded when the desk rises. This chair is sold separately; do not imply a free chair or desk-and-chair bundle.
HUMAN / CONTACT GEOMETRY: establish physical staging before motion. The same adult appears ONLY in shots explicitly marked as a person shot. Empty shots do not inherit body parts from the previous shot. Start each clip from its own approved still and join clips with HARD CUTS. Never combine sitting down, standing up, turning, operating controls and lifting into one continuous action. Lock the camera for human-contact shots. No human is present during desk motion. Camera-only shots have no hand or furniture motion. Body, clothing, desktop and chair are separate opaque solids: resolve occlusion by real depth, never transparency, melting or disappearance.

EDITING: HARD CUTS between already-established poses. Never animate sitting down, rising from the chair, turning across the desk, or a full sit-to-stand lift.

SHOT 1, 0-3s: @image1 @image2
SHOT CAST AND SPATIAL LOCK:
CAST: ZERO people, ZERO hands and ZERO feet. The chair is fully empty; no trouser legs, shoes or human silhouette beneath it. Cut directly to this approved empty start frame; never dissolve a person away within the clip.
Keep the complete product and floor feet readable. A very small straight push-in only; no orbit or perspective switch.
START: The exact product and the same specified chair are already staged. Full product, empty scene, furniture and props still.
ACTION: Only the camera makes a tiny straight push-in; product, chair and props remain still.
END: The same complete product and empty chair; room for an editor-added CTA.

SHOT 2, 3-6s: @image1 @image2
SHOT CAST AND SPATIAL LOCK:
CAST: only ONE right hand belonging to the same adult, continuously connected to one wrist and forearm entering from the worker-side edge of the frame. No second hand, extra forearm, face or torso in this crop. The left hand stays on the lap, entirely outside the crop. The right hand has five fingers. Keep the start-frame grip and perform only the specified small local action; palm, wrist and forearm stay connected with unchanged lengths and no regripping. No hand emerges through the desktop, chair or keypad. If contact is occluded, repair the start-frame camera position instead of inventing another hand.
Locked contextual close-up showing the real component, its mounting edge/surface and contact point. No push-in, orbit or extreme wide angle.
START: Continuous glass stays still; original drawer closed. One right hand already holds a suitable erasable glass marker with tip at the start contact point. Five fingers connect to wrist and forearm.
ACTION: Keep the same grip; move only the marker tip to draw one tiny check mark. Camera, glass and drawer stay still.
END: Same one right hand and marker, one small check mark; no extra fingers or glass seams.

SHOT 3, 6-9s: @image1 @image2
SHOT CAST AND SPATIAL LOCK:
CAST: ZERO people, ZERO hands and ZERO feet. The chair is fully empty; no trouser legs, shoes or human silhouette beneath it. Cut directly to this approved empty start frame; never dissolve a person away within the clip.
Keep the target detail and its surface or mounting context readable with a tiny straight push-in. Do not force a full-product view into this detail crop; no orbit.
START: At a HARD CUT, the one original drawer is already slightly open and the same marker is already inside; the same small check mark remains on the glass. Preserve the original front and runners.
ACTION: Tiny camera push to inspect the original drawer only: no placing the pen, pulling the drawer or hands.
END: Product, props and empty chair remain intact; no body, hands or feet enter.

SHOT 4, 9-12s: @image1 @image2
SHOT CAST AND SPATIAL LOCK:
CAST: only ONE right hand belonging to the same adult, continuously connected to one wrist and forearm entering from the worker-side edge of the frame. No second hand, extra forearm, face or torso in this crop. The left hand stays on the lap, entirely outside the crop. The right hand has five fingers. Keep the start-frame grip and perform only the specified small local action; palm, wrist and forearm stay connected with unchanged lengths and no regripping. No hand emerges through the desktop, chair or keypad. If contact is occluded, repair the start-frame camera position instead of inventing another hand.
Locked contextual close-up showing the real component, its mounting edge/surface and contact point. No push-in, orbit or extreme wide angle.
START: At a HARD CUT the original drawer is already closed. One right hand already holds a small cloth contacting one edge of the check mark; only that connected hand, wrist and forearm are visible.
ACTION: Keep the same grip and make one short local wipe only. No arm extension or change to glass, edge or controls. Camera locked.
END: The small mark is wiped away; still one original hand, unchanged desk and one drawer.

SHOT 5, 12-15s: @image1 @image2
SHOT CAST AND SPATIAL LOCK:
CAST: ZERO people, ZERO hands and ZERO feet. The chair is fully empty; no trouser legs, shoes or human silhouette beneath it. Cut directly to this approved empty start frame; never dissolve a person away within the clip.
Keep the complete product and floor feet readable. A very small straight push-in only; no orbit or perspective switch.
START: The exact product and the same specified chair are already staged. Full product, empty scene, furniture and props still.
ACTION: Only the camera makes a tiny straight push-in; product, chair and props remain still.
END: The same complete product and empty chair; room for an editor-added CTA.

START-FRAME AND CLIP ACCEPTANCE: before animation, check actor/hand count, shoulder-elbow-wrist continuity, pelvis supported by seat, chair back behind the person, and clearance to desktop and armrests. Hand details contain only one right hand; empty shots have no leftover legs or feet. Reject an invalid start frame before animation; do not ask the video model to repair it. Inspect beginning, middle of action and end of each clip. Extra hands, detached torso, intersections or disappearing body mean reject the whole clip and regenerate with less motion or retain the approved still. Blurring, fading or cropping the defect is not a repair. Prompts reduce risk but do not guarantee every generated frame.

HARD FAILURES: wrong SKU, mirrored scene, controller on user-left or a short end, second controller, ordinary columns with wider lower tubes, changed stage count, floating feet, bending/tilting/elastic desktop, extra drawer, extra leg, disappearing cable, unsupported accessory. No generated captions, voice-over, music, promo badge or brand lettering. Add German subtitles and branding in editing. If geometry cannot be kept, reduce the action or retain the approved still; do not redesign the product.
```

## 镜头 1 · 0–3 秒
后期德语字幕：Deine To-dos direkt auf dem Tisch.
### 首帧提示词
```text
@image1 @image2

Create ONE photorealistic 9:16 still image, not a storyboard or collage. The attached @image1 is the exact official desk photograph and the only desk-shape reference; @image2 independently locks the companion chair. Preserve the furniture; change only the human staging and room described below.

Production recipe FV-04, shot 1 START FRAME.

PRODUCT IDENTITY — highest priority:
Furniwell G2 white glass desk, SKU G-HAD24-0430-142WT-2, variant 45781441347850, 140 x 70 cm. ONE continuous glass desktop, its original white front fascia, exactly ONE original central pull-out drawer with its real runners, two white columns and two original white floor feet. The ORIGINAL control strip and USB ports are INTEGRATED INTO the front fascia on the seated worker's RIGHT. Copy the exact visible layout in @image1. Do NOT add a separate hanging black Economy keypad. No desktop seams, wooden replacement top, second drawer, cabinet or wheel.
COLUMN ASSEMBLY:
INVERTED TWO-STAGE COLUMNS: the wider UPPER outer sleeve meets the under-desk frame; the narrower LOWER inner section meets the floor foot. Thick above, slim below, matching @image1. Keep that orientation in every frame. This writing-and-drawer recipe holds the desk at one height; do not animate leg extension or change the section count.
CONTROLLER LOCATION:
The one control strip is BUILT INTO the white FRONT FASCIA on the seated worker's RIGHT. It is not a hanging keypad under the desk and it is not mounted on a short end. Preserve its button and port positions; no duplicate controller.
ORIENTATION: FRONT means the long working edge nearest the seated woman; BACK means the opposite edge. RIGHT always means her anatomical right when she sits facing the work surface, never the camera's right. The keypad stays fixed at that physical right-front working position across cuts. Keep cameras on the worker-facing side of the desk; no camera crossing behind the back edge and no horizontal mirroring. If a reverse view is ever used, her physical right may appear on screen-left; do not relocate the controller to compensate.
CONTINUITY:
In person shots ONLY: the same adult woman, about 30, brown hair in a low ponytail, cream sweater, charcoal trousers. Empty shots have zero people or body parts. One-hand close-ups show only her right hand and its connected wrist/forearm. Keep the same room, props and light direction across hard cuts.
One bright German home office. The same woman, one suitable erasable glass marker and one small cloth. Keep the glass clear enough to see its continuous surface. All writing is a simple mark, not AI-generated words.
COMPANION CHAIR — @image2:
Use only Furniwell high-back office chair, SKU G-OCNC23-0240-2, variant 44820467712266, grey mesh with its original light frame, padded seat and five-spoke base. Chair reference: https://cdn.shopify.com/s/files/1/0580/4615/2882/files/0240-Grey.jpg?v=1698643212
Chair product: https://furniwell.de/products/ergonomischer-burostuhl-mit-verstellbarer-hoher-rucken?variant=44820467712266
Actually upload this chair photograph as @image2. Preserve its separate mesh headrest, upper mesh back, separate lower lumbar support, original arms, seat, five-spoke base and five casters. Never substitute a headrest-free generic white chair or gaming chair. Keep the same chair through every shot. Desk @image1 and chair @image2 are independent shape references. The chair stays grounded when the desk rises. This chair is sold separately; do not imply a free chair or desk-and-chair bundle.
HUMAN / CONTACT GEOMETRY: establish physical staging before motion. The same adult appears ONLY in shots explicitly marked as a person shot. Empty shots do not inherit body parts from the previous shot. Start each clip from its own approved still and join clips with HARD CUTS. Never combine sitting down, standing up, turning, operating controls and lifting into one continuous action. Lock the camera for human-contact shots. No human is present during desk motion. Camera-only shots have no hand or furniture motion. Body, clothing, desktop and chair are separate opaque solids: resolve occlusion by real depth, never transparency, melting or disappearance.

SHOT CAST AND SPATIAL LOCK:
CAST: ZERO people, ZERO hands and ZERO feet. The chair is fully empty; no trouser legs, shoes or human silhouette beneath it. Cut directly to this approved empty start frame; never dissolve a person away within the clip.
Keep the complete product and floor feet readable. A very small straight push-in only; no orbit or perspective switch.

THIS SHOT START FRAME:

The exact product and the same specified chair are already staged. Full product, empty scene, furniture and props still.

Freeze this single start pose; do not include the action or end state. No motion trail, duplicate pose or simultaneous before/after states. Reject a faulty anatomical start frame before video generation.

START-FRAME AND CLIP ACCEPTANCE: before animation, check actor/hand count, shoulder-elbow-wrist continuity, pelvis supported by seat, chair back behind the person, and clearance to desktop and armrests. Hand details contain only one right hand; empty shots have no leftover legs or feet. Reject an invalid start frame before animation; do not ask the video model to repair it. Inspect beginning, middle of action and end of each clip. Extra hands, detached torso, intersections or disappearing body mean reject the whole clip and regenerate with less motion or retain the approved still. Blurring, fading or cropping the defect is not a repair. Prompts reduce risk but do not guarantee every generated frame.

HARD FAILURES: wrong SKU, mirrored scene, controller on user-left or a short end, second controller, ordinary columns with wider lower tubes, changed stage count, floating feet, bending/tilting/elastic desktop, extra drawer, extra leg, disappearing cable, unsupported accessory. No generated captions, voice-over, music, promo badge or brand lettering. Add German subtitles and branding in editing. If geometry cannot be kept, reduce the action or retain the approved still; do not redesign the product.
```
### 单镜头 Grok 图生视频提示词
```text
@image1 @image2 @image3

Generate ONE 3-second vertical 9:16 image-to-video clip. In this separate clip task, @image1 is the official product identity reference; @image2 is the approved Furniwell chair photograph; @image3 is THIS SHOT'S already approved start frame. Begin exactly from @image3. Preserve its framing, pose, geometry, room, props and lighting. Do not create a different opening composition.

PRODUCT IDENTITY — highest priority:
Furniwell G2 white glass desk, SKU G-HAD24-0430-142WT-2, variant 45781441347850, 140 x 70 cm. ONE continuous glass desktop, its original white front fascia, exactly ONE original central pull-out drawer with its real runners, two white columns and two original white floor feet. The ORIGINAL control strip and USB ports are INTEGRATED INTO the front fascia on the seated worker's RIGHT. Copy the exact visible layout in @image1. Do NOT add a separate hanging black Economy keypad. No desktop seams, wooden replacement top, second drawer, cabinet or wheel.
COLUMN ASSEMBLY:
INVERTED TWO-STAGE COLUMNS: the wider UPPER outer sleeve meets the under-desk frame; the narrower LOWER inner section meets the floor foot. Thick above, slim below, matching @image1. Keep that orientation in every frame. This writing-and-drawer recipe holds the desk at one height; do not animate leg extension or change the section count.
CONTROLLER LOCATION:
The one control strip is BUILT INTO the white FRONT FASCIA on the seated worker's RIGHT. It is not a hanging keypad under the desk and it is not mounted on a short end. Preserve its button and port positions; no duplicate controller.
ORIENTATION: FRONT means the long working edge nearest the seated woman; BACK means the opposite edge. RIGHT always means her anatomical right when she sits facing the work surface, never the camera's right. The keypad stays fixed at that physical right-front working position across cuts. Keep cameras on the worker-facing side of the desk; no camera crossing behind the back edge and no horizontal mirroring. If a reverse view is ever used, her physical right may appear on screen-left; do not relocate the controller to compensate.
CONTINUITY:
In person shots ONLY: the same adult woman, about 30, brown hair in a low ponytail, cream sweater, charcoal trousers. Empty shots have zero people or body parts. One-hand close-ups show only her right hand and its connected wrist/forearm. Keep the same room, props and light direction across hard cuts.
One bright German home office. The same woman, one suitable erasable glass marker and one small cloth. Keep the glass clear enough to see its continuous surface. All writing is a simple mark, not AI-generated words.
COMPANION CHAIR — @image2:
Use only Furniwell high-back office chair, SKU G-OCNC23-0240-2, variant 44820467712266, grey mesh with its original light frame, padded seat and five-spoke base. Chair reference: https://cdn.shopify.com/s/files/1/0580/4615/2882/files/0240-Grey.jpg?v=1698643212
Chair product: https://furniwell.de/products/ergonomischer-burostuhl-mit-verstellbarer-hoher-rucken?variant=44820467712266
Actually upload this chair photograph as @image2. Preserve its separate mesh headrest, upper mesh back, separate lower lumbar support, original arms, seat, five-spoke base and five casters. Never substitute a headrest-free generic white chair or gaming chair. Keep the same chair through every shot. Desk @image1 and chair @image2 are independent shape references. The chair stays grounded when the desk rises. This chair is sold separately; do not imply a free chair or desk-and-chair bundle.
HUMAN / CONTACT GEOMETRY: establish physical staging before motion. The same adult appears ONLY in shots explicitly marked as a person shot. Empty shots do not inherit body parts from the previous shot. Start each clip from its own approved still and join clips with HARD CUTS. Never combine sitting down, standing up, turning, operating controls and lifting into one continuous action. Lock the camera for human-contact shots. No human is present during desk motion. Camera-only shots have no hand or furniture motion. Body, clothing, desktop and chair are separate opaque solids: resolve occlusion by real depth, never transparency, melting or disappearance.

SHOT CAST AND SPATIAL LOCK:
CAST: ZERO people, ZERO hands and ZERO feet. The chair is fully empty; no trouser legs, shoes or human silhouette beneath it. Cut directly to this approved empty start frame; never dissolve a person away within the clip.
Keep the complete product and floor feet readable. A very small straight push-in only; no orbit or perspective switch.

ONLY ACTION:

Only the camera makes a tiny straight push-in; product, chair and props remain still.

END STATE:

The same complete product and empty chair; room for an editor-added CTA.

No internal cut, orbit or unrequested action. Use ONLY the camera or body motion specified for this shot, never both. Preserve everything else.

START-FRAME AND CLIP ACCEPTANCE: before animation, check actor/hand count, shoulder-elbow-wrist continuity, pelvis supported by seat, chair back behind the person, and clearance to desktop and armrests. Hand details contain only one right hand; empty shots have no leftover legs or feet. Reject an invalid start frame before animation; do not ask the video model to repair it. Inspect beginning, middle of action and end of each clip. Extra hands, detached torso, intersections or disappearing body mean reject the whole clip and regenerate with less motion or retain the approved still. Blurring, fading or cropping the defect is not a repair. Prompts reduce risk but do not guarantee every generated frame.

HARD FAILURES: wrong SKU, mirrored scene, controller on user-left or a short end, second controller, ordinary columns with wider lower tubes, changed stage count, floating feet, bending/tilting/elastic desktop, extra drawer, extra leg, disappearing cable, unsupported accessory. No generated captions, voice-over, music, promo badge or brand lettering. Add German subtitles and branding in editing. If geometry cannot be kept, reduce the action or retain the approved still; do not redesign the product.
```

## 镜头 2 · 3–6 秒
后期德语字幕：Aufschreiben.
### 首帧提示词
```text
@image1 @image2

Create ONE photorealistic 9:16 still image, not a storyboard or collage. The attached @image1 is the exact official desk photograph and the only desk-shape reference; @image2 independently locks the companion chair. Preserve the furniture; change only the human staging and room described below.

Production recipe FV-04, shot 2 START FRAME.

PRODUCT IDENTITY — highest priority:
Furniwell G2 white glass desk, SKU G-HAD24-0430-142WT-2, variant 45781441347850, 140 x 70 cm. ONE continuous glass desktop, its original white front fascia, exactly ONE original central pull-out drawer with its real runners, two white columns and two original white floor feet. The ORIGINAL control strip and USB ports are INTEGRATED INTO the front fascia on the seated worker's RIGHT. Copy the exact visible layout in @image1. Do NOT add a separate hanging black Economy keypad. No desktop seams, wooden replacement top, second drawer, cabinet or wheel.
COLUMN ASSEMBLY:
INVERTED TWO-STAGE COLUMNS: the wider UPPER outer sleeve meets the under-desk frame; the narrower LOWER inner section meets the floor foot. Thick above, slim below, matching @image1. Keep that orientation in every frame. This writing-and-drawer recipe holds the desk at one height; do not animate leg extension or change the section count.
CONTROLLER LOCATION:
The one control strip is BUILT INTO the white FRONT FASCIA on the seated worker's RIGHT. It is not a hanging keypad under the desk and it is not mounted on a short end. Preserve its button and port positions; no duplicate controller.
ORIENTATION: FRONT means the long working edge nearest the seated woman; BACK means the opposite edge. RIGHT always means her anatomical right when she sits facing the work surface, never the camera's right. The keypad stays fixed at that physical right-front working position across cuts. Keep cameras on the worker-facing side of the desk; no camera crossing behind the back edge and no horizontal mirroring. If a reverse view is ever used, her physical right may appear on screen-left; do not relocate the controller to compensate.
CONTINUITY:
In person shots ONLY: the same adult woman, about 30, brown hair in a low ponytail, cream sweater, charcoal trousers. Empty shots have zero people or body parts. One-hand close-ups show only her right hand and its connected wrist/forearm. Keep the same room, props and light direction across hard cuts.
One bright German home office. The same woman, one suitable erasable glass marker and one small cloth. Keep the glass clear enough to see its continuous surface. All writing is a simple mark, not AI-generated words.
COMPANION CHAIR — @image2:
Use only Furniwell high-back office chair, SKU G-OCNC23-0240-2, variant 44820467712266, grey mesh with its original light frame, padded seat and five-spoke base. Chair reference: https://cdn.shopify.com/s/files/1/0580/4615/2882/files/0240-Grey.jpg?v=1698643212
Chair product: https://furniwell.de/products/ergonomischer-burostuhl-mit-verstellbarer-hoher-rucken?variant=44820467712266
Actually upload this chair photograph as @image2. Preserve its separate mesh headrest, upper mesh back, separate lower lumbar support, original arms, seat, five-spoke base and five casters. Never substitute a headrest-free generic white chair or gaming chair. Keep the same chair through every shot. Desk @image1 and chair @image2 are independent shape references. The chair stays grounded when the desk rises. This chair is sold separately; do not imply a free chair or desk-and-chair bundle.
HUMAN / CONTACT GEOMETRY: establish physical staging before motion. The same adult appears ONLY in shots explicitly marked as a person shot. Empty shots do not inherit body parts from the previous shot. Start each clip from its own approved still and join clips with HARD CUTS. Never combine sitting down, standing up, turning, operating controls and lifting into one continuous action. Lock the camera for human-contact shots. No human is present during desk motion. Camera-only shots have no hand or furniture motion. Body, clothing, desktop and chair are separate opaque solids: resolve occlusion by real depth, never transparency, melting or disappearance.

SHOT CAST AND SPATIAL LOCK:
CAST: only ONE right hand belonging to the same adult, continuously connected to one wrist and forearm entering from the worker-side edge of the frame. No second hand, extra forearm, face or torso in this crop. The left hand stays on the lap, entirely outside the crop. The right hand has five fingers. Keep the start-frame grip and perform only the specified small local action; palm, wrist and forearm stay connected with unchanged lengths and no regripping. No hand emerges through the desktop, chair or keypad. If contact is occluded, repair the start-frame camera position instead of inventing another hand.
Locked contextual close-up showing the real component, its mounting edge/surface and contact point. No push-in, orbit or extreme wide angle.

THIS SHOT START FRAME:

Continuous glass stays still; original drawer closed. One right hand already holds a suitable erasable glass marker with tip at the start contact point. Five fingers connect to wrist and forearm.

Freeze this single start pose; do not include the action or end state. No motion trail, duplicate pose or simultaneous before/after states. Reject a faulty anatomical start frame before video generation.

START-FRAME AND CLIP ACCEPTANCE: before animation, check actor/hand count, shoulder-elbow-wrist continuity, pelvis supported by seat, chair back behind the person, and clearance to desktop and armrests. Hand details contain only one right hand; empty shots have no leftover legs or feet. Reject an invalid start frame before animation; do not ask the video model to repair it. Inspect beginning, middle of action and end of each clip. Extra hands, detached torso, intersections or disappearing body mean reject the whole clip and regenerate with less motion or retain the approved still. Blurring, fading or cropping the defect is not a repair. Prompts reduce risk but do not guarantee every generated frame.

HARD FAILURES: wrong SKU, mirrored scene, controller on user-left or a short end, second controller, ordinary columns with wider lower tubes, changed stage count, floating feet, bending/tilting/elastic desktop, extra drawer, extra leg, disappearing cable, unsupported accessory. No generated captions, voice-over, music, promo badge or brand lettering. Add German subtitles and branding in editing. If geometry cannot be kept, reduce the action or retain the approved still; do not redesign the product.
```
### 单镜头 Grok 图生视频提示词
```text
@image1 @image2 @image3

Generate ONE 3-second vertical 9:16 image-to-video clip. In this separate clip task, @image1 is the official product identity reference; @image2 is the approved Furniwell chair photograph; @image3 is THIS SHOT'S already approved start frame. Begin exactly from @image3. Preserve its framing, pose, geometry, room, props and lighting. Do not create a different opening composition.

PRODUCT IDENTITY — highest priority:
Furniwell G2 white glass desk, SKU G-HAD24-0430-142WT-2, variant 45781441347850, 140 x 70 cm. ONE continuous glass desktop, its original white front fascia, exactly ONE original central pull-out drawer with its real runners, two white columns and two original white floor feet. The ORIGINAL control strip and USB ports are INTEGRATED INTO the front fascia on the seated worker's RIGHT. Copy the exact visible layout in @image1. Do NOT add a separate hanging black Economy keypad. No desktop seams, wooden replacement top, second drawer, cabinet or wheel.
COLUMN ASSEMBLY:
INVERTED TWO-STAGE COLUMNS: the wider UPPER outer sleeve meets the under-desk frame; the narrower LOWER inner section meets the floor foot. Thick above, slim below, matching @image1. Keep that orientation in every frame. This writing-and-drawer recipe holds the desk at one height; do not animate leg extension or change the section count.
CONTROLLER LOCATION:
The one control strip is BUILT INTO the white FRONT FASCIA on the seated worker's RIGHT. It is not a hanging keypad under the desk and it is not mounted on a short end. Preserve its button and port positions; no duplicate controller.
ORIENTATION: FRONT means the long working edge nearest the seated woman; BACK means the opposite edge. RIGHT always means her anatomical right when she sits facing the work surface, never the camera's right. The keypad stays fixed at that physical right-front working position across cuts. Keep cameras on the worker-facing side of the desk; no camera crossing behind the back edge and no horizontal mirroring. If a reverse view is ever used, her physical right may appear on screen-left; do not relocate the controller to compensate.
CONTINUITY:
In person shots ONLY: the same adult woman, about 30, brown hair in a low ponytail, cream sweater, charcoal trousers. Empty shots have zero people or body parts. One-hand close-ups show only her right hand and its connected wrist/forearm. Keep the same room, props and light direction across hard cuts.
One bright German home office. The same woman, one suitable erasable glass marker and one small cloth. Keep the glass clear enough to see its continuous surface. All writing is a simple mark, not AI-generated words.
COMPANION CHAIR — @image2:
Use only Furniwell high-back office chair, SKU G-OCNC23-0240-2, variant 44820467712266, grey mesh with its original light frame, padded seat and five-spoke base. Chair reference: https://cdn.shopify.com/s/files/1/0580/4615/2882/files/0240-Grey.jpg?v=1698643212
Chair product: https://furniwell.de/products/ergonomischer-burostuhl-mit-verstellbarer-hoher-rucken?variant=44820467712266
Actually upload this chair photograph as @image2. Preserve its separate mesh headrest, upper mesh back, separate lower lumbar support, original arms, seat, five-spoke base and five casters. Never substitute a headrest-free generic white chair or gaming chair. Keep the same chair through every shot. Desk @image1 and chair @image2 are independent shape references. The chair stays grounded when the desk rises. This chair is sold separately; do not imply a free chair or desk-and-chair bundle.
HUMAN / CONTACT GEOMETRY: establish physical staging before motion. The same adult appears ONLY in shots explicitly marked as a person shot. Empty shots do not inherit body parts from the previous shot. Start each clip from its own approved still and join clips with HARD CUTS. Never combine sitting down, standing up, turning, operating controls and lifting into one continuous action. Lock the camera for human-contact shots. No human is present during desk motion. Camera-only shots have no hand or furniture motion. Body, clothing, desktop and chair are separate opaque solids: resolve occlusion by real depth, never transparency, melting or disappearance.

SHOT CAST AND SPATIAL LOCK:
CAST: only ONE right hand belonging to the same adult, continuously connected to one wrist and forearm entering from the worker-side edge of the frame. No second hand, extra forearm, face or torso in this crop. The left hand stays on the lap, entirely outside the crop. The right hand has five fingers. Keep the start-frame grip and perform only the specified small local action; palm, wrist and forearm stay connected with unchanged lengths and no regripping. No hand emerges through the desktop, chair or keypad. If contact is occluded, repair the start-frame camera position instead of inventing another hand.
Locked contextual close-up showing the real component, its mounting edge/surface and contact point. No push-in, orbit or extreme wide angle.

ONLY ACTION:

Keep the same grip; move only the marker tip to draw one tiny check mark. Camera, glass and drawer stay still.

END STATE:

Same one right hand and marker, one small check mark; no extra fingers or glass seams.

No internal cut, orbit or unrequested action. Use ONLY the camera or body motion specified for this shot, never both. Preserve everything else.

START-FRAME AND CLIP ACCEPTANCE: before animation, check actor/hand count, shoulder-elbow-wrist continuity, pelvis supported by seat, chair back behind the person, and clearance to desktop and armrests. Hand details contain only one right hand; empty shots have no leftover legs or feet. Reject an invalid start frame before animation; do not ask the video model to repair it. Inspect beginning, middle of action and end of each clip. Extra hands, detached torso, intersections or disappearing body mean reject the whole clip and regenerate with less motion or retain the approved still. Blurring, fading or cropping the defect is not a repair. Prompts reduce risk but do not guarantee every generated frame.

HARD FAILURES: wrong SKU, mirrored scene, controller on user-left or a short end, second controller, ordinary columns with wider lower tubes, changed stage count, floating feet, bending/tilting/elastic desktop, extra drawer, extra leg, disappearing cable, unsupported accessory. No generated captions, voice-over, music, promo badge or brand lettering. Add German subtitles and branding in editing. If geometry cannot be kept, reduce the action or retain the approved still; do not redesign the product.
```

## 镜头 3 · 6–9 秒
后期德语字幕：Verstauen.
### 首帧提示词
```text
@image1 @image2

Create ONE photorealistic 9:16 still image, not a storyboard or collage. The attached @image1 is the exact official desk photograph and the only desk-shape reference; @image2 independently locks the companion chair. Preserve the furniture; change only the human staging and room described below.

Production recipe FV-04, shot 3 START FRAME.

PRODUCT IDENTITY — highest priority:
Furniwell G2 white glass desk, SKU G-HAD24-0430-142WT-2, variant 45781441347850, 140 x 70 cm. ONE continuous glass desktop, its original white front fascia, exactly ONE original central pull-out drawer with its real runners, two white columns and two original white floor feet. The ORIGINAL control strip and USB ports are INTEGRATED INTO the front fascia on the seated worker's RIGHT. Copy the exact visible layout in @image1. Do NOT add a separate hanging black Economy keypad. No desktop seams, wooden replacement top, second drawer, cabinet or wheel.
COLUMN ASSEMBLY:
INVERTED TWO-STAGE COLUMNS: the wider UPPER outer sleeve meets the under-desk frame; the narrower LOWER inner section meets the floor foot. Thick above, slim below, matching @image1. Keep that orientation in every frame. This writing-and-drawer recipe holds the desk at one height; do not animate leg extension or change the section count.
CONTROLLER LOCATION:
The one control strip is BUILT INTO the white FRONT FASCIA on the seated worker's RIGHT. It is not a hanging keypad under the desk and it is not mounted on a short end. Preserve its button and port positions; no duplicate controller.
ORIENTATION: FRONT means the long working edge nearest the seated woman; BACK means the opposite edge. RIGHT always means her anatomical right when she sits facing the work surface, never the camera's right. The keypad stays fixed at that physical right-front working position across cuts. Keep cameras on the worker-facing side of the desk; no camera crossing behind the back edge and no horizontal mirroring. If a reverse view is ever used, her physical right may appear on screen-left; do not relocate the controller to compensate.
CONTINUITY:
In person shots ONLY: the same adult woman, about 30, brown hair in a low ponytail, cream sweater, charcoal trousers. Empty shots have zero people or body parts. One-hand close-ups show only her right hand and its connected wrist/forearm. Keep the same room, props and light direction across hard cuts.
One bright German home office. The same woman, one suitable erasable glass marker and one small cloth. Keep the glass clear enough to see its continuous surface. All writing is a simple mark, not AI-generated words.
COMPANION CHAIR — @image2:
Use only Furniwell high-back office chair, SKU G-OCNC23-0240-2, variant 44820467712266, grey mesh with its original light frame, padded seat and five-spoke base. Chair reference: https://cdn.shopify.com/s/files/1/0580/4615/2882/files/0240-Grey.jpg?v=1698643212
Chair product: https://furniwell.de/products/ergonomischer-burostuhl-mit-verstellbarer-hoher-rucken?variant=44820467712266
Actually upload this chair photograph as @image2. Preserve its separate mesh headrest, upper mesh back, separate lower lumbar support, original arms, seat, five-spoke base and five casters. Never substitute a headrest-free generic white chair or gaming chair. Keep the same chair through every shot. Desk @image1 and chair @image2 are independent shape references. The chair stays grounded when the desk rises. This chair is sold separately; do not imply a free chair or desk-and-chair bundle.
HUMAN / CONTACT GEOMETRY: establish physical staging before motion. The same adult appears ONLY in shots explicitly marked as a person shot. Empty shots do not inherit body parts from the previous shot. Start each clip from its own approved still and join clips with HARD CUTS. Never combine sitting down, standing up, turning, operating controls and lifting into one continuous action. Lock the camera for human-contact shots. No human is present during desk motion. Camera-only shots have no hand or furniture motion. Body, clothing, desktop and chair are separate opaque solids: resolve occlusion by real depth, never transparency, melting or disappearance.

SHOT CAST AND SPATIAL LOCK:
CAST: ZERO people, ZERO hands and ZERO feet. The chair is fully empty; no trouser legs, shoes or human silhouette beneath it. Cut directly to this approved empty start frame; never dissolve a person away within the clip.
Keep the target detail and its surface or mounting context readable with a tiny straight push-in. Do not force a full-product view into this detail crop; no orbit.

THIS SHOT START FRAME:

At a HARD CUT, the one original drawer is already slightly open and the same marker is already inside; the same small check mark remains on the glass. Preserve the original front and runners.

Freeze this single start pose; do not include the action or end state. No motion trail, duplicate pose or simultaneous before/after states. Reject a faulty anatomical start frame before video generation.

START-FRAME AND CLIP ACCEPTANCE: before animation, check actor/hand count, shoulder-elbow-wrist continuity, pelvis supported by seat, chair back behind the person, and clearance to desktop and armrests. Hand details contain only one right hand; empty shots have no leftover legs or feet. Reject an invalid start frame before animation; do not ask the video model to repair it. Inspect beginning, middle of action and end of each clip. Extra hands, detached torso, intersections or disappearing body mean reject the whole clip and regenerate with less motion or retain the approved still. Blurring, fading or cropping the defect is not a repair. Prompts reduce risk but do not guarantee every generated frame.

HARD FAILURES: wrong SKU, mirrored scene, controller on user-left or a short end, second controller, ordinary columns with wider lower tubes, changed stage count, floating feet, bending/tilting/elastic desktop, extra drawer, extra leg, disappearing cable, unsupported accessory. No generated captions, voice-over, music, promo badge or brand lettering. Add German subtitles and branding in editing. If geometry cannot be kept, reduce the action or retain the approved still; do not redesign the product.
```
### 单镜头 Grok 图生视频提示词
```text
@image1 @image2 @image3

Generate ONE 3-second vertical 9:16 image-to-video clip. In this separate clip task, @image1 is the official product identity reference; @image2 is the approved Furniwell chair photograph; @image3 is THIS SHOT'S already approved start frame. Begin exactly from @image3. Preserve its framing, pose, geometry, room, props and lighting. Do not create a different opening composition.

PRODUCT IDENTITY — highest priority:
Furniwell G2 white glass desk, SKU G-HAD24-0430-142WT-2, variant 45781441347850, 140 x 70 cm. ONE continuous glass desktop, its original white front fascia, exactly ONE original central pull-out drawer with its real runners, two white columns and two original white floor feet. The ORIGINAL control strip and USB ports are INTEGRATED INTO the front fascia on the seated worker's RIGHT. Copy the exact visible layout in @image1. Do NOT add a separate hanging black Economy keypad. No desktop seams, wooden replacement top, second drawer, cabinet or wheel.
COLUMN ASSEMBLY:
INVERTED TWO-STAGE COLUMNS: the wider UPPER outer sleeve meets the under-desk frame; the narrower LOWER inner section meets the floor foot. Thick above, slim below, matching @image1. Keep that orientation in every frame. This writing-and-drawer recipe holds the desk at one height; do not animate leg extension or change the section count.
CONTROLLER LOCATION:
The one control strip is BUILT INTO the white FRONT FASCIA on the seated worker's RIGHT. It is not a hanging keypad under the desk and it is not mounted on a short end. Preserve its button and port positions; no duplicate controller.
ORIENTATION: FRONT means the long working edge nearest the seated woman; BACK means the opposite edge. RIGHT always means her anatomical right when she sits facing the work surface, never the camera's right. The keypad stays fixed at that physical right-front working position across cuts. Keep cameras on the worker-facing side of the desk; no camera crossing behind the back edge and no horizontal mirroring. If a reverse view is ever used, her physical right may appear on screen-left; do not relocate the controller to compensate.
CONTINUITY:
In person shots ONLY: the same adult woman, about 30, brown hair in a low ponytail, cream sweater, charcoal trousers. Empty shots have zero people or body parts. One-hand close-ups show only her right hand and its connected wrist/forearm. Keep the same room, props and light direction across hard cuts.
One bright German home office. The same woman, one suitable erasable glass marker and one small cloth. Keep the glass clear enough to see its continuous surface. All writing is a simple mark, not AI-generated words.
COMPANION CHAIR — @image2:
Use only Furniwell high-back office chair, SKU G-OCNC23-0240-2, variant 44820467712266, grey mesh with its original light frame, padded seat and five-spoke base. Chair reference: https://cdn.shopify.com/s/files/1/0580/4615/2882/files/0240-Grey.jpg?v=1698643212
Chair product: https://furniwell.de/products/ergonomischer-burostuhl-mit-verstellbarer-hoher-rucken?variant=44820467712266
Actually upload this chair photograph as @image2. Preserve its separate mesh headrest, upper mesh back, separate lower lumbar support, original arms, seat, five-spoke base and five casters. Never substitute a headrest-free generic white chair or gaming chair. Keep the same chair through every shot. Desk @image1 and chair @image2 are independent shape references. The chair stays grounded when the desk rises. This chair is sold separately; do not imply a free chair or desk-and-chair bundle.
HUMAN / CONTACT GEOMETRY: establish physical staging before motion. The same adult appears ONLY in shots explicitly marked as a person shot. Empty shots do not inherit body parts from the previous shot. Start each clip from its own approved still and join clips with HARD CUTS. Never combine sitting down, standing up, turning, operating controls and lifting into one continuous action. Lock the camera for human-contact shots. No human is present during desk motion. Camera-only shots have no hand or furniture motion. Body, clothing, desktop and chair are separate opaque solids: resolve occlusion by real depth, never transparency, melting or disappearance.

SHOT CAST AND SPATIAL LOCK:
CAST: ZERO people, ZERO hands and ZERO feet. The chair is fully empty; no trouser legs, shoes or human silhouette beneath it. Cut directly to this approved empty start frame; never dissolve a person away within the clip.
Keep the target detail and its surface or mounting context readable with a tiny straight push-in. Do not force a full-product view into this detail crop; no orbit.

ONLY ACTION:

Tiny camera push to inspect the original drawer only: no placing the pen, pulling the drawer or hands.

END STATE:

Product, props and empty chair remain intact; no body, hands or feet enter.

No internal cut, orbit or unrequested action. Use ONLY the camera or body motion specified for this shot, never both. Preserve everything else.

START-FRAME AND CLIP ACCEPTANCE: before animation, check actor/hand count, shoulder-elbow-wrist continuity, pelvis supported by seat, chair back behind the person, and clearance to desktop and armrests. Hand details contain only one right hand; empty shots have no leftover legs or feet. Reject an invalid start frame before animation; do not ask the video model to repair it. Inspect beginning, middle of action and end of each clip. Extra hands, detached torso, intersections or disappearing body mean reject the whole clip and regenerate with less motion or retain the approved still. Blurring, fading or cropping the defect is not a repair. Prompts reduce risk but do not guarantee every generated frame.

HARD FAILURES: wrong SKU, mirrored scene, controller on user-left or a short end, second controller, ordinary columns with wider lower tubes, changed stage count, floating feet, bending/tilting/elastic desktop, extra drawer, extra leg, disappearing cable, unsupported accessory. No generated captions, voice-over, music, promo badge or brand lettering. Add German subtitles and branding in editing. If geometry cannot be kept, reduce the action or retain the approved still; do not redesign the product.
```

## 镜头 4 · 9–12 秒
后期德语字幕：Wegwischen.
### 首帧提示词
```text
@image1 @image2

Create ONE photorealistic 9:16 still image, not a storyboard or collage. The attached @image1 is the exact official desk photograph and the only desk-shape reference; @image2 independently locks the companion chair. Preserve the furniture; change only the human staging and room described below.

Production recipe FV-04, shot 4 START FRAME.

PRODUCT IDENTITY — highest priority:
Furniwell G2 white glass desk, SKU G-HAD24-0430-142WT-2, variant 45781441347850, 140 x 70 cm. ONE continuous glass desktop, its original white front fascia, exactly ONE original central pull-out drawer with its real runners, two white columns and two original white floor feet. The ORIGINAL control strip and USB ports are INTEGRATED INTO the front fascia on the seated worker's RIGHT. Copy the exact visible layout in @image1. Do NOT add a separate hanging black Economy keypad. No desktop seams, wooden replacement top, second drawer, cabinet or wheel.
COLUMN ASSEMBLY:
INVERTED TWO-STAGE COLUMNS: the wider UPPER outer sleeve meets the under-desk frame; the narrower LOWER inner section meets the floor foot. Thick above, slim below, matching @image1. Keep that orientation in every frame. This writing-and-drawer recipe holds the desk at one height; do not animate leg extension or change the section count.
CONTROLLER LOCATION:
The one control strip is BUILT INTO the white FRONT FASCIA on the seated worker's RIGHT. It is not a hanging keypad under the desk and it is not mounted on a short end. Preserve its button and port positions; no duplicate controller.
ORIENTATION: FRONT means the long working edge nearest the seated woman; BACK means the opposite edge. RIGHT always means her anatomical right when she sits facing the work surface, never the camera's right. The keypad stays fixed at that physical right-front working position across cuts. Keep cameras on the worker-facing side of the desk; no camera crossing behind the back edge and no horizontal mirroring. If a reverse view is ever used, her physical right may appear on screen-left; do not relocate the controller to compensate.
CONTINUITY:
In person shots ONLY: the same adult woman, about 30, brown hair in a low ponytail, cream sweater, charcoal trousers. Empty shots have zero people or body parts. One-hand close-ups show only her right hand and its connected wrist/forearm. Keep the same room, props and light direction across hard cuts.
One bright German home office. The same woman, one suitable erasable glass marker and one small cloth. Keep the glass clear enough to see its continuous surface. All writing is a simple mark, not AI-generated words.
COMPANION CHAIR — @image2:
Use only Furniwell high-back office chair, SKU G-OCNC23-0240-2, variant 44820467712266, grey mesh with its original light frame, padded seat and five-spoke base. Chair reference: https://cdn.shopify.com/s/files/1/0580/4615/2882/files/0240-Grey.jpg?v=1698643212
Chair product: https://furniwell.de/products/ergonomischer-burostuhl-mit-verstellbarer-hoher-rucken?variant=44820467712266
Actually upload this chair photograph as @image2. Preserve its separate mesh headrest, upper mesh back, separate lower lumbar support, original arms, seat, five-spoke base and five casters. Never substitute a headrest-free generic white chair or gaming chair. Keep the same chair through every shot. Desk @image1 and chair @image2 are independent shape references. The chair stays grounded when the desk rises. This chair is sold separately; do not imply a free chair or desk-and-chair bundle.
HUMAN / CONTACT GEOMETRY: establish physical staging before motion. The same adult appears ONLY in shots explicitly marked as a person shot. Empty shots do not inherit body parts from the previous shot. Start each clip from its own approved still and join clips with HARD CUTS. Never combine sitting down, standing up, turning, operating controls and lifting into one continuous action. Lock the camera for human-contact shots. No human is present during desk motion. Camera-only shots have no hand or furniture motion. Body, clothing, desktop and chair are separate opaque solids: resolve occlusion by real depth, never transparency, melting or disappearance.

SHOT CAST AND SPATIAL LOCK:
CAST: only ONE right hand belonging to the same adult, continuously connected to one wrist and forearm entering from the worker-side edge of the frame. No second hand, extra forearm, face or torso in this crop. The left hand stays on the lap, entirely outside the crop. The right hand has five fingers. Keep the start-frame grip and perform only the specified small local action; palm, wrist and forearm stay connected with unchanged lengths and no regripping. No hand emerges through the desktop, chair or keypad. If contact is occluded, repair the start-frame camera position instead of inventing another hand.
Locked contextual close-up showing the real component, its mounting edge/surface and contact point. No push-in, orbit or extreme wide angle.

THIS SHOT START FRAME:

At a HARD CUT the original drawer is already closed. One right hand already holds a small cloth contacting one edge of the check mark; only that connected hand, wrist and forearm are visible.

Freeze this single start pose; do not include the action or end state. No motion trail, duplicate pose or simultaneous before/after states. Reject a faulty anatomical start frame before video generation.

START-FRAME AND CLIP ACCEPTANCE: before animation, check actor/hand count, shoulder-elbow-wrist continuity, pelvis supported by seat, chair back behind the person, and clearance to desktop and armrests. Hand details contain only one right hand; empty shots have no leftover legs or feet. Reject an invalid start frame before animation; do not ask the video model to repair it. Inspect beginning, middle of action and end of each clip. Extra hands, detached torso, intersections or disappearing body mean reject the whole clip and regenerate with less motion or retain the approved still. Blurring, fading or cropping the defect is not a repair. Prompts reduce risk but do not guarantee every generated frame.

HARD FAILURES: wrong SKU, mirrored scene, controller on user-left or a short end, second controller, ordinary columns with wider lower tubes, changed stage count, floating feet, bending/tilting/elastic desktop, extra drawer, extra leg, disappearing cable, unsupported accessory. No generated captions, voice-over, music, promo badge or brand lettering. Add German subtitles and branding in editing. If geometry cannot be kept, reduce the action or retain the approved still; do not redesign the product.
```
### 单镜头 Grok 图生视频提示词
```text
@image1 @image2 @image3

Generate ONE 3-second vertical 9:16 image-to-video clip. In this separate clip task, @image1 is the official product identity reference; @image2 is the approved Furniwell chair photograph; @image3 is THIS SHOT'S already approved start frame. Begin exactly from @image3. Preserve its framing, pose, geometry, room, props and lighting. Do not create a different opening composition.

PRODUCT IDENTITY — highest priority:
Furniwell G2 white glass desk, SKU G-HAD24-0430-142WT-2, variant 45781441347850, 140 x 70 cm. ONE continuous glass desktop, its original white front fascia, exactly ONE original central pull-out drawer with its real runners, two white columns and two original white floor feet. The ORIGINAL control strip and USB ports are INTEGRATED INTO the front fascia on the seated worker's RIGHT. Copy the exact visible layout in @image1. Do NOT add a separate hanging black Economy keypad. No desktop seams, wooden replacement top, second drawer, cabinet or wheel.
COLUMN ASSEMBLY:
INVERTED TWO-STAGE COLUMNS: the wider UPPER outer sleeve meets the under-desk frame; the narrower LOWER inner section meets the floor foot. Thick above, slim below, matching @image1. Keep that orientation in every frame. This writing-and-drawer recipe holds the desk at one height; do not animate leg extension or change the section count.
CONTROLLER LOCATION:
The one control strip is BUILT INTO the white FRONT FASCIA on the seated worker's RIGHT. It is not a hanging keypad under the desk and it is not mounted on a short end. Preserve its button and port positions; no duplicate controller.
ORIENTATION: FRONT means the long working edge nearest the seated woman; BACK means the opposite edge. RIGHT always means her anatomical right when she sits facing the work surface, never the camera's right. The keypad stays fixed at that physical right-front working position across cuts. Keep cameras on the worker-facing side of the desk; no camera crossing behind the back edge and no horizontal mirroring. If a reverse view is ever used, her physical right may appear on screen-left; do not relocate the controller to compensate.
CONTINUITY:
In person shots ONLY: the same adult woman, about 30, brown hair in a low ponytail, cream sweater, charcoal trousers. Empty shots have zero people or body parts. One-hand close-ups show only her right hand and its connected wrist/forearm. Keep the same room, props and light direction across hard cuts.
One bright German home office. The same woman, one suitable erasable glass marker and one small cloth. Keep the glass clear enough to see its continuous surface. All writing is a simple mark, not AI-generated words.
COMPANION CHAIR — @image2:
Use only Furniwell high-back office chair, SKU G-OCNC23-0240-2, variant 44820467712266, grey mesh with its original light frame, padded seat and five-spoke base. Chair reference: https://cdn.shopify.com/s/files/1/0580/4615/2882/files/0240-Grey.jpg?v=1698643212
Chair product: https://furniwell.de/products/ergonomischer-burostuhl-mit-verstellbarer-hoher-rucken?variant=44820467712266
Actually upload this chair photograph as @image2. Preserve its separate mesh headrest, upper mesh back, separate lower lumbar support, original arms, seat, five-spoke base and five casters. Never substitute a headrest-free generic white chair or gaming chair. Keep the same chair through every shot. Desk @image1 and chair @image2 are independent shape references. The chair stays grounded when the desk rises. This chair is sold separately; do not imply a free chair or desk-and-chair bundle.
HUMAN / CONTACT GEOMETRY: establish physical staging before motion. The same adult appears ONLY in shots explicitly marked as a person shot. Empty shots do not inherit body parts from the previous shot. Start each clip from its own approved still and join clips with HARD CUTS. Never combine sitting down, standing up, turning, operating controls and lifting into one continuous action. Lock the camera for human-contact shots. No human is present during desk motion. Camera-only shots have no hand or furniture motion. Body, clothing, desktop and chair are separate opaque solids: resolve occlusion by real depth, never transparency, melting or disappearance.

SHOT CAST AND SPATIAL LOCK:
CAST: only ONE right hand belonging to the same adult, continuously connected to one wrist and forearm entering from the worker-side edge of the frame. No second hand, extra forearm, face or torso in this crop. The left hand stays on the lap, entirely outside the crop. The right hand has five fingers. Keep the start-frame grip and perform only the specified small local action; palm, wrist and forearm stay connected with unchanged lengths and no regripping. No hand emerges through the desktop, chair or keypad. If contact is occluded, repair the start-frame camera position instead of inventing another hand.
Locked contextual close-up showing the real component, its mounting edge/surface and contact point. No push-in, orbit or extreme wide angle.

ONLY ACTION:

Keep the same grip and make one short local wipe only. No arm extension or change to glass, edge or controls. Camera locked.

END STATE:

The small mark is wiped away; still one original hand, unchanged desk and one drawer.

No internal cut, orbit or unrequested action. Use ONLY the camera or body motion specified for this shot, never both. Preserve everything else.

START-FRAME AND CLIP ACCEPTANCE: before animation, check actor/hand count, shoulder-elbow-wrist continuity, pelvis supported by seat, chair back behind the person, and clearance to desktop and armrests. Hand details contain only one right hand; empty shots have no leftover legs or feet. Reject an invalid start frame before animation; do not ask the video model to repair it. Inspect beginning, middle of action and end of each clip. Extra hands, detached torso, intersections or disappearing body mean reject the whole clip and regenerate with less motion or retain the approved still. Blurring, fading or cropping the defect is not a repair. Prompts reduce risk but do not guarantee every generated frame.

HARD FAILURES: wrong SKU, mirrored scene, controller on user-left or a short end, second controller, ordinary columns with wider lower tubes, changed stage count, floating feet, bending/tilting/elastic desktop, extra drawer, extra leg, disappearing cable, unsupported accessory. No generated captions, voice-over, music, promo badge or brand lettering. Add German subtitles and branding in editing. If geometry cannot be kept, reduce the action or retain the approved still; do not redesign the product.
```

## 镜头 5 · 12–15 秒
后期德语字幕：Entdecke den Furniwell G2.
### 首帧提示词
```text
@image1 @image2

Create ONE photorealistic 9:16 still image, not a storyboard or collage. The attached @image1 is the exact official desk photograph and the only desk-shape reference; @image2 independently locks the companion chair. Preserve the furniture; change only the human staging and room described below.

Production recipe FV-04, shot 5 START FRAME.

PRODUCT IDENTITY — highest priority:
Furniwell G2 white glass desk, SKU G-HAD24-0430-142WT-2, variant 45781441347850, 140 x 70 cm. ONE continuous glass desktop, its original white front fascia, exactly ONE original central pull-out drawer with its real runners, two white columns and two original white floor feet. The ORIGINAL control strip and USB ports are INTEGRATED INTO the front fascia on the seated worker's RIGHT. Copy the exact visible layout in @image1. Do NOT add a separate hanging black Economy keypad. No desktop seams, wooden replacement top, second drawer, cabinet or wheel.
COLUMN ASSEMBLY:
INVERTED TWO-STAGE COLUMNS: the wider UPPER outer sleeve meets the under-desk frame; the narrower LOWER inner section meets the floor foot. Thick above, slim below, matching @image1. Keep that orientation in every frame. This writing-and-drawer recipe holds the desk at one height; do not animate leg extension or change the section count.
CONTROLLER LOCATION:
The one control strip is BUILT INTO the white FRONT FASCIA on the seated worker's RIGHT. It is not a hanging keypad under the desk and it is not mounted on a short end. Preserve its button and port positions; no duplicate controller.
ORIENTATION: FRONT means the long working edge nearest the seated woman; BACK means the opposite edge. RIGHT always means her anatomical right when she sits facing the work surface, never the camera's right. The keypad stays fixed at that physical right-front working position across cuts. Keep cameras on the worker-facing side of the desk; no camera crossing behind the back edge and no horizontal mirroring. If a reverse view is ever used, her physical right may appear on screen-left; do not relocate the controller to compensate.
CONTINUITY:
In person shots ONLY: the same adult woman, about 30, brown hair in a low ponytail, cream sweater, charcoal trousers. Empty shots have zero people or body parts. One-hand close-ups show only her right hand and its connected wrist/forearm. Keep the same room, props and light direction across hard cuts.
One bright German home office. The same woman, one suitable erasable glass marker and one small cloth. Keep the glass clear enough to see its continuous surface. All writing is a simple mark, not AI-generated words.
COMPANION CHAIR — @image2:
Use only Furniwell high-back office chair, SKU G-OCNC23-0240-2, variant 44820467712266, grey mesh with its original light frame, padded seat and five-spoke base. Chair reference: https://cdn.shopify.com/s/files/1/0580/4615/2882/files/0240-Grey.jpg?v=1698643212
Chair product: https://furniwell.de/products/ergonomischer-burostuhl-mit-verstellbarer-hoher-rucken?variant=44820467712266
Actually upload this chair photograph as @image2. Preserve its separate mesh headrest, upper mesh back, separate lower lumbar support, original arms, seat, five-spoke base and five casters. Never substitute a headrest-free generic white chair or gaming chair. Keep the same chair through every shot. Desk @image1 and chair @image2 are independent shape references. The chair stays grounded when the desk rises. This chair is sold separately; do not imply a free chair or desk-and-chair bundle.
HUMAN / CONTACT GEOMETRY: establish physical staging before motion. The same adult appears ONLY in shots explicitly marked as a person shot. Empty shots do not inherit body parts from the previous shot. Start each clip from its own approved still and join clips with HARD CUTS. Never combine sitting down, standing up, turning, operating controls and lifting into one continuous action. Lock the camera for human-contact shots. No human is present during desk motion. Camera-only shots have no hand or furniture motion. Body, clothing, desktop and chair are separate opaque solids: resolve occlusion by real depth, never transparency, melting or disappearance.

SHOT CAST AND SPATIAL LOCK:
CAST: ZERO people, ZERO hands and ZERO feet. The chair is fully empty; no trouser legs, shoes or human silhouette beneath it. Cut directly to this approved empty start frame; never dissolve a person away within the clip.
Keep the complete product and floor feet readable. A very small straight push-in only; no orbit or perspective switch.

THIS SHOT START FRAME:

The exact product and the same specified chair are already staged. Full product, empty scene, furniture and props still.

Freeze this single start pose; do not include the action or end state. No motion trail, duplicate pose or simultaneous before/after states. Reject a faulty anatomical start frame before video generation.

START-FRAME AND CLIP ACCEPTANCE: before animation, check actor/hand count, shoulder-elbow-wrist continuity, pelvis supported by seat, chair back behind the person, and clearance to desktop and armrests. Hand details contain only one right hand; empty shots have no leftover legs or feet. Reject an invalid start frame before animation; do not ask the video model to repair it. Inspect beginning, middle of action and end of each clip. Extra hands, detached torso, intersections or disappearing body mean reject the whole clip and regenerate with less motion or retain the approved still. Blurring, fading or cropping the defect is not a repair. Prompts reduce risk but do not guarantee every generated frame.

HARD FAILURES: wrong SKU, mirrored scene, controller on user-left or a short end, second controller, ordinary columns with wider lower tubes, changed stage count, floating feet, bending/tilting/elastic desktop, extra drawer, extra leg, disappearing cable, unsupported accessory. No generated captions, voice-over, music, promo badge or brand lettering. Add German subtitles and branding in editing. If geometry cannot be kept, reduce the action or retain the approved still; do not redesign the product.
```
### 单镜头 Grok 图生视频提示词
```text
@image1 @image2 @image3

Generate ONE 3-second vertical 9:16 image-to-video clip. In this separate clip task, @image1 is the official product identity reference; @image2 is the approved Furniwell chair photograph; @image3 is THIS SHOT'S already approved start frame. Begin exactly from @image3. Preserve its framing, pose, geometry, room, props and lighting. Do not create a different opening composition.

PRODUCT IDENTITY — highest priority:
Furniwell G2 white glass desk, SKU G-HAD24-0430-142WT-2, variant 45781441347850, 140 x 70 cm. ONE continuous glass desktop, its original white front fascia, exactly ONE original central pull-out drawer with its real runners, two white columns and two original white floor feet. The ORIGINAL control strip and USB ports are INTEGRATED INTO the front fascia on the seated worker's RIGHT. Copy the exact visible layout in @image1. Do NOT add a separate hanging black Economy keypad. No desktop seams, wooden replacement top, second drawer, cabinet or wheel.
COLUMN ASSEMBLY:
INVERTED TWO-STAGE COLUMNS: the wider UPPER outer sleeve meets the under-desk frame; the narrower LOWER inner section meets the floor foot. Thick above, slim below, matching @image1. Keep that orientation in every frame. This writing-and-drawer recipe holds the desk at one height; do not animate leg extension or change the section count.
CONTROLLER LOCATION:
The one control strip is BUILT INTO the white FRONT FASCIA on the seated worker's RIGHT. It is not a hanging keypad under the desk and it is not mounted on a short end. Preserve its button and port positions; no duplicate controller.
ORIENTATION: FRONT means the long working edge nearest the seated woman; BACK means the opposite edge. RIGHT always means her anatomical right when she sits facing the work surface, never the camera's right. The keypad stays fixed at that physical right-front working position across cuts. Keep cameras on the worker-facing side of the desk; no camera crossing behind the back edge and no horizontal mirroring. If a reverse view is ever used, her physical right may appear on screen-left; do not relocate the controller to compensate.
CONTINUITY:
In person shots ONLY: the same adult woman, about 30, brown hair in a low ponytail, cream sweater, charcoal trousers. Empty shots have zero people or body parts. One-hand close-ups show only her right hand and its connected wrist/forearm. Keep the same room, props and light direction across hard cuts.
One bright German home office. The same woman, one suitable erasable glass marker and one small cloth. Keep the glass clear enough to see its continuous surface. All writing is a simple mark, not AI-generated words.
COMPANION CHAIR — @image2:
Use only Furniwell high-back office chair, SKU G-OCNC23-0240-2, variant 44820467712266, grey mesh with its original light frame, padded seat and five-spoke base. Chair reference: https://cdn.shopify.com/s/files/1/0580/4615/2882/files/0240-Grey.jpg?v=1698643212
Chair product: https://furniwell.de/products/ergonomischer-burostuhl-mit-verstellbarer-hoher-rucken?variant=44820467712266
Actually upload this chair photograph as @image2. Preserve its separate mesh headrest, upper mesh back, separate lower lumbar support, original arms, seat, five-spoke base and five casters. Never substitute a headrest-free generic white chair or gaming chair. Keep the same chair through every shot. Desk @image1 and chair @image2 are independent shape references. The chair stays grounded when the desk rises. This chair is sold separately; do not imply a free chair or desk-and-chair bundle.
HUMAN / CONTACT GEOMETRY: establish physical staging before motion. The same adult appears ONLY in shots explicitly marked as a person shot. Empty shots do not inherit body parts from the previous shot. Start each clip from its own approved still and join clips with HARD CUTS. Never combine sitting down, standing up, turning, operating controls and lifting into one continuous action. Lock the camera for human-contact shots. No human is present during desk motion. Camera-only shots have no hand or furniture motion. Body, clothing, desktop and chair are separate opaque solids: resolve occlusion by real depth, never transparency, melting or disappearance.

SHOT CAST AND SPATIAL LOCK:
CAST: ZERO people, ZERO hands and ZERO feet. The chair is fully empty; no trouser legs, shoes or human silhouette beneath it. Cut directly to this approved empty start frame; never dissolve a person away within the clip.
Keep the complete product and floor feet readable. A very small straight push-in only; no orbit or perspective switch.

ONLY ACTION:

Only the camera makes a tiny straight push-in; product, chair and props remain still.

END STATE:

The same complete product and empty chair; room for an editor-added CTA.

No internal cut, orbit or unrequested action. Use ONLY the camera or body motion specified for this shot, never both. Preserve everything else.

START-FRAME AND CLIP ACCEPTANCE: before animation, check actor/hand count, shoulder-elbow-wrist continuity, pelvis supported by seat, chair back behind the person, and clearance to desktop and armrests. Hand details contain only one right hand; empty shots have no leftover legs or feet. Reject an invalid start frame before animation; do not ask the video model to repair it. Inspect beginning, middle of action and end of each clip. Extra hands, detached torso, intersections or disappearing body mean reject the whole clip and regenerate with less motion or retain the approved still. Blurring, fading or cropping the defect is not a repair. Prompts reduce risk but do not guarantee every generated frame.

HARD FAILURES: wrong SKU, mirrored scene, controller on user-left or a short end, second controller, ordinary columns with wider lower tubes, changed stage count, floating feet, bending/tilting/elastic desktop, extra drawer, extra leg, disappearing cable, unsupported accessory. No generated captions, voice-over, music, promo badge or brand lettering. Add German subtitles and branding in editing. If geometry cannot be kept, reduce the action or retain the approved still; do not redesign the product.
```

## 验收
- 产品名称、SKU、尺寸、颜色与三视图一致；四拼、整板、玻璃桌不能混用。
- 控制器只有一个，位于入座者右侧；外挂与 G2 内嵌形式正确；没有装到短边。
- 倒装立柱粗管在上、细管在下；节数、立柱数量、脚型正确；底脚贴地。
- 升降时桌面与上部套管一起移动；桌面水平；没有拉伸变形或全行程瞬移。
- G2 只有原装一个抽屉；L 桌保留原朝向及三根立柱；未确认结构不补画。
- 对比首帧、运动中间帧和尾帧。发现多手、断身、人体消失、穿桌板/椅架、错款或结构变形，整段退回重做；不通过模糊、淡化或裁切掩盖错误，不进入投放。
- 搭配椅是指定灰色高背款，独立头枕、腰靠、扶手与五爪底座正确；image2 不是首帧，image3 才是当前镜头首帧。
- 人物镜头恰好一个完整成年人，双手分放对应大腿；椅背在身后，骨盆由坐垫承托。不能从椅背后拍正脸，不能只剩椅下裤腿。
- 手部特写只见一只右手与连续手腕前臂；无人镜头连残留的手、腿、脚与人影也不能有。

制作边界：提示词与参考图可降低结构错误，不能保证生成模型每帧正确。首帧与成片都要人工核对；错款画面不进入投放。

# FV-05 · 120 × 60 cm 的卧室工作区 · Grok 产品锁定版
更新日期：2026-10-29（北京时间）；研究样本日期仍为 2026-10-27。
固定产品：Economy 白色四拼桌板 120 × 60 cm
SKU：G-HAD241222B；variant：44533451587850
商品：https://furniwell.de/products/economy-elektrisch-hohenverstellbarer-schreibtisch?variant=44533451587850
官网原图 / image1：https://cdn.shopify.com/s/files/1/0580/4615/2882/files/EconomyElektrischHohenverstellbarerSchreibtisch-sku_1.jpg?v=1764671992
搭配椅 / image2：G-OCNC23-0240-2；https://furniwell.de/products/ergonomischer-burostuhl-mit-verstellbarer-hoher-rucken?variant=44820467712266
椅子官网原图：https://cdn.shopify.com/s/files/1/0580/4615/2882/files/0240-Grey.jpg?v=1698643212
每镜头首帧作为 image3；搭配椅单独销售。更换椅子款式或颜色请使用网页的中文 Prompt 生成区。

## 使用顺序
1. 先下载主商品原图与灰色高背办公椅原图并实际上传，分别作为 image1、image2。只粘贴商品链接不会绑定图片。
2. 先复制每镜头的“首帧提示词”制作单张 9:16 首帧；先验收人数、手数、肩肘腕连接、椅背在身后及桌沿间隙，再核对产品。错误首帧必须重做，不能交给视频模型修复。
3. 推荐分镜生成：每镜头开独立任务，先上传主商品原图作为 image1、搭配椅原图作为 image2，再上传本镜头已验收首帧作为 image3。image2 不再指首帧，不要上传另一镜头的首帧。
4. 15 秒总提示词现在是剪辑计划，不直接整段交给 Grok 连续生成。每镜头只复制本段 3 秒图生视频指令；image1 主商品、image2 搭配椅、image3 当前首帧。界面不识别标签时手动指定附件。
5. 每段只做一个小动作：人物镜头桌椅固定，手部特写仅一只右手，升降镜头无人且椅子在运动区外。不生成入座、起身或转身过程；用硬切连接已完成状态。字幕、口播、品牌和促销信息后期添加。

## 固定产品结构
- 白色 120 × 60 cm；四片拼接桌板，保留原图拼缝。
- 两根白色立柱，每根两节：粗外套管在上，细内管在下并连接底脚。
- 两只原装白色长条 T 脚，保留黑色脚垫、横梁与线缆。
- 仅一个黑色外挂手控器：入座者右手侧、靠人的前长边下方；不是右侧短边。
核验边界：已对照同一变体官方主图确认两节倒装。

## 15 秒剪辑计划（纯英文；不要整段连续生成）
```text
Production recipe FV-05. EDIT PLAN ONLY: five INDEPENDENT 3-second vertical 9:16 clips, joined into a 15-second ad. Do NOT submit this complete plan as a single continuous Grok generation. Make and approve each start still, then copy only that shot's image-to-video prompt. Actually upload @image1 as the official product reference and @image2 as the companion chair reference; each separate clip also uses its own approved @image3.

PRODUCT IDENTITY — highest priority:
Furniwell Economy, SKU G-HAD241222B, variant 44533451587850. White 120 x 60 cm FOUR-PANEL desktop, with the exact seam pattern in @image1. Two white lifting columns, TWO telescoping sections per column. Two original white T-shaped floor feet with their original dark leveling pads. Exactly ONE original black hanging digital keypad under the user-facing FRONT LONG EDGE, on the seated user's anatomical RIGHT. Copy its actual housing, angle, display and buttons from @image1. No drawer, glass top, third column, wheels, extra keypad or added cable tray.
COLUMN ASSEMBLY:
INVERTED TWO-STAGE COLUMNS: the WIDER outer sleeve is UPPER, attached to the underside frame; the NARROWER inner section is LOWER, attached to the floor foot. Thick at the top, slim at the bottom. The thick upper sleeve and desktop travel upward together; the thin lower section remains anchored to the foot, so more of the thin section becomes visible below the upper sleeve. On lowering, the upper sleeve covers more of the lower section. The feet stay planted. Do not swap tube widths, turn either column upside down, add a third section, stretch solid metal, or lift only the tabletop.
CONTROLLER LOCATION:
One black hanging keypad BELOW the front long edge at the seated worker's RIGHT. For a button shot, the worker uses her RIGHT index finger and approaches from her own side of the desk. Keep the real front-right tabletop corner and a portion of the long edge in view; never mount the keypad on the short end.
ORIENTATION: FRONT means the long working edge nearest the seated woman; BACK means the opposite edge. RIGHT always means her anatomical right when she sits facing the work surface, never the camera's right. The keypad stays fixed at that physical right-front working position across cuts. Keep cameras on the worker-facing side of the desk; no camera crossing behind the back edge and no horizontal mirroring. If a reverse view is ever used, her physical right may appear on screen-left; do not relocate the controller to compensate.
CONTINUITY:
In person shots ONLY: the same adult woman, about 30, brown hair in a low ponytail, cream sweater, charcoal trousers. Empty shots have zero people or body parts. One-hand close-ups show only her right hand and its connected wrist/forearm. Keep the same room, props and light direction across hard cuts.
One real-scale modest German bedroom. The SAME white 120 x 60 cm four-panel Economy is already installed beside a bed. Keep the doorway, bed, chair exit space and walking path fixed. One slim laptop only.
COMPANION CHAIR — @image2:
Use only Furniwell high-back office chair, SKU G-OCNC23-0240-2, variant 44820467712266, grey mesh with its original light frame, padded seat and five-spoke base. Chair reference: https://cdn.shopify.com/s/files/1/0580/4615/2882/files/0240-Grey.jpg?v=1698643212
Chair product: https://furniwell.de/products/ergonomischer-burostuhl-mit-verstellbarer-hoher-rucken?variant=44820467712266
Actually upload this chair photograph as @image2. Preserve its separate mesh headrest, upper mesh back, separate lower lumbar support, original arms, seat, five-spoke base and five casters. Never substitute a headrest-free generic white chair or gaming chair. Keep the same chair through every shot. Desk @image1 and chair @image2 are independent shape references. The chair stays grounded when the desk rises. This chair is sold separately; do not imply a free chair or desk-and-chair bundle.
HUMAN / CONTACT GEOMETRY: establish physical staging before motion. The same adult appears ONLY in shots explicitly marked as a person shot. Empty shots do not inherit body parts from the previous shot. Start each clip from its own approved still and join clips with HARD CUTS. Never combine sitting down, standing up, turning, operating controls and lifting into one continuous action. Lock the camera for human-contact shots. No human is present during desk motion. Camera-only shots have no hand or furniture motion. Body, clothing, desktop and chair are separate opaque solids: resolve occlusion by real depth, never transparency, melting or disappearance.

EDITING: HARD CUTS between already-established poses. Never animate sitting down, rising from the chair, turning across the desk, or a full sit-to-stand lift.

SHOT 1, 0-3s: @image1 @image2
SHOT CAST AND SPATIAL LOCK:
CAST: ZERO people, ZERO hands and ZERO feet. The chair is fully empty; no trouser legs, shoes or human silhouette beneath it. Cut directly to this approved empty start frame; never dissolve a person away within the clip.
Keep the complete product and floor feet readable. A very small straight push-in only; no orbit or perspective switch.
START: The exact product and the same specified chair are already staged. Full product, empty scene, furniture and props still.
ACTION: Only the camera makes a tiny straight push-in; product, chair and props remain still.
END: The same complete product and empty chair; room for an editor-added CTA.

SHOT 2, 3-6s: @image1 @image2
SHOT CAST AND SPATIAL LOCK:
CAST: ZERO people, ZERO hands and ZERO feet. The chair is fully empty; no trouser legs, shoes or human silhouette beneath it. Cut directly to this approved empty start frame; never dissolve a person away within the clip.
Keep the target detail and its surface or mounting context readable with a tiny straight push-in. Do not force a full-product view into this detail crop; no orbit.
START: Empty room start frame; chair is already clear of the desk edge, with real-scale walkway, bed, doorway and product. No legs or feet beneath the chair.
ACTION: Tiny camera push shows chair clearance only; no entering or sitting down and no rescaling furniture.
END: Product, props and empty chair remain intact; no body, hands or feet enter.

SHOT 3, 6-9s: @image1 @image2
SHOT CAST AND SPATIAL LOCK:
CAST: exactly ONE anatomically complete seated adult, already seated in the start frame. Pelvis supported by the seat; chair back behind the torso; chest facing the desk; two thighs connected to the same pelvis and knees; both feet on the floor. Exactly one left and one right hand rest separately on their corresponding thighs, palms down, and stay there: no typing or reaching for controls. Each hand connects continuously through wrist, elbow and shoulder to this one person. The person is in FRONT of the chair back. Never film a face through a foreground chair back or hide the entire head and torso while leaving orphan trouser legs. Keep a visible gap between torso and desktop; armrests remain outside the front desk edge and never enter the desktop.
Locked side view from the person's right, making side profile, shoulder, torso and seat depth readable; never orbit behind or film through the chair back.
START: The same adult is already seated facing the laptop at an approved seated desk height. Hands rest separately on thighs; armrests are not pushed under the desktop.
ACTION: Only one tiny glance/head nod toward the screen; hands, torso, chair and desk stay in place.
END: The same complete seated pose, with both hands still on their thighs; no reach or rising.

SHOT 4, 9-12s: @image1 @image2
SHOT CAST AND SPATIAL LOCK:
CAST: only ONE right hand belonging to the same adult, continuously connected to one wrist and forearm entering from the worker-side edge of the frame. No second hand, extra forearm, face or torso in this crop. The left hand stays on the lap, entirely outside the crop. The right hand has five fingers. Keep the start-frame grip and perform only the specified small local action; palm, wrist and forearm stay connected with unchanged lengths and no regripping. No hand emerges through the desktop, chair or keypad. If contact is occluded, repair the start-frame camera position instead of inventing another hand.
Locked contextual close-up showing the real component, its mounting edge/surface and contact point. No push-in, orbit or extreme wide angle.
START: The exact SKU's original control remains at its original user-right front LONG edge. Only one right hand and connected wrist/forearm are visible. Its index fingertip is already at one existing button; the other four fingers rest curled. Keep the tabletop corner and contact point readable.
ACTION: Only the right index finger makes one tiny press and stops. Wrist, forearm and other fingers keep their positions. The desk remains stationary throughout; this shot establishes the control location, with lifting in a separate empty shot.
END: Still one continuously attached right hand; original keypad, edge and desk height unchanged.

SHOT 5, 12-15s: @image1 @image2
SHOT CAST AND SPATIAL LOCK:
CAST: ZERO people, ZERO hands and ZERO feet. The chair is fully empty; no trouser legs, shoes or human silhouette beneath it. Cut directly to this approved empty start frame; never dissolve a person away within the clip.
Keep the complete product and floor feet readable. A very small straight push-in only; no orbit or perspective switch.
START: The exact product and the same specified chair are already staged. Full product, empty scene, furniture and props still.
ACTION: Only the camera makes a tiny straight push-in; product, chair and props remain still.
END: The same complete product and empty chair; room for an editor-added CTA.

START-FRAME AND CLIP ACCEPTANCE: before animation, check actor/hand count, shoulder-elbow-wrist continuity, pelvis supported by seat, chair back behind the person, and clearance to desktop and armrests. Hand details contain only one right hand; empty shots have no leftover legs or feet. Reject an invalid start frame before animation; do not ask the video model to repair it. Inspect beginning, middle of action and end of each clip. Extra hands, detached torso, intersections or disappearing body mean reject the whole clip and regenerate with less motion or retain the approved still. Blurring, fading or cropping the defect is not a repair. Prompts reduce risk but do not guarantee every generated frame.

HARD FAILURES: wrong SKU, mirrored scene, controller on user-left or a short end, second controller, ordinary columns with wider lower tubes, changed stage count, floating feet, bending/tilting/elastic desktop, extra drawer, extra leg, disappearing cable, unsupported accessory. No generated captions, voice-over, music, promo badge or brand lettering. Add German subtitles and branding in editing. If geometry cannot be kept, reduce the action or retain the approved still; do not redesign the product.
```

## 镜头 1 · 0–3 秒
后期德语字幕：Dein Arbeitsplatz auf 120 × 60 cm.
### 首帧提示词
```text
@image1 @image2

Create ONE photorealistic 9:16 still image, not a storyboard or collage. The attached @image1 is the exact official desk photograph and the only desk-shape reference; @image2 independently locks the companion chair. Preserve the furniture; change only the human staging and room described below.

Production recipe FV-05, shot 1 START FRAME.

PRODUCT IDENTITY — highest priority:
Furniwell Economy, SKU G-HAD241222B, variant 44533451587850. White 120 x 60 cm FOUR-PANEL desktop, with the exact seam pattern in @image1. Two white lifting columns, TWO telescoping sections per column. Two original white T-shaped floor feet with their original dark leveling pads. Exactly ONE original black hanging digital keypad under the user-facing FRONT LONG EDGE, on the seated user's anatomical RIGHT. Copy its actual housing, angle, display and buttons from @image1. No drawer, glass top, third column, wheels, extra keypad or added cable tray.
COLUMN ASSEMBLY:
INVERTED TWO-STAGE COLUMNS: the WIDER outer sleeve is UPPER, attached to the underside frame; the NARROWER inner section is LOWER, attached to the floor foot. Thick at the top, slim at the bottom. The thick upper sleeve and desktop travel upward together; the thin lower section remains anchored to the foot, so more of the thin section becomes visible below the upper sleeve. On lowering, the upper sleeve covers more of the lower section. The feet stay planted. Do not swap tube widths, turn either column upside down, add a third section, stretch solid metal, or lift only the tabletop.
CONTROLLER LOCATION:
One black hanging keypad BELOW the front long edge at the seated worker's RIGHT. For a button shot, the worker uses her RIGHT index finger and approaches from her own side of the desk. Keep the real front-right tabletop corner and a portion of the long edge in view; never mount the keypad on the short end.
ORIENTATION: FRONT means the long working edge nearest the seated woman; BACK means the opposite edge. RIGHT always means her anatomical right when she sits facing the work surface, never the camera's right. The keypad stays fixed at that physical right-front working position across cuts. Keep cameras on the worker-facing side of the desk; no camera crossing behind the back edge and no horizontal mirroring. If a reverse view is ever used, her physical right may appear on screen-left; do not relocate the controller to compensate.
CONTINUITY:
In person shots ONLY: the same adult woman, about 30, brown hair in a low ponytail, cream sweater, charcoal trousers. Empty shots have zero people or body parts. One-hand close-ups show only her right hand and its connected wrist/forearm. Keep the same room, props and light direction across hard cuts.
One real-scale modest German bedroom. The SAME white 120 x 60 cm four-panel Economy is already installed beside a bed. Keep the doorway, bed, chair exit space and walking path fixed. One slim laptop only.
COMPANION CHAIR — @image2:
Use only Furniwell high-back office chair, SKU G-OCNC23-0240-2, variant 44820467712266, grey mesh with its original light frame, padded seat and five-spoke base. Chair reference: https://cdn.shopify.com/s/files/1/0580/4615/2882/files/0240-Grey.jpg?v=1698643212
Chair product: https://furniwell.de/products/ergonomischer-burostuhl-mit-verstellbarer-hoher-rucken?variant=44820467712266
Actually upload this chair photograph as @image2. Preserve its separate mesh headrest, upper mesh back, separate lower lumbar support, original arms, seat, five-spoke base and five casters. Never substitute a headrest-free generic white chair or gaming chair. Keep the same chair through every shot. Desk @image1 and chair @image2 are independent shape references. The chair stays grounded when the desk rises. This chair is sold separately; do not imply a free chair or desk-and-chair bundle.
HUMAN / CONTACT GEOMETRY: establish physical staging before motion. The same adult appears ONLY in shots explicitly marked as a person shot. Empty shots do not inherit body parts from the previous shot. Start each clip from its own approved still and join clips with HARD CUTS. Never combine sitting down, standing up, turning, operating controls and lifting into one continuous action. Lock the camera for human-contact shots. No human is present during desk motion. Camera-only shots have no hand or furniture motion. Body, clothing, desktop and chair are separate opaque solids: resolve occlusion by real depth, never transparency, melting or disappearance.

SHOT CAST AND SPATIAL LOCK:
CAST: ZERO people, ZERO hands and ZERO feet. The chair is fully empty; no trouser legs, shoes or human silhouette beneath it. Cut directly to this approved empty start frame; never dissolve a person away within the clip.
Keep the complete product and floor feet readable. A very small straight push-in only; no orbit or perspective switch.

THIS SHOT START FRAME:

The exact product and the same specified chair are already staged. Full product, empty scene, furniture and props still.

Freeze this single start pose; do not include the action or end state. No motion trail, duplicate pose or simultaneous before/after states. Reject a faulty anatomical start frame before video generation.

START-FRAME AND CLIP ACCEPTANCE: before animation, check actor/hand count, shoulder-elbow-wrist continuity, pelvis supported by seat, chair back behind the person, and clearance to desktop and armrests. Hand details contain only one right hand; empty shots have no leftover legs or feet. Reject an invalid start frame before animation; do not ask the video model to repair it. Inspect beginning, middle of action and end of each clip. Extra hands, detached torso, intersections or disappearing body mean reject the whole clip and regenerate with less motion or retain the approved still. Blurring, fading or cropping the defect is not a repair. Prompts reduce risk but do not guarantee every generated frame.

HARD FAILURES: wrong SKU, mirrored scene, controller on user-left or a short end, second controller, ordinary columns with wider lower tubes, changed stage count, floating feet, bending/tilting/elastic desktop, extra drawer, extra leg, disappearing cable, unsupported accessory. No generated captions, voice-over, music, promo badge or brand lettering. Add German subtitles and branding in editing. If geometry cannot be kept, reduce the action or retain the approved still; do not redesign the product.
```
### 单镜头 Grok 图生视频提示词
```text
@image1 @image2 @image3

Generate ONE 3-second vertical 9:16 image-to-video clip. In this separate clip task, @image1 is the official product identity reference; @image2 is the approved Furniwell chair photograph; @image3 is THIS SHOT'S already approved start frame. Begin exactly from @image3. Preserve its framing, pose, geometry, room, props and lighting. Do not create a different opening composition.

PRODUCT IDENTITY — highest priority:
Furniwell Economy, SKU G-HAD241222B, variant 44533451587850. White 120 x 60 cm FOUR-PANEL desktop, with the exact seam pattern in @image1. Two white lifting columns, TWO telescoping sections per column. Two original white T-shaped floor feet with their original dark leveling pads. Exactly ONE original black hanging digital keypad under the user-facing FRONT LONG EDGE, on the seated user's anatomical RIGHT. Copy its actual housing, angle, display and buttons from @image1. No drawer, glass top, third column, wheels, extra keypad or added cable tray.
COLUMN ASSEMBLY:
INVERTED TWO-STAGE COLUMNS: the WIDER outer sleeve is UPPER, attached to the underside frame; the NARROWER inner section is LOWER, attached to the floor foot. Thick at the top, slim at the bottom. The thick upper sleeve and desktop travel upward together; the thin lower section remains anchored to the foot, so more of the thin section becomes visible below the upper sleeve. On lowering, the upper sleeve covers more of the lower section. The feet stay planted. Do not swap tube widths, turn either column upside down, add a third section, stretch solid metal, or lift only the tabletop.
CONTROLLER LOCATION:
One black hanging keypad BELOW the front long edge at the seated worker's RIGHT. For a button shot, the worker uses her RIGHT index finger and approaches from her own side of the desk. Keep the real front-right tabletop corner and a portion of the long edge in view; never mount the keypad on the short end.
ORIENTATION: FRONT means the long working edge nearest the seated woman; BACK means the opposite edge. RIGHT always means her anatomical right when she sits facing the work surface, never the camera's right. The keypad stays fixed at that physical right-front working position across cuts. Keep cameras on the worker-facing side of the desk; no camera crossing behind the back edge and no horizontal mirroring. If a reverse view is ever used, her physical right may appear on screen-left; do not relocate the controller to compensate.
CONTINUITY:
In person shots ONLY: the same adult woman, about 30, brown hair in a low ponytail, cream sweater, charcoal trousers. Empty shots have zero people or body parts. One-hand close-ups show only her right hand and its connected wrist/forearm. Keep the same room, props and light direction across hard cuts.
One real-scale modest German bedroom. The SAME white 120 x 60 cm four-panel Economy is already installed beside a bed. Keep the doorway, bed, chair exit space and walking path fixed. One slim laptop only.
COMPANION CHAIR — @image2:
Use only Furniwell high-back office chair, SKU G-OCNC23-0240-2, variant 44820467712266, grey mesh with its original light frame, padded seat and five-spoke base. Chair reference: https://cdn.shopify.com/s/files/1/0580/4615/2882/files/0240-Grey.jpg?v=1698643212
Chair product: https://furniwell.de/products/ergonomischer-burostuhl-mit-verstellbarer-hoher-rucken?variant=44820467712266
Actually upload this chair photograph as @image2. Preserve its separate mesh headrest, upper mesh back, separate lower lumbar support, original arms, seat, five-spoke base and five casters. Never substitute a headrest-free generic white chair or gaming chair. Keep the same chair through every shot. Desk @image1 and chair @image2 are independent shape references. The chair stays grounded when the desk rises. This chair is sold separately; do not imply a free chair or desk-and-chair bundle.
HUMAN / CONTACT GEOMETRY: establish physical staging before motion. The same adult appears ONLY in shots explicitly marked as a person shot. Empty shots do not inherit body parts from the previous shot. Start each clip from its own approved still and join clips with HARD CUTS. Never combine sitting down, standing up, turning, operating controls and lifting into one continuous action. Lock the camera for human-contact shots. No human is present during desk motion. Camera-only shots have no hand or furniture motion. Body, clothing, desktop and chair are separate opaque solids: resolve occlusion by real depth, never transparency, melting or disappearance.

SHOT CAST AND SPATIAL LOCK:
CAST: ZERO people, ZERO hands and ZERO feet. The chair is fully empty; no trouser legs, shoes or human silhouette beneath it. Cut directly to this approved empty start frame; never dissolve a person away within the clip.
Keep the complete product and floor feet readable. A very small straight push-in only; no orbit or perspective switch.

ONLY ACTION:

Only the camera makes a tiny straight push-in; product, chair and props remain still.

END STATE:

The same complete product and empty chair; room for an editor-added CTA.

No internal cut, orbit or unrequested action. Use ONLY the camera or body motion specified for this shot, never both. Preserve everything else.

START-FRAME AND CLIP ACCEPTANCE: before animation, check actor/hand count, shoulder-elbow-wrist continuity, pelvis supported by seat, chair back behind the person, and clearance to desktop and armrests. Hand details contain only one right hand; empty shots have no leftover legs or feet. Reject an invalid start frame before animation; do not ask the video model to repair it. Inspect beginning, middle of action and end of each clip. Extra hands, detached torso, intersections or disappearing body mean reject the whole clip and regenerate with less motion or retain the approved still. Blurring, fading or cropping the defect is not a repair. Prompts reduce risk but do not guarantee every generated frame.

HARD FAILURES: wrong SKU, mirrored scene, controller on user-left or a short end, second controller, ordinary columns with wider lower tubes, changed stage count, floating feet, bending/tilting/elastic desktop, extra drawer, extra leg, disappearing cable, unsupported accessory. No generated captions, voice-over, music, promo badge or brand lettering. Add German subtitles and branding in editing. If geometry cannot be kept, reduce the action or retain the approved still; do not redesign the product.
```

## 镜头 2 · 3–6 秒
后期德语字幕：Platz für deinen Alltag.
### 首帧提示词
```text
@image1 @image2

Create ONE photorealistic 9:16 still image, not a storyboard or collage. The attached @image1 is the exact official desk photograph and the only desk-shape reference; @image2 independently locks the companion chair. Preserve the furniture; change only the human staging and room described below.

Production recipe FV-05, shot 2 START FRAME.

PRODUCT IDENTITY — highest priority:
Furniwell Economy, SKU G-HAD241222B, variant 44533451587850. White 120 x 60 cm FOUR-PANEL desktop, with the exact seam pattern in @image1. Two white lifting columns, TWO telescoping sections per column. Two original white T-shaped floor feet with their original dark leveling pads. Exactly ONE original black hanging digital keypad under the user-facing FRONT LONG EDGE, on the seated user's anatomical RIGHT. Copy its actual housing, angle, display and buttons from @image1. No drawer, glass top, third column, wheels, extra keypad or added cable tray.
COLUMN ASSEMBLY:
INVERTED TWO-STAGE COLUMNS: the WIDER outer sleeve is UPPER, attached to the underside frame; the NARROWER inner section is LOWER, attached to the floor foot. Thick at the top, slim at the bottom. The thick upper sleeve and desktop travel upward together; the thin lower section remains anchored to the foot, so more of the thin section becomes visible below the upper sleeve. On lowering, the upper sleeve covers more of the lower section. The feet stay planted. Do not swap tube widths, turn either column upside down, add a third section, stretch solid metal, or lift only the tabletop.
CONTROLLER LOCATION:
One black hanging keypad BELOW the front long edge at the seated worker's RIGHT. For a button shot, the worker uses her RIGHT index finger and approaches from her own side of the desk. Keep the real front-right tabletop corner and a portion of the long edge in view; never mount the keypad on the short end.
ORIENTATION: FRONT means the long working edge nearest the seated woman; BACK means the opposite edge. RIGHT always means her anatomical right when she sits facing the work surface, never the camera's right. The keypad stays fixed at that physical right-front working position across cuts. Keep cameras on the worker-facing side of the desk; no camera crossing behind the back edge and no horizontal mirroring. If a reverse view is ever used, her physical right may appear on screen-left; do not relocate the controller to compensate.
CONTINUITY:
In person shots ONLY: the same adult woman, about 30, brown hair in a low ponytail, cream sweater, charcoal trousers. Empty shots have zero people or body parts. One-hand close-ups show only her right hand and its connected wrist/forearm. Keep the same room, props and light direction across hard cuts.
One real-scale modest German bedroom. The SAME white 120 x 60 cm four-panel Economy is already installed beside a bed. Keep the doorway, bed, chair exit space and walking path fixed. One slim laptop only.
COMPANION CHAIR — @image2:
Use only Furniwell high-back office chair, SKU G-OCNC23-0240-2, variant 44820467712266, grey mesh with its original light frame, padded seat and five-spoke base. Chair reference: https://cdn.shopify.com/s/files/1/0580/4615/2882/files/0240-Grey.jpg?v=1698643212
Chair product: https://furniwell.de/products/ergonomischer-burostuhl-mit-verstellbarer-hoher-rucken?variant=44820467712266
Actually upload this chair photograph as @image2. Preserve its separate mesh headrest, upper mesh back, separate lower lumbar support, original arms, seat, five-spoke base and five casters. Never substitute a headrest-free generic white chair or gaming chair. Keep the same chair through every shot. Desk @image1 and chair @image2 are independent shape references. The chair stays grounded when the desk rises. This chair is sold separately; do not imply a free chair or desk-and-chair bundle.
HUMAN / CONTACT GEOMETRY: establish physical staging before motion. The same adult appears ONLY in shots explicitly marked as a person shot. Empty shots do not inherit body parts from the previous shot. Start each clip from its own approved still and join clips with HARD CUTS. Never combine sitting down, standing up, turning, operating controls and lifting into one continuous action. Lock the camera for human-contact shots. No human is present during desk motion. Camera-only shots have no hand or furniture motion. Body, clothing, desktop and chair are separate opaque solids: resolve occlusion by real depth, never transparency, melting or disappearance.

SHOT CAST AND SPATIAL LOCK:
CAST: ZERO people, ZERO hands and ZERO feet. The chair is fully empty; no trouser legs, shoes or human silhouette beneath it. Cut directly to this approved empty start frame; never dissolve a person away within the clip.
Keep the target detail and its surface or mounting context readable with a tiny straight push-in. Do not force a full-product view into this detail crop; no orbit.

THIS SHOT START FRAME:

Empty room start frame; chair is already clear of the desk edge, with real-scale walkway, bed, doorway and product. No legs or feet beneath the chair.

Freeze this single start pose; do not include the action or end state. No motion trail, duplicate pose or simultaneous before/after states. Reject a faulty anatomical start frame before video generation.

START-FRAME AND CLIP ACCEPTANCE: before animation, check actor/hand count, shoulder-elbow-wrist continuity, pelvis supported by seat, chair back behind the person, and clearance to desktop and armrests. Hand details contain only one right hand; empty shots have no leftover legs or feet. Reject an invalid start frame before animation; do not ask the video model to repair it. Inspect beginning, middle of action and end of each clip. Extra hands, detached torso, intersections or disappearing body mean reject the whole clip and regenerate with less motion or retain the approved still. Blurring, fading or cropping the defect is not a repair. Prompts reduce risk but do not guarantee every generated frame.

HARD FAILURES: wrong SKU, mirrored scene, controller on user-left or a short end, second controller, ordinary columns with wider lower tubes, changed stage count, floating feet, bending/tilting/elastic desktop, extra drawer, extra leg, disappearing cable, unsupported accessory. No generated captions, voice-over, music, promo badge or brand lettering. Add German subtitles and branding in editing. If geometry cannot be kept, reduce the action or retain the approved still; do not redesign the product.
```
### 单镜头 Grok 图生视频提示词
```text
@image1 @image2 @image3

Generate ONE 3-second vertical 9:16 image-to-video clip. In this separate clip task, @image1 is the official product identity reference; @image2 is the approved Furniwell chair photograph; @image3 is THIS SHOT'S already approved start frame. Begin exactly from @image3. Preserve its framing, pose, geometry, room, props and lighting. Do not create a different opening composition.

PRODUCT IDENTITY — highest priority:
Furniwell Economy, SKU G-HAD241222B, variant 44533451587850. White 120 x 60 cm FOUR-PANEL desktop, with the exact seam pattern in @image1. Two white lifting columns, TWO telescoping sections per column. Two original white T-shaped floor feet with their original dark leveling pads. Exactly ONE original black hanging digital keypad under the user-facing FRONT LONG EDGE, on the seated user's anatomical RIGHT. Copy its actual housing, angle, display and buttons from @image1. No drawer, glass top, third column, wheels, extra keypad or added cable tray.
COLUMN ASSEMBLY:
INVERTED TWO-STAGE COLUMNS: the WIDER outer sleeve is UPPER, attached to the underside frame; the NARROWER inner section is LOWER, attached to the floor foot. Thick at the top, slim at the bottom. The thick upper sleeve and desktop travel upward together; the thin lower section remains anchored to the foot, so more of the thin section becomes visible below the upper sleeve. On lowering, the upper sleeve covers more of the lower section. The feet stay planted. Do not swap tube widths, turn either column upside down, add a third section, stretch solid metal, or lift only the tabletop.
CONTROLLER LOCATION:
One black hanging keypad BELOW the front long edge at the seated worker's RIGHT. For a button shot, the worker uses her RIGHT index finger and approaches from her own side of the desk. Keep the real front-right tabletop corner and a portion of the long edge in view; never mount the keypad on the short end.
ORIENTATION: FRONT means the long working edge nearest the seated woman; BACK means the opposite edge. RIGHT always means her anatomical right when she sits facing the work surface, never the camera's right. The keypad stays fixed at that physical right-front working position across cuts. Keep cameras on the worker-facing side of the desk; no camera crossing behind the back edge and no horizontal mirroring. If a reverse view is ever used, her physical right may appear on screen-left; do not relocate the controller to compensate.
CONTINUITY:
In person shots ONLY: the same adult woman, about 30, brown hair in a low ponytail, cream sweater, charcoal trousers. Empty shots have zero people or body parts. One-hand close-ups show only her right hand and its connected wrist/forearm. Keep the same room, props and light direction across hard cuts.
One real-scale modest German bedroom. The SAME white 120 x 60 cm four-panel Economy is already installed beside a bed. Keep the doorway, bed, chair exit space and walking path fixed. One slim laptop only.
COMPANION CHAIR — @image2:
Use only Furniwell high-back office chair, SKU G-OCNC23-0240-2, variant 44820467712266, grey mesh with its original light frame, padded seat and five-spoke base. Chair reference: https://cdn.shopify.com/s/files/1/0580/4615/2882/files/0240-Grey.jpg?v=1698643212
Chair product: https://furniwell.de/products/ergonomischer-burostuhl-mit-verstellbarer-hoher-rucken?variant=44820467712266
Actually upload this chair photograph as @image2. Preserve its separate mesh headrest, upper mesh back, separate lower lumbar support, original arms, seat, five-spoke base and five casters. Never substitute a headrest-free generic white chair or gaming chair. Keep the same chair through every shot. Desk @image1 and chair @image2 are independent shape references. The chair stays grounded when the desk rises. This chair is sold separately; do not imply a free chair or desk-and-chair bundle.
HUMAN / CONTACT GEOMETRY: establish physical staging before motion. The same adult appears ONLY in shots explicitly marked as a person shot. Empty shots do not inherit body parts from the previous shot. Start each clip from its own approved still and join clips with HARD CUTS. Never combine sitting down, standing up, turning, operating controls and lifting into one continuous action. Lock the camera for human-contact shots. No human is present during desk motion. Camera-only shots have no hand or furniture motion. Body, clothing, desktop and chair are separate opaque solids: resolve occlusion by real depth, never transparency, melting or disappearance.

SHOT CAST AND SPATIAL LOCK:
CAST: ZERO people, ZERO hands and ZERO feet. The chair is fully empty; no trouser legs, shoes or human silhouette beneath it. Cut directly to this approved empty start frame; never dissolve a person away within the clip.
Keep the target detail and its surface or mounting context readable with a tiny straight push-in. Do not force a full-product view into this detail crop; no orbit.

ONLY ACTION:

Tiny camera push shows chair clearance only; no entering or sitting down and no rescaling furniture.

END STATE:

Product, props and empty chair remain intact; no body, hands or feet enter.

No internal cut, orbit or unrequested action. Use ONLY the camera or body motion specified for this shot, never both. Preserve everything else.

START-FRAME AND CLIP ACCEPTANCE: before animation, check actor/hand count, shoulder-elbow-wrist continuity, pelvis supported by seat, chair back behind the person, and clearance to desktop and armrests. Hand details contain only one right hand; empty shots have no leftover legs or feet. Reject an invalid start frame before animation; do not ask the video model to repair it. Inspect beginning, middle of action and end of each clip. Extra hands, detached torso, intersections or disappearing body mean reject the whole clip and regenerate with less motion or retain the approved still. Blurring, fading or cropping the defect is not a repair. Prompts reduce risk but do not guarantee every generated frame.

HARD FAILURES: wrong SKU, mirrored scene, controller on user-left or a short end, second controller, ordinary columns with wider lower tubes, changed stage count, floating feet, bending/tilting/elastic desktop, extra drawer, extra leg, disappearing cable, unsupported accessory. No generated captions, voice-over, music, promo badge or brand lettering. Add German subtitles and branding in editing. If geometry cannot be kept, reduce the action or retain the approved still; do not redesign the product.
```

## 镜头 3 · 6–9 秒
后期德语字幕：Alles griffbereit.
### 首帧提示词
```text
@image1 @image2

Create ONE photorealistic 9:16 still image, not a storyboard or collage. The attached @image1 is the exact official desk photograph and the only desk-shape reference; @image2 independently locks the companion chair. Preserve the furniture; change only the human staging and room described below.

Production recipe FV-05, shot 3 START FRAME.

PRODUCT IDENTITY — highest priority:
Furniwell Economy, SKU G-HAD241222B, variant 44533451587850. White 120 x 60 cm FOUR-PANEL desktop, with the exact seam pattern in @image1. Two white lifting columns, TWO telescoping sections per column. Two original white T-shaped floor feet with their original dark leveling pads. Exactly ONE original black hanging digital keypad under the user-facing FRONT LONG EDGE, on the seated user's anatomical RIGHT. Copy its actual housing, angle, display and buttons from @image1. No drawer, glass top, third column, wheels, extra keypad or added cable tray.
COLUMN ASSEMBLY:
INVERTED TWO-STAGE COLUMNS: the WIDER outer sleeve is UPPER, attached to the underside frame; the NARROWER inner section is LOWER, attached to the floor foot. Thick at the top, slim at the bottom. The thick upper sleeve and desktop travel upward together; the thin lower section remains anchored to the foot, so more of the thin section becomes visible below the upper sleeve. On lowering, the upper sleeve covers more of the lower section. The feet stay planted. Do not swap tube widths, turn either column upside down, add a third section, stretch solid metal, or lift only the tabletop.
CONTROLLER LOCATION:
One black hanging keypad BELOW the front long edge at the seated worker's RIGHT. For a button shot, the worker uses her RIGHT index finger and approaches from her own side of the desk. Keep the real front-right tabletop corner and a portion of the long edge in view; never mount the keypad on the short end.
ORIENTATION: FRONT means the long working edge nearest the seated woman; BACK means the opposite edge. RIGHT always means her anatomical right when she sits facing the work surface, never the camera's right. The keypad stays fixed at that physical right-front working position across cuts. Keep cameras on the worker-facing side of the desk; no camera crossing behind the back edge and no horizontal mirroring. If a reverse view is ever used, her physical right may appear on screen-left; do not relocate the controller to compensate.
CONTINUITY:
In person shots ONLY: the same adult woman, about 30, brown hair in a low ponytail, cream sweater, charcoal trousers. Empty shots have zero people or body parts. One-hand close-ups show only her right hand and its connected wrist/forearm. Keep the same room, props and light direction across hard cuts.
One real-scale modest German bedroom. The SAME white 120 x 60 cm four-panel Economy is already installed beside a bed. Keep the doorway, bed, chair exit space and walking path fixed. One slim laptop only.
COMPANION CHAIR — @image2:
Use only Furniwell high-back office chair, SKU G-OCNC23-0240-2, variant 44820467712266, grey mesh with its original light frame, padded seat and five-spoke base. Chair reference: https://cdn.shopify.com/s/files/1/0580/4615/2882/files/0240-Grey.jpg?v=1698643212
Chair product: https://furniwell.de/products/ergonomischer-burostuhl-mit-verstellbarer-hoher-rucken?variant=44820467712266
Actually upload this chair photograph as @image2. Preserve its separate mesh headrest, upper mesh back, separate lower lumbar support, original arms, seat, five-spoke base and five casters. Never substitute a headrest-free generic white chair or gaming chair. Keep the same chair through every shot. Desk @image1 and chair @image2 are independent shape references. The chair stays grounded when the desk rises. This chair is sold separately; do not imply a free chair or desk-and-chair bundle.
HUMAN / CONTACT GEOMETRY: establish physical staging before motion. The same adult appears ONLY in shots explicitly marked as a person shot. Empty shots do not inherit body parts from the previous shot. Start each clip from its own approved still and join clips with HARD CUTS. Never combine sitting down, standing up, turning, operating controls and lifting into one continuous action. Lock the camera for human-contact shots. No human is present during desk motion. Camera-only shots have no hand or furniture motion. Body, clothing, desktop and chair are separate opaque solids: resolve occlusion by real depth, never transparency, melting or disappearance.

SHOT CAST AND SPATIAL LOCK:
CAST: exactly ONE anatomically complete seated adult, already seated in the start frame. Pelvis supported by the seat; chair back behind the torso; chest facing the desk; two thighs connected to the same pelvis and knees; both feet on the floor. Exactly one left and one right hand rest separately on their corresponding thighs, palms down, and stay there: no typing or reaching for controls. Each hand connects continuously through wrist, elbow and shoulder to this one person. The person is in FRONT of the chair back. Never film a face through a foreground chair back or hide the entire head and torso while leaving orphan trouser legs. Keep a visible gap between torso and desktop; armrests remain outside the front desk edge and never enter the desktop.
Locked side view from the person's right, making side profile, shoulder, torso and seat depth readable; never orbit behind or film through the chair back.

THIS SHOT START FRAME:

The same adult is already seated facing the laptop at an approved seated desk height. Hands rest separately on thighs; armrests are not pushed under the desktop.

Freeze this single start pose; do not include the action or end state. No motion trail, duplicate pose or simultaneous before/after states. Reject a faulty anatomical start frame before video generation.

START-FRAME AND CLIP ACCEPTANCE: before animation, check actor/hand count, shoulder-elbow-wrist continuity, pelvis supported by seat, chair back behind the person, and clearance to desktop and armrests. Hand details contain only one right hand; empty shots have no leftover legs or feet. Reject an invalid start frame before animation; do not ask the video model to repair it. Inspect beginning, middle of action and end of each clip. Extra hands, detached torso, intersections or disappearing body mean reject the whole clip and regenerate with less motion or retain the approved still. Blurring, fading or cropping the defect is not a repair. Prompts reduce risk but do not guarantee every generated frame.

HARD FAILURES: wrong SKU, mirrored scene, controller on user-left or a short end, second controller, ordinary columns with wider lower tubes, changed stage count, floating feet, bending/tilting/elastic desktop, extra drawer, extra leg, disappearing cable, unsupported accessory. No generated captions, voice-over, music, promo badge or brand lettering. Add German subtitles and branding in editing. If geometry cannot be kept, reduce the action or retain the approved still; do not redesign the product.
```
### 单镜头 Grok 图生视频提示词
```text
@image1 @image2 @image3

Generate ONE 3-second vertical 9:16 image-to-video clip. In this separate clip task, @image1 is the official product identity reference; @image2 is the approved Furniwell chair photograph; @image3 is THIS SHOT'S already approved start frame. Begin exactly from @image3. Preserve its framing, pose, geometry, room, props and lighting. Do not create a different opening composition.

PRODUCT IDENTITY — highest priority:
Furniwell Economy, SKU G-HAD241222B, variant 44533451587850. White 120 x 60 cm FOUR-PANEL desktop, with the exact seam pattern in @image1. Two white lifting columns, TWO telescoping sections per column. Two original white T-shaped floor feet with their original dark leveling pads. Exactly ONE original black hanging digital keypad under the user-facing FRONT LONG EDGE, on the seated user's anatomical RIGHT. Copy its actual housing, angle, display and buttons from @image1. No drawer, glass top, third column, wheels, extra keypad or added cable tray.
COLUMN ASSEMBLY:
INVERTED TWO-STAGE COLUMNS: the WIDER outer sleeve is UPPER, attached to the underside frame; the NARROWER inner section is LOWER, attached to the floor foot. Thick at the top, slim at the bottom. The thick upper sleeve and desktop travel upward together; the thin lower section remains anchored to the foot, so more of the thin section becomes visible below the upper sleeve. On lowering, the upper sleeve covers more of the lower section. The feet stay planted. Do not swap tube widths, turn either column upside down, add a third section, stretch solid metal, or lift only the tabletop.
CONTROLLER LOCATION:
One black hanging keypad BELOW the front long edge at the seated worker's RIGHT. For a button shot, the worker uses her RIGHT index finger and approaches from her own side of the desk. Keep the real front-right tabletop corner and a portion of the long edge in view; never mount the keypad on the short end.
ORIENTATION: FRONT means the long working edge nearest the seated woman; BACK means the opposite edge. RIGHT always means her anatomical right when she sits facing the work surface, never the camera's right. The keypad stays fixed at that physical right-front working position across cuts. Keep cameras on the worker-facing side of the desk; no camera crossing behind the back edge and no horizontal mirroring. If a reverse view is ever used, her physical right may appear on screen-left; do not relocate the controller to compensate.
CONTINUITY:
In person shots ONLY: the same adult woman, about 30, brown hair in a low ponytail, cream sweater, charcoal trousers. Empty shots have zero people or body parts. One-hand close-ups show only her right hand and its connected wrist/forearm. Keep the same room, props and light direction across hard cuts.
One real-scale modest German bedroom. The SAME white 120 x 60 cm four-panel Economy is already installed beside a bed. Keep the doorway, bed, chair exit space and walking path fixed. One slim laptop only.
COMPANION CHAIR — @image2:
Use only Furniwell high-back office chair, SKU G-OCNC23-0240-2, variant 44820467712266, grey mesh with its original light frame, padded seat and five-spoke base. Chair reference: https://cdn.shopify.com/s/files/1/0580/4615/2882/files/0240-Grey.jpg?v=1698643212
Chair product: https://furniwell.de/products/ergonomischer-burostuhl-mit-verstellbarer-hoher-rucken?variant=44820467712266
Actually upload this chair photograph as @image2. Preserve its separate mesh headrest, upper mesh back, separate lower lumbar support, original arms, seat, five-spoke base and five casters. Never substitute a headrest-free generic white chair or gaming chair. Keep the same chair through every shot. Desk @image1 and chair @image2 are independent shape references. The chair stays grounded when the desk rises. This chair is sold separately; do not imply a free chair or desk-and-chair bundle.
HUMAN / CONTACT GEOMETRY: establish physical staging before motion. The same adult appears ONLY in shots explicitly marked as a person shot. Empty shots do not inherit body parts from the previous shot. Start each clip from its own approved still and join clips with HARD CUTS. Never combine sitting down, standing up, turning, operating controls and lifting into one continuous action. Lock the camera for human-contact shots. No human is present during desk motion. Camera-only shots have no hand or furniture motion. Body, clothing, desktop and chair are separate opaque solids: resolve occlusion by real depth, never transparency, melting or disappearance.

SHOT CAST AND SPATIAL LOCK:
CAST: exactly ONE anatomically complete seated adult, already seated in the start frame. Pelvis supported by the seat; chair back behind the torso; chest facing the desk; two thighs connected to the same pelvis and knees; both feet on the floor. Exactly one left and one right hand rest separately on their corresponding thighs, palms down, and stay there: no typing or reaching for controls. Each hand connects continuously through wrist, elbow and shoulder to this one person. The person is in FRONT of the chair back. Never film a face through a foreground chair back or hide the entire head and torso while leaving orphan trouser legs. Keep a visible gap between torso and desktop; armrests remain outside the front desk edge and never enter the desktop.
Locked side view from the person's right, making side profile, shoulder, torso and seat depth readable; never orbit behind or film through the chair back.

ONLY ACTION:

Only one tiny glance/head nod toward the screen; hands, torso, chair and desk stay in place.

END STATE:

The same complete seated pose, with both hands still on their thighs; no reach or rising.

No internal cut, orbit or unrequested action. Use ONLY the camera or body motion specified for this shot, never both. Preserve everything else.

START-FRAME AND CLIP ACCEPTANCE: before animation, check actor/hand count, shoulder-elbow-wrist continuity, pelvis supported by seat, chair back behind the person, and clearance to desktop and armrests. Hand details contain only one right hand; empty shots have no leftover legs or feet. Reject an invalid start frame before animation; do not ask the video model to repair it. Inspect beginning, middle of action and end of each clip. Extra hands, detached torso, intersections or disappearing body mean reject the whole clip and regenerate with less motion or retain the approved still. Blurring, fading or cropping the defect is not a repair. Prompts reduce risk but do not guarantee every generated frame.

HARD FAILURES: wrong SKU, mirrored scene, controller on user-left or a short end, second controller, ordinary columns with wider lower tubes, changed stage count, floating feet, bending/tilting/elastic desktop, extra drawer, extra leg, disappearing cable, unsupported accessory. No generated captions, voice-over, music, promo badge or brand lettering. Add German subtitles and branding in editing. If geometry cannot be kept, reduce the action or retain the approved still; do not redesign the product.
```

## 镜头 4 · 9–12 秒
后期德语字幕：Deine Höhe.
### 首帧提示词
```text
@image1 @image2

Create ONE photorealistic 9:16 still image, not a storyboard or collage. The attached @image1 is the exact official desk photograph and the only desk-shape reference; @image2 independently locks the companion chair. Preserve the furniture; change only the human staging and room described below.

Production recipe FV-05, shot 4 START FRAME.

PRODUCT IDENTITY — highest priority:
Furniwell Economy, SKU G-HAD241222B, variant 44533451587850. White 120 x 60 cm FOUR-PANEL desktop, with the exact seam pattern in @image1. Two white lifting columns, TWO telescoping sections per column. Two original white T-shaped floor feet with their original dark leveling pads. Exactly ONE original black hanging digital keypad under the user-facing FRONT LONG EDGE, on the seated user's anatomical RIGHT. Copy its actual housing, angle, display and buttons from @image1. No drawer, glass top, third column, wheels, extra keypad or added cable tray.
COLUMN ASSEMBLY:
INVERTED TWO-STAGE COLUMNS: the WIDER outer sleeve is UPPER, attached to the underside frame; the NARROWER inner section is LOWER, attached to the floor foot. Thick at the top, slim at the bottom. The thick upper sleeve and desktop travel upward together; the thin lower section remains anchored to the foot, so more of the thin section becomes visible below the upper sleeve. On lowering, the upper sleeve covers more of the lower section. The feet stay planted. Do not swap tube widths, turn either column upside down, add a third section, stretch solid metal, or lift only the tabletop.
CONTROLLER LOCATION:
One black hanging keypad BELOW the front long edge at the seated worker's RIGHT. For a button shot, the worker uses her RIGHT index finger and approaches from her own side of the desk. Keep the real front-right tabletop corner and a portion of the long edge in view; never mount the keypad on the short end.
ORIENTATION: FRONT means the long working edge nearest the seated woman; BACK means the opposite edge. RIGHT always means her anatomical right when she sits facing the work surface, never the camera's right. The keypad stays fixed at that physical right-front working position across cuts. Keep cameras on the worker-facing side of the desk; no camera crossing behind the back edge and no horizontal mirroring. If a reverse view is ever used, her physical right may appear on screen-left; do not relocate the controller to compensate.
CONTINUITY:
In person shots ONLY: the same adult woman, about 30, brown hair in a low ponytail, cream sweater, charcoal trousers. Empty shots have zero people or body parts. One-hand close-ups show only her right hand and its connected wrist/forearm. Keep the same room, props and light direction across hard cuts.
One real-scale modest German bedroom. The SAME white 120 x 60 cm four-panel Economy is already installed beside a bed. Keep the doorway, bed, chair exit space and walking path fixed. One slim laptop only.
COMPANION CHAIR — @image2:
Use only Furniwell high-back office chair, SKU G-OCNC23-0240-2, variant 44820467712266, grey mesh with its original light frame, padded seat and five-spoke base. Chair reference: https://cdn.shopify.com/s/files/1/0580/4615/2882/files/0240-Grey.jpg?v=1698643212
Chair product: https://furniwell.de/products/ergonomischer-burostuhl-mit-verstellbarer-hoher-rucken?variant=44820467712266
Actually upload this chair photograph as @image2. Preserve its separate mesh headrest, upper mesh back, separate lower lumbar support, original arms, seat, five-spoke base and five casters. Never substitute a headrest-free generic white chair or gaming chair. Keep the same chair through every shot. Desk @image1 and chair @image2 are independent shape references. The chair stays grounded when the desk rises. This chair is sold separately; do not imply a free chair or desk-and-chair bundle.
HUMAN / CONTACT GEOMETRY: establish physical staging before motion. The same adult appears ONLY in shots explicitly marked as a person shot. Empty shots do not inherit body parts from the previous shot. Start each clip from its own approved still and join clips with HARD CUTS. Never combine sitting down, standing up, turning, operating controls and lifting into one continuous action. Lock the camera for human-contact shots. No human is present during desk motion. Camera-only shots have no hand or furniture motion. Body, clothing, desktop and chair are separate opaque solids: resolve occlusion by real depth, never transparency, melting or disappearance.

SHOT CAST AND SPATIAL LOCK:
CAST: only ONE right hand belonging to the same adult, continuously connected to one wrist and forearm entering from the worker-side edge of the frame. No second hand, extra forearm, face or torso in this crop. The left hand stays on the lap, entirely outside the crop. The right hand has five fingers. Keep the start-frame grip and perform only the specified small local action; palm, wrist and forearm stay connected with unchanged lengths and no regripping. No hand emerges through the desktop, chair or keypad. If contact is occluded, repair the start-frame camera position instead of inventing another hand.
Locked contextual close-up showing the real component, its mounting edge/surface and contact point. No push-in, orbit or extreme wide angle.

THIS SHOT START FRAME:

The exact SKU's original control remains at its original user-right front LONG edge. Only one right hand and connected wrist/forearm are visible. Its index fingertip is already at one existing button; the other four fingers rest curled. Keep the tabletop corner and contact point readable.

Freeze this single start pose; do not include the action or end state. No motion trail, duplicate pose or simultaneous before/after states. Reject a faulty anatomical start frame before video generation.

START-FRAME AND CLIP ACCEPTANCE: before animation, check actor/hand count, shoulder-elbow-wrist continuity, pelvis supported by seat, chair back behind the person, and clearance to desktop and armrests. Hand details contain only one right hand; empty shots have no leftover legs or feet. Reject an invalid start frame before animation; do not ask the video model to repair it. Inspect beginning, middle of action and end of each clip. Extra hands, detached torso, intersections or disappearing body mean reject the whole clip and regenerate with less motion or retain the approved still. Blurring, fading or cropping the defect is not a repair. Prompts reduce risk but do not guarantee every generated frame.

HARD FAILURES: wrong SKU, mirrored scene, controller on user-left or a short end, second controller, ordinary columns with wider lower tubes, changed stage count, floating feet, bending/tilting/elastic desktop, extra drawer, extra leg, disappearing cable, unsupported accessory. No generated captions, voice-over, music, promo badge or brand lettering. Add German subtitles and branding in editing. If geometry cannot be kept, reduce the action or retain the approved still; do not redesign the product.
```
### 单镜头 Grok 图生视频提示词
```text
@image1 @image2 @image3

Generate ONE 3-second vertical 9:16 image-to-video clip. In this separate clip task, @image1 is the official product identity reference; @image2 is the approved Furniwell chair photograph; @image3 is THIS SHOT'S already approved start frame. Begin exactly from @image3. Preserve its framing, pose, geometry, room, props and lighting. Do not create a different opening composition.

PRODUCT IDENTITY — highest priority:
Furniwell Economy, SKU G-HAD241222B, variant 44533451587850. White 120 x 60 cm FOUR-PANEL desktop, with the exact seam pattern in @image1. Two white lifting columns, TWO telescoping sections per column. Two original white T-shaped floor feet with their original dark leveling pads. Exactly ONE original black hanging digital keypad under the user-facing FRONT LONG EDGE, on the seated user's anatomical RIGHT. Copy its actual housing, angle, display and buttons from @image1. No drawer, glass top, third column, wheels, extra keypad or added cable tray.
COLUMN ASSEMBLY:
INVERTED TWO-STAGE COLUMNS: the WIDER outer sleeve is UPPER, attached to the underside frame; the NARROWER inner section is LOWER, attached to the floor foot. Thick at the top, slim at the bottom. The thick upper sleeve and desktop travel upward together; the thin lower section remains anchored to the foot, so more of the thin section becomes visible below the upper sleeve. On lowering, the upper sleeve covers more of the lower section. The feet stay planted. Do not swap tube widths, turn either column upside down, add a third section, stretch solid metal, or lift only the tabletop.
CONTROLLER LOCATION:
One black hanging keypad BELOW the front long edge at the seated worker's RIGHT. For a button shot, the worker uses her RIGHT index finger and approaches from her own side of the desk. Keep the real front-right tabletop corner and a portion of the long edge in view; never mount the keypad on the short end.
ORIENTATION: FRONT means the long working edge nearest the seated woman; BACK means the opposite edge. RIGHT always means her anatomical right when she sits facing the work surface, never the camera's right. The keypad stays fixed at that physical right-front working position across cuts. Keep cameras on the worker-facing side of the desk; no camera crossing behind the back edge and no horizontal mirroring. If a reverse view is ever used, her physical right may appear on screen-left; do not relocate the controller to compensate.
CONTINUITY:
In person shots ONLY: the same adult woman, about 30, brown hair in a low ponytail, cream sweater, charcoal trousers. Empty shots have zero people or body parts. One-hand close-ups show only her right hand and its connected wrist/forearm. Keep the same room, props and light direction across hard cuts.
One real-scale modest German bedroom. The SAME white 120 x 60 cm four-panel Economy is already installed beside a bed. Keep the doorway, bed, chair exit space and walking path fixed. One slim laptop only.
COMPANION CHAIR — @image2:
Use only Furniwell high-back office chair, SKU G-OCNC23-0240-2, variant 44820467712266, grey mesh with its original light frame, padded seat and five-spoke base. Chair reference: https://cdn.shopify.com/s/files/1/0580/4615/2882/files/0240-Grey.jpg?v=1698643212
Chair product: https://furniwell.de/products/ergonomischer-burostuhl-mit-verstellbarer-hoher-rucken?variant=44820467712266
Actually upload this chair photograph as @image2. Preserve its separate mesh headrest, upper mesh back, separate lower lumbar support, original arms, seat, five-spoke base and five casters. Never substitute a headrest-free generic white chair or gaming chair. Keep the same chair through every shot. Desk @image1 and chair @image2 are independent shape references. The chair stays grounded when the desk rises. This chair is sold separately; do not imply a free chair or desk-and-chair bundle.
HUMAN / CONTACT GEOMETRY: establish physical staging before motion. The same adult appears ONLY in shots explicitly marked as a person shot. Empty shots do not inherit body parts from the previous shot. Start each clip from its own approved still and join clips with HARD CUTS. Never combine sitting down, standing up, turning, operating controls and lifting into one continuous action. Lock the camera for human-contact shots. No human is present during desk motion. Camera-only shots have no hand or furniture motion. Body, clothing, desktop and chair are separate opaque solids: resolve occlusion by real depth, never transparency, melting or disappearance.

SHOT CAST AND SPATIAL LOCK:
CAST: only ONE right hand belonging to the same adult, continuously connected to one wrist and forearm entering from the worker-side edge of the frame. No second hand, extra forearm, face or torso in this crop. The left hand stays on the lap, entirely outside the crop. The right hand has five fingers. Keep the start-frame grip and perform only the specified small local action; palm, wrist and forearm stay connected with unchanged lengths and no regripping. No hand emerges through the desktop, chair or keypad. If contact is occluded, repair the start-frame camera position instead of inventing another hand.
Locked contextual close-up showing the real component, its mounting edge/surface and contact point. No push-in, orbit or extreme wide angle.

ONLY ACTION:

Only the right index finger makes one tiny press and stops. Wrist, forearm and other fingers keep their positions. The desk remains stationary throughout; this shot establishes the control location, with lifting in a separate empty shot.

END STATE:

Still one continuously attached right hand; original keypad, edge and desk height unchanged.

No internal cut, orbit or unrequested action. Use ONLY the camera or body motion specified for this shot, never both. Preserve everything else.

START-FRAME AND CLIP ACCEPTANCE: before animation, check actor/hand count, shoulder-elbow-wrist continuity, pelvis supported by seat, chair back behind the person, and clearance to desktop and armrests. Hand details contain only one right hand; empty shots have no leftover legs or feet. Reject an invalid start frame before animation; do not ask the video model to repair it. Inspect beginning, middle of action and end of each clip. Extra hands, detached torso, intersections or disappearing body mean reject the whole clip and regenerate with less motion or retain the approved still. Blurring, fading or cropping the defect is not a repair. Prompts reduce risk but do not guarantee every generated frame.

HARD FAILURES: wrong SKU, mirrored scene, controller on user-left or a short end, second controller, ordinary columns with wider lower tubes, changed stage count, floating feet, bending/tilting/elastic desktop, extra drawer, extra leg, disappearing cable, unsupported accessory. No generated captions, voice-over, music, promo badge or brand lettering. Add German subtitles and branding in editing. If geometry cannot be kept, reduce the action or retain the approved still; do not redesign the product.
```

## 镜头 5 · 12–15 秒
后期德语字幕：Finde deine passende Größe.
### 首帧提示词
```text
@image1 @image2

Create ONE photorealistic 9:16 still image, not a storyboard or collage. The attached @image1 is the exact official desk photograph and the only desk-shape reference; @image2 independently locks the companion chair. Preserve the furniture; change only the human staging and room described below.

Production recipe FV-05, shot 5 START FRAME.

PRODUCT IDENTITY — highest priority:
Furniwell Economy, SKU G-HAD241222B, variant 44533451587850. White 120 x 60 cm FOUR-PANEL desktop, with the exact seam pattern in @image1. Two white lifting columns, TWO telescoping sections per column. Two original white T-shaped floor feet with their original dark leveling pads. Exactly ONE original black hanging digital keypad under the user-facing FRONT LONG EDGE, on the seated user's anatomical RIGHT. Copy its actual housing, angle, display and buttons from @image1. No drawer, glass top, third column, wheels, extra keypad or added cable tray.
COLUMN ASSEMBLY:
INVERTED TWO-STAGE COLUMNS: the WIDER outer sleeve is UPPER, attached to the underside frame; the NARROWER inner section is LOWER, attached to the floor foot. Thick at the top, slim at the bottom. The thick upper sleeve and desktop travel upward together; the thin lower section remains anchored to the foot, so more of the thin section becomes visible below the upper sleeve. On lowering, the upper sleeve covers more of the lower section. The feet stay planted. Do not swap tube widths, turn either column upside down, add a third section, stretch solid metal, or lift only the tabletop.
CONTROLLER LOCATION:
One black hanging keypad BELOW the front long edge at the seated worker's RIGHT. For a button shot, the worker uses her RIGHT index finger and approaches from her own side of the desk. Keep the real front-right tabletop corner and a portion of the long edge in view; never mount the keypad on the short end.
ORIENTATION: FRONT means the long working edge nearest the seated woman; BACK means the opposite edge. RIGHT always means her anatomical right when she sits facing the work surface, never the camera's right. The keypad stays fixed at that physical right-front working position across cuts. Keep cameras on the worker-facing side of the desk; no camera crossing behind the back edge and no horizontal mirroring. If a reverse view is ever used, her physical right may appear on screen-left; do not relocate the controller to compensate.
CONTINUITY:
In person shots ONLY: the same adult woman, about 30, brown hair in a low ponytail, cream sweater, charcoal trousers. Empty shots have zero people or body parts. One-hand close-ups show only her right hand and its connected wrist/forearm. Keep the same room, props and light direction across hard cuts.
One real-scale modest German bedroom. The SAME white 120 x 60 cm four-panel Economy is already installed beside a bed. Keep the doorway, bed, chair exit space and walking path fixed. One slim laptop only.
COMPANION CHAIR — @image2:
Use only Furniwell high-back office chair, SKU G-OCNC23-0240-2, variant 44820467712266, grey mesh with its original light frame, padded seat and five-spoke base. Chair reference: https://cdn.shopify.com/s/files/1/0580/4615/2882/files/0240-Grey.jpg?v=1698643212
Chair product: https://furniwell.de/products/ergonomischer-burostuhl-mit-verstellbarer-hoher-rucken?variant=44820467712266
Actually upload this chair photograph as @image2. Preserve its separate mesh headrest, upper mesh back, separate lower lumbar support, original arms, seat, five-spoke base and five casters. Never substitute a headrest-free generic white chair or gaming chair. Keep the same chair through every shot. Desk @image1 and chair @image2 are independent shape references. The chair stays grounded when the desk rises. This chair is sold separately; do not imply a free chair or desk-and-chair bundle.
HUMAN / CONTACT GEOMETRY: establish physical staging before motion. The same adult appears ONLY in shots explicitly marked as a person shot. Empty shots do not inherit body parts from the previous shot. Start each clip from its own approved still and join clips with HARD CUTS. Never combine sitting down, standing up, turning, operating controls and lifting into one continuous action. Lock the camera for human-contact shots. No human is present during desk motion. Camera-only shots have no hand or furniture motion. Body, clothing, desktop and chair are separate opaque solids: resolve occlusion by real depth, never transparency, melting or disappearance.

SHOT CAST AND SPATIAL LOCK:
CAST: ZERO people, ZERO hands and ZERO feet. The chair is fully empty; no trouser legs, shoes or human silhouette beneath it. Cut directly to this approved empty start frame; never dissolve a person away within the clip.
Keep the complete product and floor feet readable. A very small straight push-in only; no orbit or perspective switch.

THIS SHOT START FRAME:

The exact product and the same specified chair are already staged. Full product, empty scene, furniture and props still.

Freeze this single start pose; do not include the action or end state. No motion trail, duplicate pose or simultaneous before/after states. Reject a faulty anatomical start frame before video generation.

START-FRAME AND CLIP ACCEPTANCE: before animation, check actor/hand count, shoulder-elbow-wrist continuity, pelvis supported by seat, chair back behind the person, and clearance to desktop and armrests. Hand details contain only one right hand; empty shots have no leftover legs or feet. Reject an invalid start frame before animation; do not ask the video model to repair it. Inspect beginning, middle of action and end of each clip. Extra hands, detached torso, intersections or disappearing body mean reject the whole clip and regenerate with less motion or retain the approved still. Blurring, fading or cropping the defect is not a repair. Prompts reduce risk but do not guarantee every generated frame.

HARD FAILURES: wrong SKU, mirrored scene, controller on user-left or a short end, second controller, ordinary columns with wider lower tubes, changed stage count, floating feet, bending/tilting/elastic desktop, extra drawer, extra leg, disappearing cable, unsupported accessory. No generated captions, voice-over, music, promo badge or brand lettering. Add German subtitles and branding in editing. If geometry cannot be kept, reduce the action or retain the approved still; do not redesign the product.
```
### 单镜头 Grok 图生视频提示词
```text
@image1 @image2 @image3

Generate ONE 3-second vertical 9:16 image-to-video clip. In this separate clip task, @image1 is the official product identity reference; @image2 is the approved Furniwell chair photograph; @image3 is THIS SHOT'S already approved start frame. Begin exactly from @image3. Preserve its framing, pose, geometry, room, props and lighting. Do not create a different opening composition.

PRODUCT IDENTITY — highest priority:
Furniwell Economy, SKU G-HAD241222B, variant 44533451587850. White 120 x 60 cm FOUR-PANEL desktop, with the exact seam pattern in @image1. Two white lifting columns, TWO telescoping sections per column. Two original white T-shaped floor feet with their original dark leveling pads. Exactly ONE original black hanging digital keypad under the user-facing FRONT LONG EDGE, on the seated user's anatomical RIGHT. Copy its actual housing, angle, display and buttons from @image1. No drawer, glass top, third column, wheels, extra keypad or added cable tray.
COLUMN ASSEMBLY:
INVERTED TWO-STAGE COLUMNS: the WIDER outer sleeve is UPPER, attached to the underside frame; the NARROWER inner section is LOWER, attached to the floor foot. Thick at the top, slim at the bottom. The thick upper sleeve and desktop travel upward together; the thin lower section remains anchored to the foot, so more of the thin section becomes visible below the upper sleeve. On lowering, the upper sleeve covers more of the lower section. The feet stay planted. Do not swap tube widths, turn either column upside down, add a third section, stretch solid metal, or lift only the tabletop.
CONTROLLER LOCATION:
One black hanging keypad BELOW the front long edge at the seated worker's RIGHT. For a button shot, the worker uses her RIGHT index finger and approaches from her own side of the desk. Keep the real front-right tabletop corner and a portion of the long edge in view; never mount the keypad on the short end.
ORIENTATION: FRONT means the long working edge nearest the seated woman; BACK means the opposite edge. RIGHT always means her anatomical right when she sits facing the work surface, never the camera's right. The keypad stays fixed at that physical right-front working position across cuts. Keep cameras on the worker-facing side of the desk; no camera crossing behind the back edge and no horizontal mirroring. If a reverse view is ever used, her physical right may appear on screen-left; do not relocate the controller to compensate.
CONTINUITY:
In person shots ONLY: the same adult woman, about 30, brown hair in a low ponytail, cream sweater, charcoal trousers. Empty shots have zero people or body parts. One-hand close-ups show only her right hand and its connected wrist/forearm. Keep the same room, props and light direction across hard cuts.
One real-scale modest German bedroom. The SAME white 120 x 60 cm four-panel Economy is already installed beside a bed. Keep the doorway, bed, chair exit space and walking path fixed. One slim laptop only.
COMPANION CHAIR — @image2:
Use only Furniwell high-back office chair, SKU G-OCNC23-0240-2, variant 44820467712266, grey mesh with its original light frame, padded seat and five-spoke base. Chair reference: https://cdn.shopify.com/s/files/1/0580/4615/2882/files/0240-Grey.jpg?v=1698643212
Chair product: https://furniwell.de/products/ergonomischer-burostuhl-mit-verstellbarer-hoher-rucken?variant=44820467712266
Actually upload this chair photograph as @image2. Preserve its separate mesh headrest, upper mesh back, separate lower lumbar support, original arms, seat, five-spoke base and five casters. Never substitute a headrest-free generic white chair or gaming chair. Keep the same chair through every shot. Desk @image1 and chair @image2 are independent shape references. The chair stays grounded when the desk rises. This chair is sold separately; do not imply a free chair or desk-and-chair bundle.
HUMAN / CONTACT GEOMETRY: establish physical staging before motion. The same adult appears ONLY in shots explicitly marked as a person shot. Empty shots do not inherit body parts from the previous shot. Start each clip from its own approved still and join clips with HARD CUTS. Never combine sitting down, standing up, turning, operating controls and lifting into one continuous action. Lock the camera for human-contact shots. No human is present during desk motion. Camera-only shots have no hand or furniture motion. Body, clothing, desktop and chair are separate opaque solids: resolve occlusion by real depth, never transparency, melting or disappearance.

SHOT CAST AND SPATIAL LOCK:
CAST: ZERO people, ZERO hands and ZERO feet. The chair is fully empty; no trouser legs, shoes or human silhouette beneath it. Cut directly to this approved empty start frame; never dissolve a person away within the clip.
Keep the complete product and floor feet readable. A very small straight push-in only; no orbit or perspective switch.

ONLY ACTION:

Only the camera makes a tiny straight push-in; product, chair and props remain still.

END STATE:

The same complete product and empty chair; room for an editor-added CTA.

No internal cut, orbit or unrequested action. Use ONLY the camera or body motion specified for this shot, never both. Preserve everything else.

START-FRAME AND CLIP ACCEPTANCE: before animation, check actor/hand count, shoulder-elbow-wrist continuity, pelvis supported by seat, chair back behind the person, and clearance to desktop and armrests. Hand details contain only one right hand; empty shots have no leftover legs or feet. Reject an invalid start frame before animation; do not ask the video model to repair it. Inspect beginning, middle of action and end of each clip. Extra hands, detached torso, intersections or disappearing body mean reject the whole clip and regenerate with less motion or retain the approved still. Blurring, fading or cropping the defect is not a repair. Prompts reduce risk but do not guarantee every generated frame.

HARD FAILURES: wrong SKU, mirrored scene, controller on user-left or a short end, second controller, ordinary columns with wider lower tubes, changed stage count, floating feet, bending/tilting/elastic desktop, extra drawer, extra leg, disappearing cable, unsupported accessory. No generated captions, voice-over, music, promo badge or brand lettering. Add German subtitles and branding in editing. If geometry cannot be kept, reduce the action or retain the approved still; do not redesign the product.
```

## 验收
- 产品名称、SKU、尺寸、颜色与三视图一致；四拼、整板、玻璃桌不能混用。
- 控制器只有一个，位于入座者右侧；外挂与 G2 内嵌形式正确；没有装到短边。
- 倒装立柱粗管在上、细管在下；节数、立柱数量、脚型正确；底脚贴地。
- 升降时桌面与上部套管一起移动；桌面水平；没有拉伸变形或全行程瞬移。
- G2 只有原装一个抽屉；L 桌保留原朝向及三根立柱；未确认结构不补画。
- 对比首帧、运动中间帧和尾帧。发现多手、断身、人体消失、穿桌板/椅架、错款或结构变形，整段退回重做；不通过模糊、淡化或裁切掩盖错误，不进入投放。
- 搭配椅是指定灰色高背款，独立头枕、腰靠、扶手与五爪底座正确；image2 不是首帧，image3 才是当前镜头首帧。
- 人物镜头恰好一个完整成年人，双手分放对应大腿；椅背在身后，骨盆由坐垫承托。不能从椅背后拍正脸，不能只剩椅下裤腿。
- 手部特写只见一只右手与连续手腕前臂；无人镜头连残留的手、腿、脚与人影也不能有。

制作边界：提示词与参考图可降低结构错误，不能保证生成模型每帧正确。首帧与成片都要人工核对；错款画面不进入投放。

# FV-06 · 电竞与工作，自然切换 · Grok 产品锁定版
更新日期：2026-10-29（北京时间）；研究样本日期仍为 2026-10-27。
固定产品：Economy 白色四拼桌板 120 × 60 cm
SKU：G-HAD241222B；variant：44533451587850
商品：https://furniwell.de/products/economy-elektrisch-hohenverstellbarer-schreibtisch?variant=44533451587850
官网原图 / image1：https://cdn.shopify.com/s/files/1/0580/4615/2882/files/EconomyElektrischHohenverstellbarerSchreibtisch-sku_1.jpg?v=1764671992
搭配椅 / image2：G-OCNC23-0240-2；https://furniwell.de/products/ergonomischer-burostuhl-mit-verstellbarer-hoher-rucken?variant=44820467712266
椅子官网原图：https://cdn.shopify.com/s/files/1/0580/4615/2882/files/0240-Grey.jpg?v=1698643212
每镜头首帧作为 image3；搭配椅单独销售。更换椅子款式或颜色请使用网页的中文 Prompt 生成区。

## 使用顺序
1. 先下载主商品原图与灰色高背办公椅原图并实际上传，分别作为 image1、image2。只粘贴商品链接不会绑定图片。
2. 先复制每镜头的“首帧提示词”制作单张 9:16 首帧；先验收人数、手数、肩肘腕连接、椅背在身后及桌沿间隙，再核对产品。错误首帧必须重做，不能交给视频模型修复。
3. 推荐分镜生成：每镜头开独立任务，先上传主商品原图作为 image1、搭配椅原图作为 image2，再上传本镜头已验收首帧作为 image3。image2 不再指首帧，不要上传另一镜头的首帧。
4. 15 秒总提示词现在是剪辑计划，不直接整段交给 Grok 连续生成。每镜头只复制本段 3 秒图生视频指令；image1 主商品、image2 搭配椅、image3 当前首帧。界面不识别标签时手动指定附件。
5. 每段只做一个小动作：人物镜头桌椅固定，手部特写仅一只右手，升降镜头无人且椅子在运动区外。不生成入座、起身或转身过程；用硬切连接已完成状态。字幕、口播、品牌和促销信息后期添加。

## 固定产品结构
- 白色 120 × 60 cm；四片拼接桌板，保留原图拼缝。
- 两根白色立柱，每根两节：粗外套管在上，细内管在下并连接底脚。
- 两只原装白色长条 T 脚，保留黑色脚垫、横梁与线缆。
- 仅一个黑色外挂手控器：入座者右手侧、靠人的前长边下方；不是右侧短边。
核验边界：已对照同一变体官方主图确认两节倒装。

## 15 秒剪辑计划（纯英文；不要整段连续生成）
```text
Production recipe FV-06. EDIT PLAN ONLY: five INDEPENDENT 3-second vertical 9:16 clips, joined into a 15-second ad. Do NOT submit this complete plan as a single continuous Grok generation. Make and approve each start still, then copy only that shot's image-to-video prompt. Actually upload @image1 as the official product reference and @image2 as the companion chair reference; each separate clip also uses its own approved @image3.

PRODUCT IDENTITY — highest priority:
Furniwell Economy, SKU G-HAD241222B, variant 44533451587850. White 120 x 60 cm FOUR-PANEL desktop, with the exact seam pattern in @image1. Two white lifting columns, TWO telescoping sections per column. Two original white T-shaped floor feet with their original dark leveling pads. Exactly ONE original black hanging digital keypad under the user-facing FRONT LONG EDGE, on the seated user's anatomical RIGHT. Copy its actual housing, angle, display and buttons from @image1. No drawer, glass top, third column, wheels, extra keypad or added cable tray.
COLUMN ASSEMBLY:
INVERTED TWO-STAGE COLUMNS: the WIDER outer sleeve is UPPER, attached to the underside frame; the NARROWER inner section is LOWER, attached to the floor foot. Thick at the top, slim at the bottom. The thick upper sleeve and desktop travel upward together; the thin lower section remains anchored to the foot, so more of the thin section becomes visible below the upper sleeve. On lowering, the upper sleeve covers more of the lower section. The feet stay planted. Do not swap tube widths, turn either column upside down, add a third section, stretch solid metal, or lift only the tabletop.
CONTROLLER LOCATION:
One black hanging keypad BELOW the front long edge at the seated worker's RIGHT. For a button shot, the worker uses her RIGHT index finger and approaches from her own side of the desk. Keep the real front-right tabletop corner and a portion of the long edge in view; never mount the keypad on the short end.
ORIENTATION: FRONT means the long working edge nearest the seated woman; BACK means the opposite edge. RIGHT always means her anatomical right when she sits facing the work surface, never the camera's right. The keypad stays fixed at that physical right-front working position across cuts. Keep cameras on the worker-facing side of the desk; no camera crossing behind the back edge and no horizontal mirroring. If a reverse view is ever used, her physical right may appear on screen-left; do not relocate the controller to compensate.
CONTINUITY:
In person shots ONLY: the same adult woman, about 30, brown hair in a low ponytail, cream sweater, charcoal trousers. Empty shots have zero people or body parts. One-hand close-ups show only her right hand and its connected wrist/forearm. Keep the same room, props and light direction across hard cuts.
One German home office used for gaming and everyday work. One laptop, one mouse and the same chair. Same soft left-side window light, same woman and same four-panel desk throughout. No added RGB parts on the desk.
COMPANION CHAIR — @image2:
Use only Furniwell high-back office chair, SKU G-OCNC23-0240-2, variant 44820467712266, grey mesh with its original light frame, padded seat and five-spoke base. Chair reference: https://cdn.shopify.com/s/files/1/0580/4615/2882/files/0240-Grey.jpg?v=1698643212
Chair product: https://furniwell.de/products/ergonomischer-burostuhl-mit-verstellbarer-hoher-rucken?variant=44820467712266
Actually upload this chair photograph as @image2. Preserve its separate mesh headrest, upper mesh back, separate lower lumbar support, original arms, seat, five-spoke base and five casters. Never substitute a headrest-free generic white chair or gaming chair. Keep the same chair through every shot. Desk @image1 and chair @image2 are independent shape references. The chair stays grounded when the desk rises. This chair is sold separately; do not imply a free chair or desk-and-chair bundle.
HUMAN / CONTACT GEOMETRY: establish physical staging before motion. The same adult appears ONLY in shots explicitly marked as a person shot. Empty shots do not inherit body parts from the previous shot. Start each clip from its own approved still and join clips with HARD CUTS. Never combine sitting down, standing up, turning, operating controls and lifting into one continuous action. Lock the camera for human-contact shots. No human is present during desk motion. Camera-only shots have no hand or furniture motion. Body, clothing, desktop and chair are separate opaque solids: resolve occlusion by real depth, never transparency, melting or disappearance.

EDITING: HARD CUTS between already-established poses. Never animate sitting down, rising from the chair, turning across the desk, or a full sit-to-stand lift.

SHOT 1, 0-3s: @image1 @image2
SHOT CAST AND SPATIAL LOCK:
CAST: exactly ONE anatomically complete seated adult, already seated in the start frame. Pelvis supported by the seat; chair back behind the torso; chest facing the desk; two thighs connected to the same pelvis and knees; both feet on the floor. Exactly one left and one right hand rest separately on their corresponding thighs, palms down, and stay there: no typing or reaching for controls. Each hand connects continuously through wrist, elbow and shoulder to this one person. The person is in FRONT of the chair back. Never film a face through a foreground chair back or hide the entire head and torso while leaving orphan trouser legs. Keep a visible gap between torso and desktop; armrests remain outside the front desk edge and never enter the desktop.
Locked side view from the person's right, making side profile, shoulder, torso and seat depth readable; never orbit behind or film through the chair back.
START: The same adult is already seated facing the laptop at an approved seated desk height. Hands rest separately on thighs; armrests are not pushed under the desktop.
ACTION: Only one tiny glance/head nod toward the screen; hands, torso, chair and desk stay in place.
END: The same complete seated pose, with both hands still on their thighs; no reach or rising.

SHOT 2, 3-6s: @image1 @image2
SHOT CAST AND SPATIAL LOCK:
CAST: only ONE right hand belonging to the same adult, continuously connected to one wrist and forearm entering from the worker-side edge of the frame. No second hand, extra forearm, face or torso in this crop. The left hand stays on the lap, entirely outside the crop. The right hand has five fingers. Keep the start-frame grip and perform only the specified small local action; palm, wrist and forearm stay connected with unchanged lengths and no regripping. No hand emerges through the desktop, chair or keypad. If contact is occluded, repair the start-frame camera position instead of inventing another hand.
Locked contextual close-up showing the real component, its mounting edge/surface and contact point. No push-in, orbit or extreme wide angle.
START: The exact SKU's original control remains at its original user-right front LONG edge. Only one right hand and connected wrist/forearm are visible. Its index fingertip is already at one existing button; the other four fingers rest curled. Keep the tabletop corner and contact point readable.
ACTION: Only the right index finger makes one tiny press and stops. Wrist, forearm and other fingers keep their positions. The desk remains stationary throughout; this shot establishes the control location, with lifting in a separate empty shot.
END: Still one continuously attached right hand; original keypad, edge and desk height unchanged.

SHOT 3, 6-9s: @image1 @image2
SHOT CAST AND SPATIAL LOCK:
CAST: ZERO people, ZERO hands and ZERO feet. The chair is fully empty; no trouser legs, shoes or human silhouette beneath it. Cut directly to this approved empty start frame; never dissolve a person away within the clip.
Locked camera and focal length; no push, zoom or orbit.
The ONLY motion is verified small desk travel. No human enters the motion zone; no button-operating hand is shown.
START: Empty lifting shot with level top, both complete inverted columns and floor feet readable. Chair is already clear of the lifting path; armrests have clearance from the top and frame. Original cable has slack; feet are grounded.
ACTION: Only a SMALL partial lift of a few centimeters: the wider upper sleeves and level desktop move upward together, revealing more of the anchored narrow lower sections. Feet and camera fixed; no person or hand; chair still. No full sit-to-stand transition in three seconds.
END: The same desk after the small lift, with cable slack, feet and chair unchanged.

SHOT 4, 9-12s: @image1 @image2
SHOT CAST AND SPATIAL LOCK:
CAST: exactly ONE anatomically complete seated adult, already seated in the start frame. Pelvis supported by the seat; chair back behind the torso; chest facing the desk; two thighs connected to the same pelvis and knees; both feet on the floor. Exactly one left and one right hand rest separately on their corresponding thighs, palms down, and stay there: no typing or reaching for controls. Each hand connects continuously through wrist, elbow and shoulder to this one person. The person is in FRONT of the chair back. Never film a face through a foreground chair back or hide the entire head and torso while leaving orphan trouser legs. Keep a visible gap between torso and desktop; armrests remain outside the front desk edge and never enter the desktop.
Locked side view from the person's right, making side profile, shoulder, torso and seat depth readable; never orbit behind or film through the chair back.
START: The same adult is already seated facing the laptop at an approved seated desk height. Hands rest separately on thighs; armrests are not pushed under the desktop.
ACTION: Only one tiny glance/head nod toward the screen; hands, torso, chair and desk stay in place.
END: The same complete seated pose, with both hands still on their thighs; no reach or rising.

SHOT 5, 12-15s: @image1 @image2
SHOT CAST AND SPATIAL LOCK:
CAST: ZERO people, ZERO hands and ZERO feet. The chair is fully empty; no trouser legs, shoes or human silhouette beneath it. Cut directly to this approved empty start frame; never dissolve a person away within the clip.
Keep the complete product and floor feet readable. A very small straight push-in only; no orbit or perspective switch.
START: The exact product and the same specified chair are already staged. Full product, empty scene, furniture and props still.
ACTION: Only the camera makes a tiny straight push-in; product, chair and props remain still.
END: The same complete product and empty chair; room for an editor-added CTA.

START-FRAME AND CLIP ACCEPTANCE: before animation, check actor/hand count, shoulder-elbow-wrist continuity, pelvis supported by seat, chair back behind the person, and clearance to desktop and armrests. Hand details contain only one right hand; empty shots have no leftover legs or feet. Reject an invalid start frame before animation; do not ask the video model to repair it. Inspect beginning, middle of action and end of each clip. Extra hands, detached torso, intersections or disappearing body mean reject the whole clip and regenerate with less motion or retain the approved still. Blurring, fading or cropping the defect is not a repair. Prompts reduce risk but do not guarantee every generated frame.

HARD FAILURES: wrong SKU, mirrored scene, controller on user-left or a short end, second controller, ordinary columns with wider lower tubes, changed stage count, floating feet, bending/tilting/elastic desktop, extra drawer, extra leg, disappearing cable, unsupported accessory. No generated captions, voice-over, music, promo badge or brand lettering. Add German subtitles and branding in editing. If geometry cannot be kept, reduce the action or retain the approved still; do not redesign the product.
```

## 镜头 1 · 0–3 秒
后期德语字幕：Für deine Gaming-Pause.
### 首帧提示词
```text
@image1 @image2

Create ONE photorealistic 9:16 still image, not a storyboard or collage. The attached @image1 is the exact official desk photograph and the only desk-shape reference; @image2 independently locks the companion chair. Preserve the furniture; change only the human staging and room described below.

Production recipe FV-06, shot 1 START FRAME.

PRODUCT IDENTITY — highest priority:
Furniwell Economy, SKU G-HAD241222B, variant 44533451587850. White 120 x 60 cm FOUR-PANEL desktop, with the exact seam pattern in @image1. Two white lifting columns, TWO telescoping sections per column. Two original white T-shaped floor feet with their original dark leveling pads. Exactly ONE original black hanging digital keypad under the user-facing FRONT LONG EDGE, on the seated user's anatomical RIGHT. Copy its actual housing, angle, display and buttons from @image1. No drawer, glass top, third column, wheels, extra keypad or added cable tray.
COLUMN ASSEMBLY:
INVERTED TWO-STAGE COLUMNS: the WIDER outer sleeve is UPPER, attached to the underside frame; the NARROWER inner section is LOWER, attached to the floor foot. Thick at the top, slim at the bottom. The thick upper sleeve and desktop travel upward together; the thin lower section remains anchored to the foot, so more of the thin section becomes visible below the upper sleeve. On lowering, the upper sleeve covers more of the lower section. The feet stay planted. Do not swap tube widths, turn either column upside down, add a third section, stretch solid metal, or lift only the tabletop.
CONTROLLER LOCATION:
One black hanging keypad BELOW the front long edge at the seated worker's RIGHT. For a button shot, the worker uses her RIGHT index finger and approaches from her own side of the desk. Keep the real front-right tabletop corner and a portion of the long edge in view; never mount the keypad on the short end.
ORIENTATION: FRONT means the long working edge nearest the seated woman; BACK means the opposite edge. RIGHT always means her anatomical right when she sits facing the work surface, never the camera's right. The keypad stays fixed at that physical right-front working position across cuts. Keep cameras on the worker-facing side of the desk; no camera crossing behind the back edge and no horizontal mirroring. If a reverse view is ever used, her physical right may appear on screen-left; do not relocate the controller to compensate.
CONTINUITY:
In person shots ONLY: the same adult woman, about 30, brown hair in a low ponytail, cream sweater, charcoal trousers. Empty shots have zero people or body parts. One-hand close-ups show only her right hand and its connected wrist/forearm. Keep the same room, props and light direction across hard cuts.
One German home office used for gaming and everyday work. One laptop, one mouse and the same chair. Same soft left-side window light, same woman and same four-panel desk throughout. No added RGB parts on the desk.
COMPANION CHAIR — @image2:
Use only Furniwell high-back office chair, SKU G-OCNC23-0240-2, variant 44820467712266, grey mesh with its original light frame, padded seat and five-spoke base. Chair reference: https://cdn.shopify.com/s/files/1/0580/4615/2882/files/0240-Grey.jpg?v=1698643212
Chair product: https://furniwell.de/products/ergonomischer-burostuhl-mit-verstellbarer-hoher-rucken?variant=44820467712266
Actually upload this chair photograph as @image2. Preserve its separate mesh headrest, upper mesh back, separate lower lumbar support, original arms, seat, five-spoke base and five casters. Never substitute a headrest-free generic white chair or gaming chair. Keep the same chair through every shot. Desk @image1 and chair @image2 are independent shape references. The chair stays grounded when the desk rises. This chair is sold separately; do not imply a free chair or desk-and-chair bundle.
HUMAN / CONTACT GEOMETRY: establish physical staging before motion. The same adult appears ONLY in shots explicitly marked as a person shot. Empty shots do not inherit body parts from the previous shot. Start each clip from its own approved still and join clips with HARD CUTS. Never combine sitting down, standing up, turning, operating controls and lifting into one continuous action. Lock the camera for human-contact shots. No human is present during desk motion. Camera-only shots have no hand or furniture motion. Body, clothing, desktop and chair are separate opaque solids: resolve occlusion by real depth, never transparency, melting or disappearance.

SHOT CAST AND SPATIAL LOCK:
CAST: exactly ONE anatomically complete seated adult, already seated in the start frame. Pelvis supported by the seat; chair back behind the torso; chest facing the desk; two thighs connected to the same pelvis and knees; both feet on the floor. Exactly one left and one right hand rest separately on their corresponding thighs, palms down, and stay there: no typing or reaching for controls. Each hand connects continuously through wrist, elbow and shoulder to this one person. The person is in FRONT of the chair back. Never film a face through a foreground chair back or hide the entire head and torso while leaving orphan trouser legs. Keep a visible gap between torso and desktop; armrests remain outside the front desk edge and never enter the desktop.
Locked side view from the person's right, making side profile, shoulder, torso and seat depth readable; never orbit behind or film through the chair back.

THIS SHOT START FRAME:

The same adult is already seated facing the laptop at an approved seated desk height. Hands rest separately on thighs; armrests are not pushed under the desktop.

Freeze this single start pose; do not include the action or end state. No motion trail, duplicate pose or simultaneous before/after states. Reject a faulty anatomical start frame before video generation.

START-FRAME AND CLIP ACCEPTANCE: before animation, check actor/hand count, shoulder-elbow-wrist continuity, pelvis supported by seat, chair back behind the person, and clearance to desktop and armrests. Hand details contain only one right hand; empty shots have no leftover legs or feet. Reject an invalid start frame before animation; do not ask the video model to repair it. Inspect beginning, middle of action and end of each clip. Extra hands, detached torso, intersections or disappearing body mean reject the whole clip and regenerate with less motion or retain the approved still. Blurring, fading or cropping the defect is not a repair. Prompts reduce risk but do not guarantee every generated frame.

HARD FAILURES: wrong SKU, mirrored scene, controller on user-left or a short end, second controller, ordinary columns with wider lower tubes, changed stage count, floating feet, bending/tilting/elastic desktop, extra drawer, extra leg, disappearing cable, unsupported accessory. No generated captions, voice-over, music, promo badge or brand lettering. Add German subtitles and branding in editing. If geometry cannot be kept, reduce the action or retain the approved still; do not redesign the product.
```
### 单镜头 Grok 图生视频提示词
```text
@image1 @image2 @image3

Generate ONE 3-second vertical 9:16 image-to-video clip. In this separate clip task, @image1 is the official product identity reference; @image2 is the approved Furniwell chair photograph; @image3 is THIS SHOT'S already approved start frame. Begin exactly from @image3. Preserve its framing, pose, geometry, room, props and lighting. Do not create a different opening composition.

PRODUCT IDENTITY — highest priority:
Furniwell Economy, SKU G-HAD241222B, variant 44533451587850. White 120 x 60 cm FOUR-PANEL desktop, with the exact seam pattern in @image1. Two white lifting columns, TWO telescoping sections per column. Two original white T-shaped floor feet with their original dark leveling pads. Exactly ONE original black hanging digital keypad under the user-facing FRONT LONG EDGE, on the seated user's anatomical RIGHT. Copy its actual housing, angle, display and buttons from @image1. No drawer, glass top, third column, wheels, extra keypad or added cable tray.
COLUMN ASSEMBLY:
INVERTED TWO-STAGE COLUMNS: the WIDER outer sleeve is UPPER, attached to the underside frame; the NARROWER inner section is LOWER, attached to the floor foot. Thick at the top, slim at the bottom. The thick upper sleeve and desktop travel upward together; the thin lower section remains anchored to the foot, so more of the thin section becomes visible below the upper sleeve. On lowering, the upper sleeve covers more of the lower section. The feet stay planted. Do not swap tube widths, turn either column upside down, add a third section, stretch solid metal, or lift only the tabletop.
CONTROLLER LOCATION:
One black hanging keypad BELOW the front long edge at the seated worker's RIGHT. For a button shot, the worker uses her RIGHT index finger and approaches from her own side of the desk. Keep the real front-right tabletop corner and a portion of the long edge in view; never mount the keypad on the short end.
ORIENTATION: FRONT means the long working edge nearest the seated woman; BACK means the opposite edge. RIGHT always means her anatomical right when she sits facing the work surface, never the camera's right. The keypad stays fixed at that physical right-front working position across cuts. Keep cameras on the worker-facing side of the desk; no camera crossing behind the back edge and no horizontal mirroring. If a reverse view is ever used, her physical right may appear on screen-left; do not relocate the controller to compensate.
CONTINUITY:
In person shots ONLY: the same adult woman, about 30, brown hair in a low ponytail, cream sweater, charcoal trousers. Empty shots have zero people or body parts. One-hand close-ups show only her right hand and its connected wrist/forearm. Keep the same room, props and light direction across hard cuts.
One German home office used for gaming and everyday work. One laptop, one mouse and the same chair. Same soft left-side window light, same woman and same four-panel desk throughout. No added RGB parts on the desk.
COMPANION CHAIR — @image2:
Use only Furniwell high-back office chair, SKU G-OCNC23-0240-2, variant 44820467712266, grey mesh with its original light frame, padded seat and five-spoke base. Chair reference: https://cdn.shopify.com/s/files/1/0580/4615/2882/files/0240-Grey.jpg?v=1698643212
Chair product: https://furniwell.de/products/ergonomischer-burostuhl-mit-verstellbarer-hoher-rucken?variant=44820467712266
Actually upload this chair photograph as @image2. Preserve its separate mesh headrest, upper mesh back, separate lower lumbar support, original arms, seat, five-spoke base and five casters. Never substitute a headrest-free generic white chair or gaming chair. Keep the same chair through every shot. Desk @image1 and chair @image2 are independent shape references. The chair stays grounded when the desk rises. This chair is sold separately; do not imply a free chair or desk-and-chair bundle.
HUMAN / CONTACT GEOMETRY: establish physical staging before motion. The same adult appears ONLY in shots explicitly marked as a person shot. Empty shots do not inherit body parts from the previous shot. Start each clip from its own approved still and join clips with HARD CUTS. Never combine sitting down, standing up, turning, operating controls and lifting into one continuous action. Lock the camera for human-contact shots. No human is present during desk motion. Camera-only shots have no hand or furniture motion. Body, clothing, desktop and chair are separate opaque solids: resolve occlusion by real depth, never transparency, melting or disappearance.

SHOT CAST AND SPATIAL LOCK:
CAST: exactly ONE anatomically complete seated adult, already seated in the start frame. Pelvis supported by the seat; chair back behind the torso; chest facing the desk; two thighs connected to the same pelvis and knees; both feet on the floor. Exactly one left and one right hand rest separately on their corresponding thighs, palms down, and stay there: no typing or reaching for controls. Each hand connects continuously through wrist, elbow and shoulder to this one person. The person is in FRONT of the chair back. Never film a face through a foreground chair back or hide the entire head and torso while leaving orphan trouser legs. Keep a visible gap between torso and desktop; armrests remain outside the front desk edge and never enter the desktop.
Locked side view from the person's right, making side profile, shoulder, torso and seat depth readable; never orbit behind or film through the chair back.

ONLY ACTION:

Only one tiny glance/head nod toward the screen; hands, torso, chair and desk stay in place.

END STATE:

The same complete seated pose, with both hands still on their thighs; no reach or rising.

No internal cut, orbit or unrequested action. Use ONLY the camera or body motion specified for this shot, never both. Preserve everything else.

START-FRAME AND CLIP ACCEPTANCE: before animation, check actor/hand count, shoulder-elbow-wrist continuity, pelvis supported by seat, chair back behind the person, and clearance to desktop and armrests. Hand details contain only one right hand; empty shots have no leftover legs or feet. Reject an invalid start frame before animation; do not ask the video model to repair it. Inspect beginning, middle of action and end of each clip. Extra hands, detached torso, intersections or disappearing body mean reject the whole clip and regenerate with less motion or retain the approved still. Blurring, fading or cropping the defect is not a repair. Prompts reduce risk but do not guarantee every generated frame.

HARD FAILURES: wrong SKU, mirrored scene, controller on user-left or a short end, second controller, ordinary columns with wider lower tubes, changed stage count, floating feet, bending/tilting/elastic desktop, extra drawer, extra leg, disappearing cable, unsupported accessory. No generated captions, voice-over, music, promo badge or brand lettering. Add German subtitles and branding in editing. If geometry cannot be kept, reduce the action or retain the approved still; do not redesign the product.
```

## 镜头 2 · 3–6 秒
后期德语字幕：Deine Höhe.
### 首帧提示词
```text
@image1 @image2

Create ONE photorealistic 9:16 still image, not a storyboard or collage. The attached @image1 is the exact official desk photograph and the only desk-shape reference; @image2 independently locks the companion chair. Preserve the furniture; change only the human staging and room described below.

Production recipe FV-06, shot 2 START FRAME.

PRODUCT IDENTITY — highest priority:
Furniwell Economy, SKU G-HAD241222B, variant 44533451587850. White 120 x 60 cm FOUR-PANEL desktop, with the exact seam pattern in @image1. Two white lifting columns, TWO telescoping sections per column. Two original white T-shaped floor feet with their original dark leveling pads. Exactly ONE original black hanging digital keypad under the user-facing FRONT LONG EDGE, on the seated user's anatomical RIGHT. Copy its actual housing, angle, display and buttons from @image1. No drawer, glass top, third column, wheels, extra keypad or added cable tray.
COLUMN ASSEMBLY:
INVERTED TWO-STAGE COLUMNS: the WIDER outer sleeve is UPPER, attached to the underside frame; the NARROWER inner section is LOWER, attached to the floor foot. Thick at the top, slim at the bottom. The thick upper sleeve and desktop travel upward together; the thin lower section remains anchored to the foot, so more of the thin section becomes visible below the upper sleeve. On lowering, the upper sleeve covers more of the lower section. The feet stay planted. Do not swap tube widths, turn either column upside down, add a third section, stretch solid metal, or lift only the tabletop.
CONTROLLER LOCATION:
One black hanging keypad BELOW the front long edge at the seated worker's RIGHT. For a button shot, the worker uses her RIGHT index finger and approaches from her own side of the desk. Keep the real front-right tabletop corner and a portion of the long edge in view; never mount the keypad on the short end.
ORIENTATION: FRONT means the long working edge nearest the seated woman; BACK means the opposite edge. RIGHT always means her anatomical right when she sits facing the work surface, never the camera's right. The keypad stays fixed at that physical right-front working position across cuts. Keep cameras on the worker-facing side of the desk; no camera crossing behind the back edge and no horizontal mirroring. If a reverse view is ever used, her physical right may appear on screen-left; do not relocate the controller to compensate.
CONTINUITY:
In person shots ONLY: the same adult woman, about 30, brown hair in a low ponytail, cream sweater, charcoal trousers. Empty shots have zero people or body parts. One-hand close-ups show only her right hand and its connected wrist/forearm. Keep the same room, props and light direction across hard cuts.
One German home office used for gaming and everyday work. One laptop, one mouse and the same chair. Same soft left-side window light, same woman and same four-panel desk throughout. No added RGB parts on the desk.
COMPANION CHAIR — @image2:
Use only Furniwell high-back office chair, SKU G-OCNC23-0240-2, variant 44820467712266, grey mesh with its original light frame, padded seat and five-spoke base. Chair reference: https://cdn.shopify.com/s/files/1/0580/4615/2882/files/0240-Grey.jpg?v=1698643212
Chair product: https://furniwell.de/products/ergonomischer-burostuhl-mit-verstellbarer-hoher-rucken?variant=44820467712266
Actually upload this chair photograph as @image2. Preserve its separate mesh headrest, upper mesh back, separate lower lumbar support, original arms, seat, five-spoke base and five casters. Never substitute a headrest-free generic white chair or gaming chair. Keep the same chair through every shot. Desk @image1 and chair @image2 are independent shape references. The chair stays grounded when the desk rises. This chair is sold separately; do not imply a free chair or desk-and-chair bundle.
HUMAN / CONTACT GEOMETRY: establish physical staging before motion. The same adult appears ONLY in shots explicitly marked as a person shot. Empty shots do not inherit body parts from the previous shot. Start each clip from its own approved still and join clips with HARD CUTS. Never combine sitting down, standing up, turning, operating controls and lifting into one continuous action. Lock the camera for human-contact shots. No human is present during desk motion. Camera-only shots have no hand or furniture motion. Body, clothing, desktop and chair are separate opaque solids: resolve occlusion by real depth, never transparency, melting or disappearance.

SHOT CAST AND SPATIAL LOCK:
CAST: only ONE right hand belonging to the same adult, continuously connected to one wrist and forearm entering from the worker-side edge of the frame. No second hand, extra forearm, face or torso in this crop. The left hand stays on the lap, entirely outside the crop. The right hand has five fingers. Keep the start-frame grip and perform only the specified small local action; palm, wrist and forearm stay connected with unchanged lengths and no regripping. No hand emerges through the desktop, chair or keypad. If contact is occluded, repair the start-frame camera position instead of inventing another hand.
Locked contextual close-up showing the real component, its mounting edge/surface and contact point. No push-in, orbit or extreme wide angle.

THIS SHOT START FRAME:

The exact SKU's original control remains at its original user-right front LONG edge. Only one right hand and connected wrist/forearm are visible. Its index fingertip is already at one existing button; the other four fingers rest curled. Keep the tabletop corner and contact point readable.

Freeze this single start pose; do not include the action or end state. No motion trail, duplicate pose or simultaneous before/after states. Reject a faulty anatomical start frame before video generation.

START-FRAME AND CLIP ACCEPTANCE: before animation, check actor/hand count, shoulder-elbow-wrist continuity, pelvis supported by seat, chair back behind the person, and clearance to desktop and armrests. Hand details contain only one right hand; empty shots have no leftover legs or feet. Reject an invalid start frame before animation; do not ask the video model to repair it. Inspect beginning, middle of action and end of each clip. Extra hands, detached torso, intersections or disappearing body mean reject the whole clip and regenerate with less motion or retain the approved still. Blurring, fading or cropping the defect is not a repair. Prompts reduce risk but do not guarantee every generated frame.

HARD FAILURES: wrong SKU, mirrored scene, controller on user-left or a short end, second controller, ordinary columns with wider lower tubes, changed stage count, floating feet, bending/tilting/elastic desktop, extra drawer, extra leg, disappearing cable, unsupported accessory. No generated captions, voice-over, music, promo badge or brand lettering. Add German subtitles and branding in editing. If geometry cannot be kept, reduce the action or retain the approved still; do not redesign the product.
```
### 单镜头 Grok 图生视频提示词
```text
@image1 @image2 @image3

Generate ONE 3-second vertical 9:16 image-to-video clip. In this separate clip task, @image1 is the official product identity reference; @image2 is the approved Furniwell chair photograph; @image3 is THIS SHOT'S already approved start frame. Begin exactly from @image3. Preserve its framing, pose, geometry, room, props and lighting. Do not create a different opening composition.

PRODUCT IDENTITY — highest priority:
Furniwell Economy, SKU G-HAD241222B, variant 44533451587850. White 120 x 60 cm FOUR-PANEL desktop, with the exact seam pattern in @image1. Two white lifting columns, TWO telescoping sections per column. Two original white T-shaped floor feet with their original dark leveling pads. Exactly ONE original black hanging digital keypad under the user-facing FRONT LONG EDGE, on the seated user's anatomical RIGHT. Copy its actual housing, angle, display and buttons from @image1. No drawer, glass top, third column, wheels, extra keypad or added cable tray.
COLUMN ASSEMBLY:
INVERTED TWO-STAGE COLUMNS: the WIDER outer sleeve is UPPER, attached to the underside frame; the NARROWER inner section is LOWER, attached to the floor foot. Thick at the top, slim at the bottom. The thick upper sleeve and desktop travel upward together; the thin lower section remains anchored to the foot, so more of the thin section becomes visible below the upper sleeve. On lowering, the upper sleeve covers more of the lower section. The feet stay planted. Do not swap tube widths, turn either column upside down, add a third section, stretch solid metal, or lift only the tabletop.
CONTROLLER LOCATION:
One black hanging keypad BELOW the front long edge at the seated worker's RIGHT. For a button shot, the worker uses her RIGHT index finger and approaches from her own side of the desk. Keep the real front-right tabletop corner and a portion of the long edge in view; never mount the keypad on the short end.
ORIENTATION: FRONT means the long working edge nearest the seated woman; BACK means the opposite edge. RIGHT always means her anatomical right when she sits facing the work surface, never the camera's right. The keypad stays fixed at that physical right-front working position across cuts. Keep cameras on the worker-facing side of the desk; no camera crossing behind the back edge and no horizontal mirroring. If a reverse view is ever used, her physical right may appear on screen-left; do not relocate the controller to compensate.
CONTINUITY:
In person shots ONLY: the same adult woman, about 30, brown hair in a low ponytail, cream sweater, charcoal trousers. Empty shots have zero people or body parts. One-hand close-ups show only her right hand and its connected wrist/forearm. Keep the same room, props and light direction across hard cuts.
One German home office used for gaming and everyday work. One laptop, one mouse and the same chair. Same soft left-side window light, same woman and same four-panel desk throughout. No added RGB parts on the desk.
COMPANION CHAIR — @image2:
Use only Furniwell high-back office chair, SKU G-OCNC23-0240-2, variant 44820467712266, grey mesh with its original light frame, padded seat and five-spoke base. Chair reference: https://cdn.shopify.com/s/files/1/0580/4615/2882/files/0240-Grey.jpg?v=1698643212
Chair product: https://furniwell.de/products/ergonomischer-burostuhl-mit-verstellbarer-hoher-rucken?variant=44820467712266
Actually upload this chair photograph as @image2. Preserve its separate mesh headrest, upper mesh back, separate lower lumbar support, original arms, seat, five-spoke base and five casters. Never substitute a headrest-free generic white chair or gaming chair. Keep the same chair through every shot. Desk @image1 and chair @image2 are independent shape references. The chair stays grounded when the desk rises. This chair is sold separately; do not imply a free chair or desk-and-chair bundle.
HUMAN / CONTACT GEOMETRY: establish physical staging before motion. The same adult appears ONLY in shots explicitly marked as a person shot. Empty shots do not inherit body parts from the previous shot. Start each clip from its own approved still and join clips with HARD CUTS. Never combine sitting down, standing up, turning, operating controls and lifting into one continuous action. Lock the camera for human-contact shots. No human is present during desk motion. Camera-only shots have no hand or furniture motion. Body, clothing, desktop and chair are separate opaque solids: resolve occlusion by real depth, never transparency, melting or disappearance.

SHOT CAST AND SPATIAL LOCK:
CAST: only ONE right hand belonging to the same adult, continuously connected to one wrist and forearm entering from the worker-side edge of the frame. No second hand, extra forearm, face or torso in this crop. The left hand stays on the lap, entirely outside the crop. The right hand has five fingers. Keep the start-frame grip and perform only the specified small local action; palm, wrist and forearm stay connected with unchanged lengths and no regripping. No hand emerges through the desktop, chair or keypad. If contact is occluded, repair the start-frame camera position instead of inventing another hand.
Locked contextual close-up showing the real component, its mounting edge/surface and contact point. No push-in, orbit or extreme wide angle.

ONLY ACTION:

Only the right index finger makes one tiny press and stops. Wrist, forearm and other fingers keep their positions. The desk remains stationary throughout; this shot establishes the control location, with lifting in a separate empty shot.

END STATE:

Still one continuously attached right hand; original keypad, edge and desk height unchanged.

No internal cut, orbit or unrequested action. Use ONLY the camera or body motion specified for this shot, never both. Preserve everything else.

START-FRAME AND CLIP ACCEPTANCE: before animation, check actor/hand count, shoulder-elbow-wrist continuity, pelvis supported by seat, chair back behind the person, and clearance to desktop and armrests. Hand details contain only one right hand; empty shots have no leftover legs or feet. Reject an invalid start frame before animation; do not ask the video model to repair it. Inspect beginning, middle of action and end of each clip. Extra hands, detached torso, intersections or disappearing body mean reject the whole clip and regenerate with less motion or retain the approved still. Blurring, fading or cropping the defect is not a repair. Prompts reduce risk but do not guarantee every generated frame.

HARD FAILURES: wrong SKU, mirrored scene, controller on user-left or a short end, second controller, ordinary columns with wider lower tubes, changed stage count, floating feet, bending/tilting/elastic desktop, extra drawer, extra leg, disappearing cable, unsupported accessory. No generated captions, voice-over, music, promo badge or brand lettering. Add German subtitles and branding in editing. If geometry cannot be kept, reduce the action or retain the approved still; do not redesign the product.
```

## 镜头 3 · 6–9 秒
后期德语字幕：Passend eingestellt.
### 首帧提示词
```text
@image1 @image2

Create ONE photorealistic 9:16 still image, not a storyboard or collage. The attached @image1 is the exact official desk photograph and the only desk-shape reference; @image2 independently locks the companion chair. Preserve the furniture; change only the human staging and room described below.

Production recipe FV-06, shot 3 START FRAME.

PRODUCT IDENTITY — highest priority:
Furniwell Economy, SKU G-HAD241222B, variant 44533451587850. White 120 x 60 cm FOUR-PANEL desktop, with the exact seam pattern in @image1. Two white lifting columns, TWO telescoping sections per column. Two original white T-shaped floor feet with their original dark leveling pads. Exactly ONE original black hanging digital keypad under the user-facing FRONT LONG EDGE, on the seated user's anatomical RIGHT. Copy its actual housing, angle, display and buttons from @image1. No drawer, glass top, third column, wheels, extra keypad or added cable tray.
COLUMN ASSEMBLY:
INVERTED TWO-STAGE COLUMNS: the WIDER outer sleeve is UPPER, attached to the underside frame; the NARROWER inner section is LOWER, attached to the floor foot. Thick at the top, slim at the bottom. The thick upper sleeve and desktop travel upward together; the thin lower section remains anchored to the foot, so more of the thin section becomes visible below the upper sleeve. On lowering, the upper sleeve covers more of the lower section. The feet stay planted. Do not swap tube widths, turn either column upside down, add a third section, stretch solid metal, or lift only the tabletop.
CONTROLLER LOCATION:
One black hanging keypad BELOW the front long edge at the seated worker's RIGHT. For a button shot, the worker uses her RIGHT index finger and approaches from her own side of the desk. Keep the real front-right tabletop corner and a portion of the long edge in view; never mount the keypad on the short end.
ORIENTATION: FRONT means the long working edge nearest the seated woman; BACK means the opposite edge. RIGHT always means her anatomical right when she sits facing the work surface, never the camera's right. The keypad stays fixed at that physical right-front working position across cuts. Keep cameras on the worker-facing side of the desk; no camera crossing behind the back edge and no horizontal mirroring. If a reverse view is ever used, her physical right may appear on screen-left; do not relocate the controller to compensate.
CONTINUITY:
In person shots ONLY: the same adult woman, about 30, brown hair in a low ponytail, cream sweater, charcoal trousers. Empty shots have zero people or body parts. One-hand close-ups show only her right hand and its connected wrist/forearm. Keep the same room, props and light direction across hard cuts.
One German home office used for gaming and everyday work. One laptop, one mouse and the same chair. Same soft left-side window light, same woman and same four-panel desk throughout. No added RGB parts on the desk.
COMPANION CHAIR — @image2:
Use only Furniwell high-back office chair, SKU G-OCNC23-0240-2, variant 44820467712266, grey mesh with its original light frame, padded seat and five-spoke base. Chair reference: https://cdn.shopify.com/s/files/1/0580/4615/2882/files/0240-Grey.jpg?v=1698643212
Chair product: https://furniwell.de/products/ergonomischer-burostuhl-mit-verstellbarer-hoher-rucken?variant=44820467712266
Actually upload this chair photograph as @image2. Preserve its separate mesh headrest, upper mesh back, separate lower lumbar support, original arms, seat, five-spoke base and five casters. Never substitute a headrest-free generic white chair or gaming chair. Keep the same chair through every shot. Desk @image1 and chair @image2 are independent shape references. The chair stays grounded when the desk rises. This chair is sold separately; do not imply a free chair or desk-and-chair bundle.
HUMAN / CONTACT GEOMETRY: establish physical staging before motion. The same adult appears ONLY in shots explicitly marked as a person shot. Empty shots do not inherit body parts from the previous shot. Start each clip from its own approved still and join clips with HARD CUTS. Never combine sitting down, standing up, turning, operating controls and lifting into one continuous action. Lock the camera for human-contact shots. No human is present during desk motion. Camera-only shots have no hand or furniture motion. Body, clothing, desktop and chair are separate opaque solids: resolve occlusion by real depth, never transparency, melting or disappearance.

SHOT CAST AND SPATIAL LOCK:
CAST: ZERO people, ZERO hands and ZERO feet. The chair is fully empty; no trouser legs, shoes or human silhouette beneath it. Cut directly to this approved empty start frame; never dissolve a person away within the clip.
Locked camera and focal length; no push, zoom or orbit.
The ONLY motion is verified small desk travel. No human enters the motion zone; no button-operating hand is shown.

THIS SHOT START FRAME:

Empty lifting shot with level top, both complete inverted columns and floor feet readable. Chair is already clear of the lifting path; armrests have clearance from the top and frame. Original cable has slack; feet are grounded.

Freeze this single start pose; do not include the action or end state. No motion trail, duplicate pose or simultaneous before/after states. Reject a faulty anatomical start frame before video generation.

START-FRAME AND CLIP ACCEPTANCE: before animation, check actor/hand count, shoulder-elbow-wrist continuity, pelvis supported by seat, chair back behind the person, and clearance to desktop and armrests. Hand details contain only one right hand; empty shots have no leftover legs or feet. Reject an invalid start frame before animation; do not ask the video model to repair it. Inspect beginning, middle of action and end of each clip. Extra hands, detached torso, intersections or disappearing body mean reject the whole clip and regenerate with less motion or retain the approved still. Blurring, fading or cropping the defect is not a repair. Prompts reduce risk but do not guarantee every generated frame.

HARD FAILURES: wrong SKU, mirrored scene, controller on user-left or a short end, second controller, ordinary columns with wider lower tubes, changed stage count, floating feet, bending/tilting/elastic desktop, extra drawer, extra leg, disappearing cable, unsupported accessory. No generated captions, voice-over, music, promo badge or brand lettering. Add German subtitles and branding in editing. If geometry cannot be kept, reduce the action or retain the approved still; do not redesign the product.
```
### 单镜头 Grok 图生视频提示词
```text
@image1 @image2 @image3

Generate ONE 3-second vertical 9:16 image-to-video clip. In this separate clip task, @image1 is the official product identity reference; @image2 is the approved Furniwell chair photograph; @image3 is THIS SHOT'S already approved start frame. Begin exactly from @image3. Preserve its framing, pose, geometry, room, props and lighting. Do not create a different opening composition.

PRODUCT IDENTITY — highest priority:
Furniwell Economy, SKU G-HAD241222B, variant 44533451587850. White 120 x 60 cm FOUR-PANEL desktop, with the exact seam pattern in @image1. Two white lifting columns, TWO telescoping sections per column. Two original white T-shaped floor feet with their original dark leveling pads. Exactly ONE original black hanging digital keypad under the user-facing FRONT LONG EDGE, on the seated user's anatomical RIGHT. Copy its actual housing, angle, display and buttons from @image1. No drawer, glass top, third column, wheels, extra keypad or added cable tray.
COLUMN ASSEMBLY:
INVERTED TWO-STAGE COLUMNS: the WIDER outer sleeve is UPPER, attached to the underside frame; the NARROWER inner section is LOWER, attached to the floor foot. Thick at the top, slim at the bottom. The thick upper sleeve and desktop travel upward together; the thin lower section remains anchored to the foot, so more of the thin section becomes visible below the upper sleeve. On lowering, the upper sleeve covers more of the lower section. The feet stay planted. Do not swap tube widths, turn either column upside down, add a third section, stretch solid metal, or lift only the tabletop.
CONTROLLER LOCATION:
One black hanging keypad BELOW the front long edge at the seated worker's RIGHT. For a button shot, the worker uses her RIGHT index finger and approaches from her own side of the desk. Keep the real front-right tabletop corner and a portion of the long edge in view; never mount the keypad on the short end.
ORIENTATION: FRONT means the long working edge nearest the seated woman; BACK means the opposite edge. RIGHT always means her anatomical right when she sits facing the work surface, never the camera's right. The keypad stays fixed at that physical right-front working position across cuts. Keep cameras on the worker-facing side of the desk; no camera crossing behind the back edge and no horizontal mirroring. If a reverse view is ever used, her physical right may appear on screen-left; do not relocate the controller to compensate.
CONTINUITY:
In person shots ONLY: the same adult woman, about 30, brown hair in a low ponytail, cream sweater, charcoal trousers. Empty shots have zero people or body parts. One-hand close-ups show only her right hand and its connected wrist/forearm. Keep the same room, props and light direction across hard cuts.
One German home office used for gaming and everyday work. One laptop, one mouse and the same chair. Same soft left-side window light, same woman and same four-panel desk throughout. No added RGB parts on the desk.
COMPANION CHAIR — @image2:
Use only Furniwell high-back office chair, SKU G-OCNC23-0240-2, variant 44820467712266, grey mesh with its original light frame, padded seat and five-spoke base. Chair reference: https://cdn.shopify.com/s/files/1/0580/4615/2882/files/0240-Grey.jpg?v=1698643212
Chair product: https://furniwell.de/products/ergonomischer-burostuhl-mit-verstellbarer-hoher-rucken?variant=44820467712266
Actually upload this chair photograph as @image2. Preserve its separate mesh headrest, upper mesh back, separate lower lumbar support, original arms, seat, five-spoke base and five casters. Never substitute a headrest-free generic white chair or gaming chair. Keep the same chair through every shot. Desk @image1 and chair @image2 are independent shape references. The chair stays grounded when the desk rises. This chair is sold separately; do not imply a free chair or desk-and-chair bundle.
HUMAN / CONTACT GEOMETRY: establish physical staging before motion. The same adult appears ONLY in shots explicitly marked as a person shot. Empty shots do not inherit body parts from the previous shot. Start each clip from its own approved still and join clips with HARD CUTS. Never combine sitting down, standing up, turning, operating controls and lifting into one continuous action. Lock the camera for human-contact shots. No human is present during desk motion. Camera-only shots have no hand or furniture motion. Body, clothing, desktop and chair are separate opaque solids: resolve occlusion by real depth, never transparency, melting or disappearance.

SHOT CAST AND SPATIAL LOCK:
CAST: ZERO people, ZERO hands and ZERO feet. The chair is fully empty; no trouser legs, shoes or human silhouette beneath it. Cut directly to this approved empty start frame; never dissolve a person away within the clip.
Locked camera and focal length; no push, zoom or orbit.
The ONLY motion is verified small desk travel. No human enters the motion zone; no button-operating hand is shown.

ONLY ACTION:

Only a SMALL partial lift of a few centimeters: the wider upper sleeves and level desktop move upward together, revealing more of the anchored narrow lower sections. Feet and camera fixed; no person or hand; chair still. No full sit-to-stand transition in three seconds.

END STATE:

The same desk after the small lift, with cable slack, feet and chair unchanged.

No internal cut, orbit or unrequested action. Use ONLY the camera or body motion specified for this shot, never both. Preserve everything else.

START-FRAME AND CLIP ACCEPTANCE: before animation, check actor/hand count, shoulder-elbow-wrist continuity, pelvis supported by seat, chair back behind the person, and clearance to desktop and armrests. Hand details contain only one right hand; empty shots have no leftover legs or feet. Reject an invalid start frame before animation; do not ask the video model to repair it. Inspect beginning, middle of action and end of each clip. Extra hands, detached torso, intersections or disappearing body mean reject the whole clip and regenerate with less motion or retain the approved still. Blurring, fading or cropping the defect is not a repair. Prompts reduce risk but do not guarantee every generated frame.

HARD FAILURES: wrong SKU, mirrored scene, controller on user-left or a short end, second controller, ordinary columns with wider lower tubes, changed stage count, floating feet, bending/tilting/elastic desktop, extra drawer, extra leg, disappearing cable, unsupported accessory. No generated captions, voice-over, music, promo badge or brand lettering. Add German subtitles and branding in editing. If geometry cannot be kept, reduce the action or retain the approved still; do not redesign the product.
```

## 镜头 4 · 9–12 秒
后期德语字幕：Für Arbeit und Freizeit.
### 首帧提示词
```text
@image1 @image2

Create ONE photorealistic 9:16 still image, not a storyboard or collage. The attached @image1 is the exact official desk photograph and the only desk-shape reference; @image2 independently locks the companion chair. Preserve the furniture; change only the human staging and room described below.

Production recipe FV-06, shot 4 START FRAME.

PRODUCT IDENTITY — highest priority:
Furniwell Economy, SKU G-HAD241222B, variant 44533451587850. White 120 x 60 cm FOUR-PANEL desktop, with the exact seam pattern in @image1. Two white lifting columns, TWO telescoping sections per column. Two original white T-shaped floor feet with their original dark leveling pads. Exactly ONE original black hanging digital keypad under the user-facing FRONT LONG EDGE, on the seated user's anatomical RIGHT. Copy its actual housing, angle, display and buttons from @image1. No drawer, glass top, third column, wheels, extra keypad or added cable tray.
COLUMN ASSEMBLY:
INVERTED TWO-STAGE COLUMNS: the WIDER outer sleeve is UPPER, attached to the underside frame; the NARROWER inner section is LOWER, attached to the floor foot. Thick at the top, slim at the bottom. The thick upper sleeve and desktop travel upward together; the thin lower section remains anchored to the foot, so more of the thin section becomes visible below the upper sleeve. On lowering, the upper sleeve covers more of the lower section. The feet stay planted. Do not swap tube widths, turn either column upside down, add a third section, stretch solid metal, or lift only the tabletop.
CONTROLLER LOCATION:
One black hanging keypad BELOW the front long edge at the seated worker's RIGHT. For a button shot, the worker uses her RIGHT index finger and approaches from her own side of the desk. Keep the real front-right tabletop corner and a portion of the long edge in view; never mount the keypad on the short end.
ORIENTATION: FRONT means the long working edge nearest the seated woman; BACK means the opposite edge. RIGHT always means her anatomical right when she sits facing the work surface, never the camera's right. The keypad stays fixed at that physical right-front working position across cuts. Keep cameras on the worker-facing side of the desk; no camera crossing behind the back edge and no horizontal mirroring. If a reverse view is ever used, her physical right may appear on screen-left; do not relocate the controller to compensate.
CONTINUITY:
In person shots ONLY: the same adult woman, about 30, brown hair in a low ponytail, cream sweater, charcoal trousers. Empty shots have zero people or body parts. One-hand close-ups show only her right hand and its connected wrist/forearm. Keep the same room, props and light direction across hard cuts.
One German home office used for gaming and everyday work. One laptop, one mouse and the same chair. Same soft left-side window light, same woman and same four-panel desk throughout. No added RGB parts on the desk.
COMPANION CHAIR — @image2:
Use only Furniwell high-back office chair, SKU G-OCNC23-0240-2, variant 44820467712266, grey mesh with its original light frame, padded seat and five-spoke base. Chair reference: https://cdn.shopify.com/s/files/1/0580/4615/2882/files/0240-Grey.jpg?v=1698643212
Chair product: https://furniwell.de/products/ergonomischer-burostuhl-mit-verstellbarer-hoher-rucken?variant=44820467712266
Actually upload this chair photograph as @image2. Preserve its separate mesh headrest, upper mesh back, separate lower lumbar support, original arms, seat, five-spoke base and five casters. Never substitute a headrest-free generic white chair or gaming chair. Keep the same chair through every shot. Desk @image1 and chair @image2 are independent shape references. The chair stays grounded when the desk rises. This chair is sold separately; do not imply a free chair or desk-and-chair bundle.
HUMAN / CONTACT GEOMETRY: establish physical staging before motion. The same adult appears ONLY in shots explicitly marked as a person shot. Empty shots do not inherit body parts from the previous shot. Start each clip from its own approved still and join clips with HARD CUTS. Never combine sitting down, standing up, turning, operating controls and lifting into one continuous action. Lock the camera for human-contact shots. No human is present during desk motion. Camera-only shots have no hand or furniture motion. Body, clothing, desktop and chair are separate opaque solids: resolve occlusion by real depth, never transparency, melting or disappearance.

SHOT CAST AND SPATIAL LOCK:
CAST: exactly ONE anatomically complete seated adult, already seated in the start frame. Pelvis supported by the seat; chair back behind the torso; chest facing the desk; two thighs connected to the same pelvis and knees; both feet on the floor. Exactly one left and one right hand rest separately on their corresponding thighs, palms down, and stay there: no typing or reaching for controls. Each hand connects continuously through wrist, elbow and shoulder to this one person. The person is in FRONT of the chair back. Never film a face through a foreground chair back or hide the entire head and torso while leaving orphan trouser legs. Keep a visible gap between torso and desktop; armrests remain outside the front desk edge and never enter the desktop.
Locked side view from the person's right, making side profile, shoulder, torso and seat depth readable; never orbit behind or film through the chair back.

THIS SHOT START FRAME:

The same adult is already seated facing the laptop at an approved seated desk height. Hands rest separately on thighs; armrests are not pushed under the desktop.

Freeze this single start pose; do not include the action or end state. No motion trail, duplicate pose or simultaneous before/after states. Reject a faulty anatomical start frame before video generation.

START-FRAME AND CLIP ACCEPTANCE: before animation, check actor/hand count, shoulder-elbow-wrist continuity, pelvis supported by seat, chair back behind the person, and clearance to desktop and armrests. Hand details contain only one right hand; empty shots have no leftover legs or feet. Reject an invalid start frame before animation; do not ask the video model to repair it. Inspect beginning, middle of action and end of each clip. Extra hands, detached torso, intersections or disappearing body mean reject the whole clip and regenerate with less motion or retain the approved still. Blurring, fading or cropping the defect is not a repair. Prompts reduce risk but do not guarantee every generated frame.

HARD FAILURES: wrong SKU, mirrored scene, controller on user-left or a short end, second controller, ordinary columns with wider lower tubes, changed stage count, floating feet, bending/tilting/elastic desktop, extra drawer, extra leg, disappearing cable, unsupported accessory. No generated captions, voice-over, music, promo badge or brand lettering. Add German subtitles and branding in editing. If geometry cannot be kept, reduce the action or retain the approved still; do not redesign the product.
```
### 单镜头 Grok 图生视频提示词
```text
@image1 @image2 @image3

Generate ONE 3-second vertical 9:16 image-to-video clip. In this separate clip task, @image1 is the official product identity reference; @image2 is the approved Furniwell chair photograph; @image3 is THIS SHOT'S already approved start frame. Begin exactly from @image3. Preserve its framing, pose, geometry, room, props and lighting. Do not create a different opening composition.

PRODUCT IDENTITY — highest priority:
Furniwell Economy, SKU G-HAD241222B, variant 44533451587850. White 120 x 60 cm FOUR-PANEL desktop, with the exact seam pattern in @image1. Two white lifting columns, TWO telescoping sections per column. Two original white T-shaped floor feet with their original dark leveling pads. Exactly ONE original black hanging digital keypad under the user-facing FRONT LONG EDGE, on the seated user's anatomical RIGHT. Copy its actual housing, angle, display and buttons from @image1. No drawer, glass top, third column, wheels, extra keypad or added cable tray.
COLUMN ASSEMBLY:
INVERTED TWO-STAGE COLUMNS: the WIDER outer sleeve is UPPER, attached to the underside frame; the NARROWER inner section is LOWER, attached to the floor foot. Thick at the top, slim at the bottom. The thick upper sleeve and desktop travel upward together; the thin lower section remains anchored to the foot, so more of the thin section becomes visible below the upper sleeve. On lowering, the upper sleeve covers more of the lower section. The feet stay planted. Do not swap tube widths, turn either column upside down, add a third section, stretch solid metal, or lift only the tabletop.
CONTROLLER LOCATION:
One black hanging keypad BELOW the front long edge at the seated worker's RIGHT. For a button shot, the worker uses her RIGHT index finger and approaches from her own side of the desk. Keep the real front-right tabletop corner and a portion of the long edge in view; never mount the keypad on the short end.
ORIENTATION: FRONT means the long working edge nearest the seated woman; BACK means the opposite edge. RIGHT always means her anatomical right when she sits facing the work surface, never the camera's right. The keypad stays fixed at that physical right-front working position across cuts. Keep cameras on the worker-facing side of the desk; no camera crossing behind the back edge and no horizontal mirroring. If a reverse view is ever used, her physical right may appear on screen-left; do not relocate the controller to compensate.
CONTINUITY:
In person shots ONLY: the same adult woman, about 30, brown hair in a low ponytail, cream sweater, charcoal trousers. Empty shots have zero people or body parts. One-hand close-ups show only her right hand and its connected wrist/forearm. Keep the same room, props and light direction across hard cuts.
One German home office used for gaming and everyday work. One laptop, one mouse and the same chair. Same soft left-side window light, same woman and same four-panel desk throughout. No added RGB parts on the desk.
COMPANION CHAIR — @image2:
Use only Furniwell high-back office chair, SKU G-OCNC23-0240-2, variant 44820467712266, grey mesh with its original light frame, padded seat and five-spoke base. Chair reference: https://cdn.shopify.com/s/files/1/0580/4615/2882/files/0240-Grey.jpg?v=1698643212
Chair product: https://furniwell.de/products/ergonomischer-burostuhl-mit-verstellbarer-hoher-rucken?variant=44820467712266
Actually upload this chair photograph as @image2. Preserve its separate mesh headrest, upper mesh back, separate lower lumbar support, original arms, seat, five-spoke base and five casters. Never substitute a headrest-free generic white chair or gaming chair. Keep the same chair through every shot. Desk @image1 and chair @image2 are independent shape references. The chair stays grounded when the desk rises. This chair is sold separately; do not imply a free chair or desk-and-chair bundle.
HUMAN / CONTACT GEOMETRY: establish physical staging before motion. The same adult appears ONLY in shots explicitly marked as a person shot. Empty shots do not inherit body parts from the previous shot. Start each clip from its own approved still and join clips with HARD CUTS. Never combine sitting down, standing up, turning, operating controls and lifting into one continuous action. Lock the camera for human-contact shots. No human is present during desk motion. Camera-only shots have no hand or furniture motion. Body, clothing, desktop and chair are separate opaque solids: resolve occlusion by real depth, never transparency, melting or disappearance.

SHOT CAST AND SPATIAL LOCK:
CAST: exactly ONE anatomically complete seated adult, already seated in the start frame. Pelvis supported by the seat; chair back behind the torso; chest facing the desk; two thighs connected to the same pelvis and knees; both feet on the floor. Exactly one left and one right hand rest separately on their corresponding thighs, palms down, and stay there: no typing or reaching for controls. Each hand connects continuously through wrist, elbow and shoulder to this one person. The person is in FRONT of the chair back. Never film a face through a foreground chair back or hide the entire head and torso while leaving orphan trouser legs. Keep a visible gap between torso and desktop; armrests remain outside the front desk edge and never enter the desktop.
Locked side view from the person's right, making side profile, shoulder, torso and seat depth readable; never orbit behind or film through the chair back.

ONLY ACTION:

Only one tiny glance/head nod toward the screen; hands, torso, chair and desk stay in place.

END STATE:

The same complete seated pose, with both hands still on their thighs; no reach or rising.

No internal cut, orbit or unrequested action. Use ONLY the camera or body motion specified for this shot, never both. Preserve everything else.

START-FRAME AND CLIP ACCEPTANCE: before animation, check actor/hand count, shoulder-elbow-wrist continuity, pelvis supported by seat, chair back behind the person, and clearance to desktop and armrests. Hand details contain only one right hand; empty shots have no leftover legs or feet. Reject an invalid start frame before animation; do not ask the video model to repair it. Inspect beginning, middle of action and end of each clip. Extra hands, detached torso, intersections or disappearing body mean reject the whole clip and regenerate with less motion or retain the approved still. Blurring, fading or cropping the defect is not a repair. Prompts reduce risk but do not guarantee every generated frame.

HARD FAILURES: wrong SKU, mirrored scene, controller on user-left or a short end, second controller, ordinary columns with wider lower tubes, changed stage count, floating feet, bending/tilting/elastic desktop, extra drawer, extra leg, disappearing cable, unsupported accessory. No generated captions, voice-over, music, promo badge or brand lettering. Add German subtitles and branding in editing. If geometry cannot be kept, reduce the action or retain the approved still; do not redesign the product.
```

## 镜头 5 · 12–15 秒
后期德语字幕：Jetzt bei Furniwell entdecken.
### 首帧提示词
```text
@image1 @image2

Create ONE photorealistic 9:16 still image, not a storyboard or collage. The attached @image1 is the exact official desk photograph and the only desk-shape reference; @image2 independently locks the companion chair. Preserve the furniture; change only the human staging and room described below.

Production recipe FV-06, shot 5 START FRAME.

PRODUCT IDENTITY — highest priority:
Furniwell Economy, SKU G-HAD241222B, variant 44533451587850. White 120 x 60 cm FOUR-PANEL desktop, with the exact seam pattern in @image1. Two white lifting columns, TWO telescoping sections per column. Two original white T-shaped floor feet with their original dark leveling pads. Exactly ONE original black hanging digital keypad under the user-facing FRONT LONG EDGE, on the seated user's anatomical RIGHT. Copy its actual housing, angle, display and buttons from @image1. No drawer, glass top, third column, wheels, extra keypad or added cable tray.
COLUMN ASSEMBLY:
INVERTED TWO-STAGE COLUMNS: the WIDER outer sleeve is UPPER, attached to the underside frame; the NARROWER inner section is LOWER, attached to the floor foot. Thick at the top, slim at the bottom. The thick upper sleeve and desktop travel upward together; the thin lower section remains anchored to the foot, so more of the thin section becomes visible below the upper sleeve. On lowering, the upper sleeve covers more of the lower section. The feet stay planted. Do not swap tube widths, turn either column upside down, add a third section, stretch solid metal, or lift only the tabletop.
CONTROLLER LOCATION:
One black hanging keypad BELOW the front long edge at the seated worker's RIGHT. For a button shot, the worker uses her RIGHT index finger and approaches from her own side of the desk. Keep the real front-right tabletop corner and a portion of the long edge in view; never mount the keypad on the short end.
ORIENTATION: FRONT means the long working edge nearest the seated woman; BACK means the opposite edge. RIGHT always means her anatomical right when she sits facing the work surface, never the camera's right. The keypad stays fixed at that physical right-front working position across cuts. Keep cameras on the worker-facing side of the desk; no camera crossing behind the back edge and no horizontal mirroring. If a reverse view is ever used, her physical right may appear on screen-left; do not relocate the controller to compensate.
CONTINUITY:
In person shots ONLY: the same adult woman, about 30, brown hair in a low ponytail, cream sweater, charcoal trousers. Empty shots have zero people or body parts. One-hand close-ups show only her right hand and its connected wrist/forearm. Keep the same room, props and light direction across hard cuts.
One German home office used for gaming and everyday work. One laptop, one mouse and the same chair. Same soft left-side window light, same woman and same four-panel desk throughout. No added RGB parts on the desk.
COMPANION CHAIR — @image2:
Use only Furniwell high-back office chair, SKU G-OCNC23-0240-2, variant 44820467712266, grey mesh with its original light frame, padded seat and five-spoke base. Chair reference: https://cdn.shopify.com/s/files/1/0580/4615/2882/files/0240-Grey.jpg?v=1698643212
Chair product: https://furniwell.de/products/ergonomischer-burostuhl-mit-verstellbarer-hoher-rucken?variant=44820467712266
Actually upload this chair photograph as @image2. Preserve its separate mesh headrest, upper mesh back, separate lower lumbar support, original arms, seat, five-spoke base and five casters. Never substitute a headrest-free generic white chair or gaming chair. Keep the same chair through every shot. Desk @image1 and chair @image2 are independent shape references. The chair stays grounded when the desk rises. This chair is sold separately; do not imply a free chair or desk-and-chair bundle.
HUMAN / CONTACT GEOMETRY: establish physical staging before motion. The same adult appears ONLY in shots explicitly marked as a person shot. Empty shots do not inherit body parts from the previous shot. Start each clip from its own approved still and join clips with HARD CUTS. Never combine sitting down, standing up, turning, operating controls and lifting into one continuous action. Lock the camera for human-contact shots. No human is present during desk motion. Camera-only shots have no hand or furniture motion. Body, clothing, desktop and chair are separate opaque solids: resolve occlusion by real depth, never transparency, melting or disappearance.

SHOT CAST AND SPATIAL LOCK:
CAST: ZERO people, ZERO hands and ZERO feet. The chair is fully empty; no trouser legs, shoes or human silhouette beneath it. Cut directly to this approved empty start frame; never dissolve a person away within the clip.
Keep the complete product and floor feet readable. A very small straight push-in only; no orbit or perspective switch.

THIS SHOT START FRAME:

The exact product and the same specified chair are already staged. Full product, empty scene, furniture and props still.

Freeze this single start pose; do not include the action or end state. No motion trail, duplicate pose or simultaneous before/after states. Reject a faulty anatomical start frame before video generation.

START-FRAME AND CLIP ACCEPTANCE: before animation, check actor/hand count, shoulder-elbow-wrist continuity, pelvis supported by seat, chair back behind the person, and clearance to desktop and armrests. Hand details contain only one right hand; empty shots have no leftover legs or feet. Reject an invalid start frame before animation; do not ask the video model to repair it. Inspect beginning, middle of action and end of each clip. Extra hands, detached torso, intersections or disappearing body mean reject the whole clip and regenerate with less motion or retain the approved still. Blurring, fading or cropping the defect is not a repair. Prompts reduce risk but do not guarantee every generated frame.

HARD FAILURES: wrong SKU, mirrored scene, controller on user-left or a short end, second controller, ordinary columns with wider lower tubes, changed stage count, floating feet, bending/tilting/elastic desktop, extra drawer, extra leg, disappearing cable, unsupported accessory. No generated captions, voice-over, music, promo badge or brand lettering. Add German subtitles and branding in editing. If geometry cannot be kept, reduce the action or retain the approved still; do not redesign the product.
```
### 单镜头 Grok 图生视频提示词
```text
@image1 @image2 @image3

Generate ONE 3-second vertical 9:16 image-to-video clip. In this separate clip task, @image1 is the official product identity reference; @image2 is the approved Furniwell chair photograph; @image3 is THIS SHOT'S already approved start frame. Begin exactly from @image3. Preserve its framing, pose, geometry, room, props and lighting. Do not create a different opening composition.

PRODUCT IDENTITY — highest priority:
Furniwell Economy, SKU G-HAD241222B, variant 44533451587850. White 120 x 60 cm FOUR-PANEL desktop, with the exact seam pattern in @image1. Two white lifting columns, TWO telescoping sections per column. Two original white T-shaped floor feet with their original dark leveling pads. Exactly ONE original black hanging digital keypad under the user-facing FRONT LONG EDGE, on the seated user's anatomical RIGHT. Copy its actual housing, angle, display and buttons from @image1. No drawer, glass top, third column, wheels, extra keypad or added cable tray.
COLUMN ASSEMBLY:
INVERTED TWO-STAGE COLUMNS: the WIDER outer sleeve is UPPER, attached to the underside frame; the NARROWER inner section is LOWER, attached to the floor foot. Thick at the top, slim at the bottom. The thick upper sleeve and desktop travel upward together; the thin lower section remains anchored to the foot, so more of the thin section becomes visible below the upper sleeve. On lowering, the upper sleeve covers more of the lower section. The feet stay planted. Do not swap tube widths, turn either column upside down, add a third section, stretch solid metal, or lift only the tabletop.
CONTROLLER LOCATION:
One black hanging keypad BELOW the front long edge at the seated worker's RIGHT. For a button shot, the worker uses her RIGHT index finger and approaches from her own side of the desk. Keep the real front-right tabletop corner and a portion of the long edge in view; never mount the keypad on the short end.
ORIENTATION: FRONT means the long working edge nearest the seated woman; BACK means the opposite edge. RIGHT always means her anatomical right when she sits facing the work surface, never the camera's right. The keypad stays fixed at that physical right-front working position across cuts. Keep cameras on the worker-facing side of the desk; no camera crossing behind the back edge and no horizontal mirroring. If a reverse view is ever used, her physical right may appear on screen-left; do not relocate the controller to compensate.
CONTINUITY:
In person shots ONLY: the same adult woman, about 30, brown hair in a low ponytail, cream sweater, charcoal trousers. Empty shots have zero people or body parts. One-hand close-ups show only her right hand and its connected wrist/forearm. Keep the same room, props and light direction across hard cuts.
One German home office used for gaming and everyday work. One laptop, one mouse and the same chair. Same soft left-side window light, same woman and same four-panel desk throughout. No added RGB parts on the desk.
COMPANION CHAIR — @image2:
Use only Furniwell high-back office chair, SKU G-OCNC23-0240-2, variant 44820467712266, grey mesh with its original light frame, padded seat and five-spoke base. Chair reference: https://cdn.shopify.com/s/files/1/0580/4615/2882/files/0240-Grey.jpg?v=1698643212
Chair product: https://furniwell.de/products/ergonomischer-burostuhl-mit-verstellbarer-hoher-rucken?variant=44820467712266
Actually upload this chair photograph as @image2. Preserve its separate mesh headrest, upper mesh back, separate lower lumbar support, original arms, seat, five-spoke base and five casters. Never substitute a headrest-free generic white chair or gaming chair. Keep the same chair through every shot. Desk @image1 and chair @image2 are independent shape references. The chair stays grounded when the desk rises. This chair is sold separately; do not imply a free chair or desk-and-chair bundle.
HUMAN / CONTACT GEOMETRY: establish physical staging before motion. The same adult appears ONLY in shots explicitly marked as a person shot. Empty shots do not inherit body parts from the previous shot. Start each clip from its own approved still and join clips with HARD CUTS. Never combine sitting down, standing up, turning, operating controls and lifting into one continuous action. Lock the camera for human-contact shots. No human is present during desk motion. Camera-only shots have no hand or furniture motion. Body, clothing, desktop and chair are separate opaque solids: resolve occlusion by real depth, never transparency, melting or disappearance.

SHOT CAST AND SPATIAL LOCK:
CAST: ZERO people, ZERO hands and ZERO feet. The chair is fully empty; no trouser legs, shoes or human silhouette beneath it. Cut directly to this approved empty start frame; never dissolve a person away within the clip.
Keep the complete product and floor feet readable. A very small straight push-in only; no orbit or perspective switch.

ONLY ACTION:

Only the camera makes a tiny straight push-in; product, chair and props remain still.

END STATE:

The same complete product and empty chair; room for an editor-added CTA.

No internal cut, orbit or unrequested action. Use ONLY the camera or body motion specified for this shot, never both. Preserve everything else.

START-FRAME AND CLIP ACCEPTANCE: before animation, check actor/hand count, shoulder-elbow-wrist continuity, pelvis supported by seat, chair back behind the person, and clearance to desktop and armrests. Hand details contain only one right hand; empty shots have no leftover legs or feet. Reject an invalid start frame before animation; do not ask the video model to repair it. Inspect beginning, middle of action and end of each clip. Extra hands, detached torso, intersections or disappearing body mean reject the whole clip and regenerate with less motion or retain the approved still. Blurring, fading or cropping the defect is not a repair. Prompts reduce risk but do not guarantee every generated frame.

HARD FAILURES: wrong SKU, mirrored scene, controller on user-left or a short end, second controller, ordinary columns with wider lower tubes, changed stage count, floating feet, bending/tilting/elastic desktop, extra drawer, extra leg, disappearing cable, unsupported accessory. No generated captions, voice-over, music, promo badge or brand lettering. Add German subtitles and branding in editing. If geometry cannot be kept, reduce the action or retain the approved still; do not redesign the product.
```

## 验收
- 产品名称、SKU、尺寸、颜色与三视图一致；四拼、整板、玻璃桌不能混用。
- 控制器只有一个，位于入座者右侧；外挂与 G2 内嵌形式正确；没有装到短边。
- 倒装立柱粗管在上、细管在下；节数、立柱数量、脚型正确；底脚贴地。
- 升降时桌面与上部套管一起移动；桌面水平；没有拉伸变形或全行程瞬移。
- G2 只有原装一个抽屉；L 桌保留原朝向及三根立柱；未确认结构不补画。
- 对比首帧、运动中间帧和尾帧。发现多手、断身、人体消失、穿桌板/椅架、错款或结构变形，整段退回重做；不通过模糊、淡化或裁切掩盖错误，不进入投放。
- 搭配椅是指定灰色高背款，独立头枕、腰靠、扶手与五爪底座正确；image2 不是首帧，image3 才是当前镜头首帧。
- 人物镜头恰好一个完整成年人，双手分放对应大腿；椅背在身后，骨盆由坐垫承托。不能从椅背后拍正脸，不能只剩椅下裤腿。
- 手部特写只见一只右手与连续手腕前臂；无人镜头连残留的手、腿、脚与人影也不能有。

制作边界：提示词与参考图可降低结构错误，不能保证生成模型每帧正确。首帧与成片都要人工核对；错款画面不进入投放。
