## Project Structure

Inside of your Astro project, you'll see the following folders and files:

```
/
├── dist/     ...buildしたデータ
├── public/   ...画像データなど静的アセッツ
├── scripts/  ...開発に必要なnode.jsのコード（必要に応じて）
└── src/      ...開発データ
	├── components  ...部品データ
	├── data        ...案件に関わるデータ
	├── layouts     ...各ページで使用するレイアウト
	├── pages       ...各ページのデータ
	├── styles      ...共通スタイル
	│  ├── base           ...基本データ（リセットとベース設定）
	│  ├── design         ...デザインデータ（カスタムプロパティ）
	│  │  ├── animation       ...動きの設定
	│  │  ├── color           ...色の設定
	│  │  ├── size            ...大きさの設定
	│  │  ├── typography      ...文字の設定
	│  │  └── zindex          ...重なりの設定
	│  ├── develop        ...開発用データ（mixinなど）
	│  └── every_layout   ...every layout用のデータ
	└── types       ...型データ（必要に応じて）
```

## Commands

| Command              | Action                                                         |
| :------------------- | :------------------------------------------------------------- |
| `npm install`        | インストール                                                   |
| `npm run dev`        | 開発スタート（サーバーは `localhost:3000`）                    |
| `npm run build`      | `./dist/` にビルド                                             |
| `npm run preview`    | ビルドしたデータをプレビュー                                   |
| `npm run file:build` | ファイル納品用のデータを `./build/` に生成（ファイル一覧つき） |

## 👀 Want to learn more?

- [Astro Documents](https://docs.astro.build)
