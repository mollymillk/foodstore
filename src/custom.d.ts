import * as React from 'react';

declare module '*.svg' {
    const value: string;
    export = value;
}