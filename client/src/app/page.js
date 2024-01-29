"use client";
import Navbar from "../components/navbar/page";
import React, { useEffect, useState, Suspense } from "react";
import {
  Tabs,
  Tab,
  Input,
  Link,
  Button,
  Card,
  CardBody,
  CardHeader,
} from "@nextui-org/react";
import Login from "../components/login";
import Register from "../components/register";
import { useSelector } from "react-redux";
import { useCookies } from "react-cookie";
import MainBody from "../components/mainbody/page";

export default function Home() {
  const { username } = useSelector((state) => state.user);
  const [cookies] = useCookies(["myCookie"]);
  const [mounted, setMounted] = useState(false);

  // const [token, setToken] = useState(document.cookie.split("=")[1]);
  useEffect(() => {
    console.log(cookies.myCookie);
  }, [cookies]);
  return (
    <div className="bg-gradient-to-r from-black via-gray-700 to-black h-screen  flex flex-col gap-14 ">
      <Navbar />

      <Suspense fallback={<div className="text-white">Loading...</div>}>
        {cookies.myCookie ? (
          <MainBody className="w-5/6" />
        ) : (
          <div className="flex flex-col w-2/5 h-4/5 bg-gray-900 self-center justify-evenly">
            <Card className=" dark max-w-full w-full h-full">
              <CardBody className="overflow-hidden">
                <Tabs
                  fullWidth
                  size="lg"
                  aria-label="Tabs form"
                  selectedKey={selected}
                  onSelectionChange={setSelected}
                >
                  <Tab key="login" title="Login" className="py-8 text-2xl">
                    <Login setSelected={setSelected} />
                  </Tab>
                  <Tab key="sign-up" title="Register" className="py-8 text-2xl">
                    <Register setSelected={setSelected} />
                  </Tab>
                </Tabs>
              </CardBody>
            </Card>
          </div>
        )}
      </Suspense>
    </div>
  );
}
