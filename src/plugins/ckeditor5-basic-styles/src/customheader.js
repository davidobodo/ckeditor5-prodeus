/**
 * @license Copyright (c) 2003-2021, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * @module basic-styles/bold
 */

import { Plugin } from 'ckeditor5/src/core';
import CustomHeaderEditing from './customHeader/customheaderediting';
import CustomHeaderUI from './customHeader/customheaderui';

/**
 * The bold feature.
 *
 * For a detailed overview check the {@glink features/basic-styles Basic styles feature documentation}
 * and the {@glink api/basic-styles package page}.
 *
 * This is a "glue" plugin which loads the {@link module:basic-styles/bold/boldediting~CustomHeaderEditing bold editing feature}
 * and {@link module:basic-styles/bold/boldui~CustomHeaderUI bold UI feature}.
 *
 * @extends module:core/plugin~Plugin
 */
export default class CustomHeader extends Plugin {
	/**
	 * @inheritDoc
	 */
	static get requires() {
		return [ CustomHeaderEditing, CustomHeaderUI ];
	}

	/**
	 * @inheritDoc
	 */
	static get pluginName() {
		return 'CustomHeader';
	}
}
