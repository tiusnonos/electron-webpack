import { configMainProd } from './webpack.main.config';
import { configPreloadProd } from './webpack.preload.config';
import { configRendererProd } from './webpack.renderer.config';

module.exports = [configMainProd, configPreloadProd, configRendererProd];
