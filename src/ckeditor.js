/**
 * @license Copyright (c) 2003-2021, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

// The editor creator to use.
import ClassicEditorBase from "@ckeditor/ckeditor5-editor-classic/src/classiceditor";

import Bold from "./plugins/ckeditor5-basic-styles/src/bold";
import CustomHeader from "./plugins/ckeditor5-basic-styles/src/customheader";
import Italic from "./plugins/ckeditor5-basic-styles/src/italic";
import StrikeThrough from "./plugins/ckeditor5-basic-styles/src/strikethrough";
import Superscript from "./plugins/ckeditor5-basic-styles/src/superscript";
import InlineCode from "./plugins/ckeditor5-basic-styles/src/code";
import Link from "./plugins/ckeditor5-link/src/link";
import List from "./plugins/ckeditor5-list/src/list";
import BlockQuote from "./plugins/ckeditor5-block-quote/src/blockquote";

//Code Block
import CodeBlock from "./plugins/ckeditor5-code-block/src/codeblock";

//Table
import Table from "./plugins/ckeditor5-table/src/table";
import TableToolbar from "./plugins/ckeditor5-table/src/tabletoolbar";

//Image
import Image from "./plugins/ckeditor5-image/src/image";
import ImageCaption from "./plugins/ckeditor5-image/src/imagecaption";
import ImageStyle from "./plugins/ckeditor5-image/src/imagestyle";
import ImageToolbar from "./plugins/ckeditor5-image/src/imagetoolbar";
import ImageUpload from "./plugins/ckeditor5-image/src/imageupload";

import Essentials from "@ckeditor/ckeditor5-essentials/src/essentials";
import UploadAdapter from "@ckeditor/ckeditor5-adapter-ckfinder/src/uploadadapter";
import Autoformat from "@ckeditor/ckeditor5-autoformat/src/autoformat";
import CKFinder from "@ckeditor/ckeditor5-ckfinder/src/ckfinder";
import EasyImage from "@ckeditor/ckeditor5-easy-image/src/easyimage";
import Heading from "@ckeditor/ckeditor5-heading/src/heading";
import Indent from "@ckeditor/ckeditor5-indent/src/indent";
import Paragraph from "@ckeditor/ckeditor5-paragraph/src/paragraph";
import PasteFromOffice from "@ckeditor/ckeditor5-paste-from-office/src/pastefromoffice";
import TextTransformation from "@ckeditor/ckeditor5-typing/src/texttransformation";
import CloudServices from "@ckeditor/ckeditor5-cloud-services/src/cloudservices";

export default class ClassicEditor extends ClassicEditorBase {}

// Plugins to include in the build.
ClassicEditor.builtinPlugins = [
    Essentials,
    UploadAdapter,
    Autoformat,
    Bold,
    Italic,
    BlockQuote,
    CKFinder,
    CloudServices,
    EasyImage,
    Heading,
    Image,
    ImageCaption,
    ImageStyle,
    ImageToolbar,
    ImageUpload,
    Indent,
    Link,
    List,
    Paragraph,
    PasteFromOffice,
    Table,
    TableToolbar,
    TextTransformation,

    StrikeThrough,
    Superscript,
    InlineCode,
    CodeBlock,
    CustomHeader
];

// Editor configuration.
ClassicEditor.defaultConfig = {
    toolbar: {
        items: ["bold", "italic", "link", "strikethrough", "code", "superscript", "|", "customheader", "bulletedList", "numberedList", "blockQuote", "codeBlock", "insertTable", "uploadImage"]
    },
    image: {
        toolbar: ["imageStyle:full", "imageStyle:side", "|", "imageTextAlternative"]
    },
    table: {
        contentToolbar: ["tableColumn", "tableRow", "mergeTableCells"]
    },
    codeBlock: {
        languages: [{ language: "plaintext", label: "Plain text", class: "" }]
    },
    // This value must be kept in sync with the language defined in webpack.config.js.
    language: "en"
};
