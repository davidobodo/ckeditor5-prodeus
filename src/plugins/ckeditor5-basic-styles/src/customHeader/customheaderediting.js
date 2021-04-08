/**
 * @license Copyright (c) 2003-2021, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * @module basic-styles/bold/boldediting
 */

import { Plugin } from 'ckeditor5/src/core';
import AttributeCommand from '../attributecommand';

const CUSTOMHEADER = 'customheader';

/**
 * The bold editing feature.
 *
 * It registers the `'bold'` command and introduces the `bold` attribute in the model which renders to the view
 * as a `<strong>` element.
 *
 * @extends module:core/plugin~Plugin
 */
export default class CustomHeaderEditing extends Plugin {
	/**
	 * @inheritDoc
	 */
	static get pluginName() {
		return 'CustomHeaderEditing';
	}

	/**
	 * @inheritDoc
	 */
	init() {
		const editor = this.editor;
		// Allow bold attribute on text nodes.
		editor.model.schema.extend( '$text', { allowAttributes: CUSTOMHEADER } );
		editor.model.schema.setAttributeProperties( CUSTOMHEADER, {
			isFormatting: true,
			copyOnEnter: true
		} );

		// Build converter from model to view for data and editing pipelines.
		editor.conversion.attributeToElement( {
			model: CUSTOMHEADER,
			view: 'h2',
			upcastAlso: [
				'b',
				viewElement => {
					const fontSize = viewElement.getStyle( 'font-size' );

					if ( !fontSize ) {
						return null;
					}

					// Value of the `font-weight` attribute can be defined as a string or a number.
					if ( fontSize == '30px' ) {
						return {
							name: true,
							styles: [ 'font-size' ]
						};
					}
				}
			]
		} );

		// Create bold command.
		editor.commands.add( CUSTOMHEADER, new AttributeCommand( editor, CUSTOMHEADER ) );

		// Set the Ctrl+B keystroke.
		// editor.keystrokes.set( 'CTRL+B', CUSTOMHEADER );
	}
}
