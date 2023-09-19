import React from "react";
import "./ProgressBar.scss";
import { ProgressBar, Step } from "react-step-progress-bar";

const CustomProgressBar = ({ stepPercentage }) => {
    return (
        <div className="custom-progress-bar">
        <ProgressBar
            percent={stepPercentage}
        >
            <Step>
                {({ accomplished }) => (
                    <div
                        className={`indexedStep ${accomplished ? "accomplished" : null}`}
                    />
                )}
            </Step>
            <Step>
                {({ accomplished }) => (
                    <div
                        className={`indexedStep ${accomplished ? "accomplished" : null}`}
                    />
                )}
            </Step>
            <Step>
                {({ accomplished }) => (
                    <div
                        className={`indexedStep ${accomplished ? "accomplished" : null}`}
                    />
                )}
            </Step>
            <Step>
                {({ accomplished }) => (
                    <div
                        className={`indexedStep ${accomplished ? "accomplished" : null}`}
                    />
                )}
            </Step>
            <Step>
                {({ accomplished }) => (
                    <div
                        className={`indexedStep ${accomplished ? "accomplished" : null}`}
                    />
                )}
            </Step>
        </ProgressBar>
        </div>
    );
};

export default CustomProgressBar;
