## Project Structure

Inside of your Astro project, you'll see the following folders and files:

```
/
├── dist/     ...buildしたデータ
├── public/   ...画像データ（public画像）などの静的アセッツ
├── scripts/  ...開発に必要なnode.jsのコード（必要に応じて）
└── src/      ...開発データ
	├── components  ...部品データ
	├── data        ...案件に関わるデータ
	├── icon        ...アイコン用のsvgデータ
	├── image       ...画像データ（src画像）
	├── layouts     ...各ページで使用するレイアウト
	├── pages       ...各ページのデータ
	├── script      ...コンポーネントに依存しないスクリプト
	├── styles      ...共通スタイル
	│  ├── _base           ...基本データ（リセットとベース設定）
	│  ├── _design         ...デザインデータ（カスタムプロパティ）
	│  │  ├── animation       ...動きの設定
	│  │  ├── color           ...色の設定
	│  │  ├── other           ...他に属さない設定
	│  │  ├── space           ...余白の設定
	│  │  ├── typography      ...文字の設定
	│  │  └── zindex          ...重なりの設定
	│  └── _develop        ...開発用データ（mixinなど）
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
