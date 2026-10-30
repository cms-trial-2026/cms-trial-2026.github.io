import { defineConfig } from 'astro/config';

// サンプルサイト。予約公開はビルド時の時刻で絞り込むため、完全な静的出力にする。
export default defineConfig({
  output: 'static',
  trailingSlash: 'always',
  build: { format: 'directory' },
});
