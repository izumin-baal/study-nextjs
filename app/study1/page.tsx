'use client';
import React, { useReducer, useState } from "react";
import Container from "@/components/layout/container";
import { Button } from "@material-tailwind/react";
import { useRouter } from "next/navigation";

const Page = () => {
    const [state, setState] = useState(0);
    const [rstate, dispatch] = useReducer((prev: number, action: string) => {
        switch(action) {
            case '+':
                return ++prev;
            case '-':
                return --prev;
            default:
                return prev;
        }
    }, 0)
    const router = useRouter()

    const backHome = () => {
        router.push("/");
    }
    const reload = () => {
        window.location.reload()
    }
    const countUp = () => {
        // setStateは更新の予約であり即時変更はかからない。関数を渡すことで直前の値を参照できる。
        setState((prev) => ++prev)
    }
    const rcountUp = () => {
        dispatch('+')
    }
    const rcountDown = () => {
        dispatch('-')
    }

    return (
        <Container>
            <Button onClick={backHome} className="mr-5">Topに戻る</Button>
            <Button onClick={reload} className="mr-5">再読み込み</Button>
            <h4>useReducerの使い方</h4>
            <h5>useStateで状態管理</h5>
            <p className="mb-4 font-bold">{state}</p>
            <Button onClick={countUp}>+</Button>
            <h5>useReducerで状態管理</h5>
            <p className="mb-4 font-bold">{rstate}</p>
            <Button onClick={rcountDown} className="mr-2">-</Button>
            <Button onClick={rcountUp}>+</Button>
        </Container>
    );
}

export default Page;
