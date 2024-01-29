import React from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { AvatarGroup, Avatar } from "@nextui-org/react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const Page = () => {
  return (
    <div className="dark bg-inherit h-screen text-white relative flex justify-center items-center ">
      <main className="w-11/12 h-full  absolute bg-inherit grid grid-cols-12 grid-rows-8 gap-0">
        <div className="row-span-8 col-span-10  bg-inherit grid grid-cols-10 grid-rows-8">
          <div className=" row-span-1 bg-gray-950 col-span-10 text-black flex justify-start items-center border-1  px-4">
            <AvatarGroup isBordered max={100} total={999} size="lg">
              <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />
              <Avatar src="https://i.pravatar.cc/150?u=a04258a2462d826712d" />
              <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026704d" />
              <Avatar src="https://i.pravatar.cc/150?u=a04258114e29026302d" />
              <Avatar src="https://i.pravatar.cc/150?u=a04258114e29026702d" />
              <Avatar src="https://i.pravatar.cc/150?u=a04258114e29026708c" />
            </AvatarGroup>
          </div>

          <div className="bg-gray-950 row-span-7 col-span-2 border-1">
            <Accordion type="single" collapsible className="w-full px-4 py-3">
              <AccordionItem value="item-1">
                <AccordionTrigger>Friends</AccordionTrigger>
                <AccordionContent>
                  Yes. It adheres to the WAI-ARIA design pattern.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>Groups</AccordionTrigger>
                <AccordionContent>
                  Yes. It comes with default styles that matches the other
                  components&apos; aesthetic.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>Favourites</AccordionTrigger>
                <AccordionContent>
                  Yes. It's animated by default, but you can disable it if you
                  prefer.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
          <div className="bg-gray-950 row-span-7 col-span-8 flex-col border-1 rounded-lg">
            <div className="h-1/6 flex justify-between items-center p-8">
              <div>Heading</div>
              <div>
                {" "}
                <Button
                  className="ml-2 bg-blue-500 text-white "
                  variant="secondary"
                  size="lg"
                >
                  Call ?
                </Button>
              </div>
            </div>
            <div className="h-5/6 relative text-black border-1 pb-2 box-border mx-2 rounded-lg">
              <section className="flex flex-col h-[calc(100%)] bg-[#f7fafc]">
                <ScrollArea className="flex-1 p-8 space-y-2 bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800">
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
        <div className="row-span-8 col-span-2 bg-gray-950 flex flex-col justify-center items-center border-1 gap-6">
          <Button
            className=" px-4 py-7 bg-green-500 text-white  w-5/6"
            variant="secondary"
            size="lg"
          >
            Find random chat
          </Button>
          <Dialog>
            <DialogTrigger className="border-1 bg-slate-500 px-5 py-3 hover:bg-slate-50 text-black  transition duration-300 ease-in-out rounded-xl  ">
              {" "}
              Filter
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Are you absolutely sure?</DialogTitle>
                <DialogDescription>
                  This action cannot be undone. This will permanently delete
                  your account and remove your data from our servers.
                </DialogDescription>
              </DialogHeader>
            </DialogContent>
          </Dialog>
        </div>
      </main>
    </div>
  );
};

export default Page;
