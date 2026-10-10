# 周度自动同步契约

用户已于 2026-10-10 明确同意公开汇总并启用；此许可覆盖固定 7 站域级 Ahrefs 汇总（含自然与付费搜索）的周期写入与发布。先将本交互版、数据文件及脚本发布到原仓库，再修改已有“竞品流量周报”任务；复用其每周一 09:00、Asia/Shanghai 时间，不创建重复任务。不改变其他已启用或暂停的任务。

## 公开范围

已批准每周自动公开固定 7 站的域级 Ahrefs 汇总指标。网站和仓库均为公开。此许可不扩展至页面或关键词原始数据；销售、广告账户、Shopify、施工单正文、Top Pages 和逐词原始明细均不进入公开自动同步。

网站：furniwell.de、songmics.de、flexispot.de、desktronic.de、dpj-workspace.com/de/、yaasa.com、ergotopia.de。DPJ 的 API target 必须是 https://www.dpj-workspace.com/de/，用 prefix；存储行 target 保持 dpj-workspace.com/de/；其他用 subdomains；Country=DE、traffic_mode=adaptive、volume_mode=monthly。沿用现有任务的完整私人分析，但仅公开域级汇总。

## 每次运行

1. 用连接器读取 main 分支 HEAD、tree、此文档、`assets/data-contract.js`、`scripts/prepare-weekly-update.mjs`、`data/weekly-reports.json`。若文件缺失或不符合契约，停止网页同步并报告原因；不要退回只覆盖旧 HTML 区块。
2. 使用 Ahrefs 前读取相应 doc。按运行日的北京日期查询本期和恰好 7 天前快照；若当日接口无数据，所有网站统一回退到同一个可用日期，仍相隔 7 天。逐一保留真实来源及可用性；接口失败不能补 0，也不能混用口径。对可取得的域级 traffic、keywords、Top 3、Top 10、value、paidTraffic、paidKeywords 做两期比较；付费两期分别存 paidTraffic / previousPaidTraffic、paidKeywords / previousPaidKeywords，DR/RD/paid 指标不能获取时记录 null。org_cost cents 除以 100 后存 value USD。Top 10 若当前可用接口不返回则记录 null，禁止推算或默认 0。DR 为全域指标，不是 DE 品类或 /de/ 目录评分；RD 为 live_refdomains，DPJ 按同一 www /de/ prefix 查询。
3. 按既有周报任务输出完整私人分析：全站比较、差距、Top Pages 和商业词异常、影响与建议。不同 Top Keyword 不比较排名；最大增减页需要分别按 traffic_diff 升/降查询，不能把当前 Top 20 说成全站涨跌榜。
4. 构造 schemaVersion 1 的单份报告，rows 所有字段和规则依 `data-contract.js`。每次新 id，如 `weekly-YYYY-MM-DD`；同日期复查用新的带时间 id。默认 classification=private；只有已获明确公开范围许可的域级汇总副本才标记 public。未保存日期不回填；不把 Ahrefs 后续重估值拼成连续历史。
5. 将新报告和最新 bundle 临时放入隔离目录，依本次已批准的公开范围运行 `node scripts/prepare-weekly-update.mjs --report /absolute/report.json --bundle /absolute/bundle.json --output /absolute/plan.json --allow-public`。该脚本不提交或联网，只校验并生成 3 个文件的写入计划；剔除输入中的额外明细、自由文本和非许可字段。必须覆盖 7 站的当期 traffic/keywords；缺失则保留旧成功版本并输出失败说明。校验失败不写仓库。
6. 使用 GitHub 连接器 create_tree，将 plan 的 3 个文件基于最新 tree 组装；create_commit parent 为同一个 HEAD；再 update_ref(main, sha=new_commit, expected_sha=read_head, force=false)。两个 bundle 文件及独立历史报告在同一提交写入。严禁逐个更新文件、覆盖人工页面、force push，或携带 review/ 与私密数据。并发 head 改动则重新读取、重新合并，最多重试 1 次。
7. 读回 main 下的 3 个文件，核对 id、日期、rows 和 JSON/JS 内容一致。确认 GitHub Pages 的部署状态；只能在实际成功后说“网页已更新”。同步失败仍输出私人周报并说明失败阶段；下一次运行不能删去历史或伪造成功时刻。

## 网页行为

页面直接读取更新的数据，默认显示最新一期，历史选择器保留旧报告；不需要用户导入。展示周更时间、接入状态与最近成功采集时刻。三个竞品分析页分别读取同一周报的域级自然与付费指标，独立于页面快照；周监控显示自然/付费结构、两期绝对变化、各自周环比、付费占比及百分点变化。付费占比分母仅为两类搜索流量，不是全站渠道；两期都为 0 则占比不可计算。旧报告缺少 previousPaidTraffic / previousPaidKeywords 时显示缺失，不覆盖或回填。自然或付费搜索环比绝对值 ≥15% 均标记异常；上期为 0 不计算百分比。变化解读不推断实际花费、订单、ROAS 或因果。超过 9 天没有新数据时提示延迟，不把旧快照称为实时。手动导入收起为备用功能。

## 启用顺序

确认公开范围与 GitHub 写入 → 发布已审代码 → 更新现有自动任务的 prompt → 验证首轮写入并读回仓库/页面 → 确认首次同步成功。配置生效后由任务自动执行周期同步；发布与回读证据保存在提交记录和任务运行记录中。
