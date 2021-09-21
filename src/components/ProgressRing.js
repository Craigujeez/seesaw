import React from 'react';

const ProgressRing = (props) => {
    const {radius, stroke, progress} = props;
    
    const normalizedRadius = radius - stroke * 2;
    const circumference = normalizedRadius * 2 * Math.PI;

    const strokeDashoffset = circumference - progress / 100 * circumference;
    
    return (
        <div class="rings">
            <div class="percent1">
                <svg>
                    <circle cx="30" cy="30" r="30"></circle>
                    <circle cx="30" cy="30" r="30"></circle>
                </svg>
                <div class="number">
                    <h2>80%</h2>
                </div>
            </div>
        </div>
    );
  }

export default ProgressRing;