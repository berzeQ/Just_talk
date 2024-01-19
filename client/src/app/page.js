"use client";
import Navbar from "../components/navbar/page";
import React, { useState } from "react";
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

export default function Home() {
  const [selected, setSelected] = useState("login");

  return (
    <div className="bg-gradient-to-r from-black via-gray-700 to-black h-screen flex flex-col gap-14">
      <Navbar />

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
    </div>
  );
}
