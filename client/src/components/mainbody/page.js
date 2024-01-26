import React from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { AvatarGroup, Avatar } from "@nextui-org/react";

const Page = () => {
  return (
    <div className="dark bg-inherit h-screen text-white relative">
      <main className="w-full h-full  absolute bg-inherit grid grid-cols-12 grid-rows-8 gap-0">
        <div className="row-span-8 col-span-10  bg-inherit grid grid-cols-10 grid-rows-8">
          <div className=" row-span-1 bg-amber-950 col-span-10 text-black flex justify-start items-center">
            <AvatarGroup isBordered max={100} total={999} size="lg">
              <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />
              <Avatar src="https://i.pravatar.cc/150?u=a04258a2462d826712d" />
              <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026704d" />
              <Avatar src="https://i.pravatar.cc/150?u=a04258114e29026302d" />
              <Avatar src="https://i.pravatar.cc/150?u=a04258114e29026702d" />
              <Avatar src="https://i.pravatar.cc/150?u=a04258114e29026708c" />
            </AvatarGroup>
          </div>

          <div className="bg-blue-600 row-span-7 col-span-2">cat</div>
          <div className="bg-blue-200 row-span-7 col-span-8 flex-col">
            <div className="h-1/6">Heading</div>
            <div className="h-5/6 bg-purple-700 relative text-black">
              <section className="flex flex-col h-[calc(100%)] bg-[#f7fafc]">
                <ScrollArea className="flex-1 p-4 space-y-2 bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800">
                  <div className="flex flex-col gap-4">
                    <p className="bg-white p-2 py-4 rounded-md shadow w-3/6 self-start">
                      Hello, how are you?
                    </p>
                    <p className="bg-white p-2 rounded-md shadow w-3/6 self-end">
                      I'm good, thanks!
                    </p>
                    <p className="bg-white p-2 rounded-md shadow w-3/6 self-end">
                      I'm good, thanks!
                    </p>
                    <p className="bg-white p-2 rounded-md shadow w-3/6 self-end">
                      I'm good, thanks!
                    </p>
                    <p className="bg-white p-2 rounded-md shadow w-3/6 self-end">
                      I'm good, thanks!
                    </p>
                    <p className="bg-white p-2 rounded-md shadow w-3/6 self-end">
                      I'm good, thanks!
                    </p>
                    <p className="bg-white p-2 rounded-md shadow w-3/6 self-end">
                      I'm good, thanks!
                    </p>
                    <p className="bg-white p-2 rounded-md shadow w-3/6 self-end">
                      I'm good, thanks!
                    </p>
                    <p className="bg-white p-2 rounded-md shadow w-3/6 self-end">
                      I'm good, thanks!
                    </p>
                    <p className="bg-white p-2 rounded-md shadow w-3/6 self-end">
                      I'm good, thanks!
                    </p>
                    <p className="bg-white p-2 rounded-md shadow w-3/6 self-end">
                      I'm good, thanks!
                    </p>
                    <p className="bg-white p-2 rounded-md shadow w-3/6 self-end">
                      I'm good, thanks!
                    </p>
                  </div>
                </ScrollArea>
                <div className="flex items-center justify-between p-2 pb-2 bg-gray-800 px-5">
                  <Input
                    placeholder="Type a message..."
                    className="bg-slate-50"
                  />
                  <Button
                    className="ml-2 bg-blue-500 text-white"
                    variant="secondary"
                    size="lg"
                  >
                    Send
                  </Button>
                </div>
              </section>
            </div>
          </div>
        </div>
        <div className="row-span-8 col-span-2 bg-green-900">2</div>
      </main>
    </div>
  );
};

export default Page;
