import { configMainDev } from './webpack.main.config';
import { configPreloadDev } from './webpack.preload.config';
import { configRendererDev } from './webpack.renderer.config';

module.exports = [configMainDev, configPreloadDev, configRendererDev];
