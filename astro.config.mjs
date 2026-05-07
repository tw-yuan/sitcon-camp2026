// @ts-check
import { defineConfig, fontProviders } from "astro/config";
import Icons from "unplugin-icons/vite";

import tailwindcss from "@tailwindcss/vite";

import sitemap from "@astrojs/sitemap";

import favicons from "astro-favicons";

const base = "/2026";
const basePath = base.replace(/^\/+|\/+$/g, "");
const pwaAssetNames = new Set([
	"android-chrome-192x192.png",
	"android-chrome-512x512.png",
	"apple-touch-icon-precomposed.png",
	"apple-touch-icon.png",
	"browserconfig.xml",
	"favicon-16x16.png",
	"favicon-32x32.png",
	"favicon-48x48.png",
	"favicon.ico",
	"favicon.svg",
	"manifest.webmanifest",
	"mstile-144x144.png",
	"mstile-150x150.png",
	"mstile-310x150.png",
	"mstile-310x310.png",
	"mstile-70x70.png",
	"safari-pinned-tab.svg",
	"yandex-browser-50x50.png",
	"yandex-browser-manifest.json"
]);

function emitPwaAssetsAtArtifactRoot() {
	return {
		name: "camp:pwa-assets-at-artifact-root",
		enforce: /** @type {"post"} */ ("post"),
		/**
		 * @param {unknown} _
		 * @param {Record<string, { fileName: string }>} bundle
		 */
		generateBundle(_, bundle) {
			for (const [fileName, asset] of Object.entries(bundle)) {
				const pwaAssetName = fileName.startsWith(`${basePath}/`) ? fileName.slice(basePath.length + 1) : "";

				if (!pwaAssetNames.has(pwaAssetName)) {
					continue;
				}

				asset.fileName = pwaAssetName;
				bundle[pwaAssetName] = asset;
				delete bundle[fileName];
			}
		}
	};
}

// https://astro.build/config
export default defineConfig({
	site: "https://sitcon.camp",
	base,

	fonts: [
		{
			provider: fontProviders.local(),
			name: "LINE Seed TW",
			cssVariable: "--font-line-seed-tw",
			weights: [250, 400, 700, 800],
			styles: ["normal"],
			options: {
				variants: [
					{
						weight: 250,
						style: "normal",
						src: ["./src/assets/fonts/LINESeedTW_OTF_Th.woff2"]
					},
					{
						weight: 400,
						style: "normal",
						src: ["./src/assets/fonts/LINESeedTW_OTF_Rg.woff2"]
					},
					{
						weight: 700,
						style: "normal",
						src: ["./src/assets/fonts/LINESeedTW_OTF_Bd.woff2"]
					},
					{
						weight: 800,
						style: "normal",
						src: ["./src/assets/fonts/LINESeedTW_OTF_Eb.woff2"]
					}
				]
			}
		},
		{
			provider: fontProviders.local(),
			name: "Fira Mono",
			cssVariable: "--font-mono",
			weights: [400, 500, 700],
			styles: ["normal"],
			options: {
				variants: [
					{
						weight: 400,
						style: "normal",
						src: ["./src/assets/fonts/FiraMono-Regular.woff2"]
					},
					{
						weight: 500,
						style: "normal",
						src: ["./src/assets/fonts/FiraMono-Medium.woff2"]
					},
					{
						weight: 700,
						style: "normal",
						src: ["./src/assets/fonts/FiraMono-Bold.woff2"]
					}
				]
			}
		}
	],

	vite: {
		plugins: [
			tailwindcss(),
			Icons({
				compiler: "astro"
			}),
			emitPwaAssetsAtArtifactRoot()
		]
	},

	integrations: [
		sitemap(),
		favicons({
			name: "SITCON Camp 2026",
			short_name: "SITCON Camp",
			manifest: {
				start_url: `${base}/`,
				display: "standalone",
				orientation: "any",
				display_override: ["window-controls-overlay", "minimal-ui"]
			},
			output: {
				images: true,
				files: true,
				html: true,
				assetsPrefix: base
			}
		})
	]
});
