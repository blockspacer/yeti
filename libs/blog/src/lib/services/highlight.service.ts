import { isPlatformBrowser } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';

import 'prismjs';
import 'prismjs/components/prism-bash';
import 'prismjs/components/prism-css';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-json';
import 'prismjs/components/prism-markup';
import 'prismjs/components/prism-sass';
import 'prismjs/components/prism-scss';
import 'prismjs/components/prism-typescript';
import 'prismjs/components/prism-yaml';
import 'prismjs/plugins/copy-to-clipboard/prism-copy-to-clipboard';
import 'prismjs/plugins/toolbar/prism-toolbar';
import 'clipboard';

declare var Prism: any;

@Injectable()
export class HighlightService {
  // tslint:disable-next-line: ban-types
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  highlightAll() {
    if (isPlatformBrowser(this.platformId)) {
      Prism.highlightAll();
    }
  }
}