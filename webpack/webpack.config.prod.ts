import { configMainProd } from './webpack.main.config';
import { configRendererProd } from './webpack.renderer.config';
import { configPreloadProd } from './webpack.preload.config';

module.exports = [configMainProd, configRendererProd, configPreloadProd];
