import { cp, mkdir, readdir, rm } from "node:fs/promises";
import { join } from "node:path";

const DIST_DIR = "./dist";
const BASE_PATH = "2026";
const TARGET_DIR = join(DIST_DIR, BASE_PATH);

await rm(TARGET_DIR, { recursive: true, force: true });
await mkdir(TARGET_DIR, { recursive: true });

const entries = await readdir(DIST_DIR, { withFileTypes: true });

for (const entry of entries) {
	if (entry.name === BASE_PATH) {
		continue;
	}

	await cp(join(DIST_DIR, entry.name), join(TARGET_DIR, entry.name), {
		recursive: true,
		errorOnExist: false,
		force: true
	});
}

console.log(`✓ Mirrored dist/ to dist/${BASE_PATH}/ for static /${BASE_PATH} asset URLs.`);
