import React, { useState, useCallback, useReducer, useMemo, useRef, useEffect,useLayoutEffect } from 'react';
function ScrollView({ row }) {
    let [isScrollingDown, setIsScrollingDown] = useState(false);
    let [prevRow, setPrevRow] = useState(null);

    if (row !== prevRow) {
        // Row changed since last render. Update isScrollingDown.
        setIsScrollingDown(prevRow !== null && row > prevRow);
        setPrevRow(row);
    }

    return `Scrolling down: ${isScrollingDown}`;
}
export default ScrollView;