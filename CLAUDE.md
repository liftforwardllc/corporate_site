# Lift Forward コーポレートサイト — CLAUDE.md

## プロジェクト概要
Lift Forward合同会社（コンサルティング）のコーポレートサイト。
静的HTML + CSS + JS のシンプル構成。ビルドツール・フレームワークなし。

**作業ディレクトリ:** `flapworks/`

---

## ファイル構成

```
flapworks/
├── index.html        ← メインページ（1ページ構成）
├── privacy.html      ← プライバシーポリシーページ
├── favicon.ico
├── css/
│   └── style.css     ← 唯一のスタイルシート（正）
├── js/
│   └── script.js     ← 変更禁止
└── img/
    ├── logo.svg      ← SVGロゴ（差し替え済み）
    ├── mv_pc_01.jpg  ← PC用ヒーロー画像
    └── mv_sp_01.jpg  ← SP用ヒーロー画像
```

---

## デザイントークン（style.css :root）

```css
--black   : #111111   /* メインテキスト・背景 */
--white   : #ffffff   /* 背景 */
--gray    : #a0a0a0   /* ミュート・ボーダー */
--text    : #333333   /* 本文 */
--muted   : #666666   /* サブテキスト */
--header-h: 72px      /* SP: 56px */
--pad-x   : 3rem      /* SP: 1.25rem */
--max-w   : 1080px
--sec-py  : 5.5rem    /* SP: 3.5rem */
```

## フォント
Google Fonts 1リクエストにまとめ済み:
```
Barlow(500,600) → h1, h2（英字見出し .heading--1 / .heading--2）
Inter(400)      → ナビ・ラベル・番号
Noto Sans JP(400,700) → 日本語本文
```

## ブレークポイント
**必ず `max-width: 899px` のみ使うこと**（script.js のJSと一致させる制約）

---

## ボーダー使用箇所（4箇所のみ・増やさない）
1. `.header` 下 — `rgba(0,0,0,0.08)`
2. `.heading--2` 下 — `var(--gray)`
3. `.footer` 上 — `rgba(0,0,0,0.1)`
4. `.privacy__link` 下 — `var(--black)`（テキストリンク下線）

---

## z-index 管理

| 要素 | z-index |
|---|---|
| `.header` | 100 |
| `.header__menu`（SPオーバーレイ） | 300 |
| `.header__menu-btn`（ハンバーガー） | 301 |

---

## セクション構成（index.html）

| セクション | クラス | 備考 |
|---|---|---|
| ヒーロー | `.mv` | PC: 2カラム grid / SP: 重ね absolute |
| CONCEPT | `.concept` | テキストのみ |
| SERVICE | `.service` | PC: 3カラム grid / SP: 1カラム |
| WORKS | `.works` | PC: 2カラム grid / SP: 1カラム（縦積み固定） |
| COMPANY | `.company` | dl/dt/dd テーブル |
| CONTACT | `.contact` | 全幅黒背景CTAバナー（HubSpotフォームへリンク） |

---

## 外部リンク
- お問い合わせフォーム: `https://share.hsforms.com/1t3qfGLi1QRy1oQM1KG4_0g597ad`

---

## 禁止事項・制約

- `js/script.js` は**変更禁止**
- ブレークポイントは `max-width: 899px` **のみ**（他の値を追加しない）
- `destyle.css` は削除済み（独自resetが `style.css` 冒頭に含まれている）
- `.fade-in` / `.scroll-in` はJSが付与するが、CSSでは `opacity: 1` のまま（非表示にしない）
- 新しいJSファイルを追加する場合は `script.js` と競合しないか確認すること

---

## ローカルプレビュー

```bash
# flapworks/ ディレクトリで実行
python3 -m http.server 8743
# → http://localhost:8743/ で確認
```
