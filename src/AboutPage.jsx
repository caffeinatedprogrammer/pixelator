import React from "react";

import { useTitle } from './hooks';

import "./AboutPage.css";

export default function AboutPage() {
    useTitle('Pixelator | About');
    
    return (
        <div className="normal-page-padding">
            <div className="dummy-height" />
            <h1>About</h1>
            <div className="normal-padding">
                <p>
                    Pixelator is an "image discretizer" which generates Lennon Arts, written by CaffeinatedProgrammer.
                </p>
                <p>
                    The <a className="source-code" href="https://github.com/caffeinatedprogrammer/pixelator" target="_blank">source code</a> is release under the MIT License.
                </p>
                <div className="license">
                    <p className="mono">
                        Copyright 2020 Caffeinated Programmer
                    </p>
                    <p className="mono">
                        Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
                    </p>
                    <p className="mono">
                        The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
                    </p>
                    <p className="mono">
                        THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
                    </p>
                </div>
            </div>
        </div>
    )
}