import { initializeWidget } from '@vikadata/widget-sdk';
import { SnakeStage } from './snake_stage';

initializeWidget(SnakeStage, process.env.WIDGET_PACKAGE_ID);
