'use client';
import React, { useState } from "react";
import Container from "@/components/layout/container";
import { Button } from "@material-tailwind/react";

const Page = () => {
    const [state, setState] = useState(0);

    const countUp = () => {
        setState(prev => ++prev)
    }

    return (
        <Container>
            <h4>useReducerの使い方</h4>
            useEffectと違ってアクションも同時に定義する。
            <h5>useEffectの例</h5>
            <p className="mb-4 font-bold">{state}</p>
            <Button onClick={countUp}>+</Button>
        </Container>
    );
}

export default Page;
