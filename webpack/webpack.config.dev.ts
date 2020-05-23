import { configMainDev } from './webpack.main.config';
import { configRendererDev } from './webpack.renderer.config';
import { configPreloadDev } from './webpack.preload.config';

module.exports = [configMainDev, configRendererDev, configPreloadDev];
