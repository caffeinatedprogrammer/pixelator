import React from "react";

import { useTitle } from './hooks';

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
                    The source code is release under the MIT License.
                </p>
            </div>
        </div>
    )
}