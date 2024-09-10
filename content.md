Here are FAQs for each service in your list:

### 1. **Moving & Packing Services**

- **What items do you pack during a move?**

  - We pack all types of items, including delicate glassware, electronics, furniture, and personal belongings. Our team ensures everything is packed securely using high-quality materials.

- **Do you offer packing services for fragile items?**

  - Yes, we specialize in packing fragile items with extra care. We use specialized materials like bubble wrap and foam to protect delicate items during the move.

- **Can you help with both residential and commercial moves?**

  - Yes, we provide packing and moving services for both homes and businesses, ensuring a smooth transition to your new location.

- **How do you ensure the safety of my belongings during the move?**
  - We use professional packing techniques and materials to secure your items. Our team is trained to handle everything from small, delicate items to large, heavy furniture.

### 2. **Delivery Services Across Dubai**

- **What areas do you cover for delivery services?**

  - We offer delivery services across Dubai and the entire UAE, ensuring your items are delivered safely and on time.

- **Can you handle large or heavy deliveries?**

  - Yes, our fleet is equipped to handle deliveries of various sizes, including large and heavy items, ensuring they reach their destination in perfect condition.

- **Do you offer same-day delivery services?**

  - Depending on the location and availability, we may offer same-day delivery services. Please contact us to discuss your specific requirements.

- **How do you ensure the safety of items during delivery?**
  - We take great care in loading, transporting, and unloading items to ensure they are delivered in perfect condition. Our team is trained to handle delicate and valuable items with care.

### 3. **Home Fixing Services**

- **What types of home fixing services do you offer?**

  - Our home fixing services include hanging curtains, mounting shelves, assembling furniture, and other installations to help you settle into your new home quickly and comfortably.

- **Can you assist with setting up appliances in my new home?**

  - Yes, we can assist with setting up and installing appliances as part of our home fixing services. We ensure everything is properly installed and functional.

- **Do you provide furniture assembly services?**

  - Yes, we provide furniture assembly services as part of our home fixing offerings. Our team can assemble and install all types of furniture, ensuring everything is set up correctly.

- **How quickly can you provide home fixing services after a move?**
  - We aim to provide prompt home fixing services, often starting as soon as the move is completed, to help you settle into your new home as quickly as possible.

### 4. **Office Fixing Services**

- **What does your office fixing service include?**

  - Our office fixing services include setting up workstations, installing office furniture, and ensuring all equipment is properly placed and functional. We help you get your office up and running quickly.

- **Can you handle large-scale office setups?**

  - Yes, we have experience with large-scale office setups, including complex modular furniture installations and equipment setup. We work efficiently to minimize downtime.

- **Do you provide IT setup services for offices?**

  - While we primarily focus on furniture and physical setups, we can assist with basic IT setups such as arranging equipment. For specialized IT needs, we can coordinate with your IT team.

- **How do you ensure minimal disruption during office setup?**
  - We plan and execute office setups efficiently, often working outside regular business hours to minimize disruption. Our goal is to have your office fully operational as quickly as possible.

### 5. **Dismantling Services**

- **What items can you dismantle for moving?**

  - We can dismantle a wide range of items, including furniture, shelving units, and large equipment, ensuring they are ready for safe transportation.

- **Do you provide reassembly services at the new location?**

  - Yes, we provide reassembly services at the new location, ensuring everything is put back together securely and correctly.

- **Can you dismantle complex or custom furniture?**

  - Yes, our skilled technicians are trained to handle complex and custom furniture, ensuring it is dismantled and reassembled without any damage.

- **How do you keep track of all components during dismantling?**
  - We carefully label and organize all components during dismantling to ensure nothing is lost and everything is ready for reassembly at the new location.

### 6. **Furniture Fixing Services**

- **What types of furniture can you assemble and install?**

  - We can assemble and install all types of furniture, from simple desks to complex modular setups, for both homes and offices.

- **Do you offer customization services for furniture installation?**

  - While we primarily focus on standard assembly and installation, we can work with you to achieve a customized setup that meets your specific needs.

- **Can you fix or repair existing furniture during installation?**

  - Yes, we can perform minor repairs and adjustments during installation to ensure your furniture is in top condition.

- **How do you ensure furniture is securely installed?**
  - Our team follows precise installation procedures to ensure that all furniture is securely installed and properly aligned, providing a safe and functional setup.

### 7. **Curtain Fixing Services**

- **What types of curtains can you install?**

  - We can install all types of curtains, including traditional, modern, and custom designs, ensuring they are perfectly aligned and functional.

- **Do you provide curtain rod installation as well?**

  - Yes, our curtain fixing services include the installation of curtain rods, tracks, and other hardware to ensure your curtains are properly supported.

- **Can you assist with selecting the right curtains for my space?**

  - While we primarily focus on installation, we can provide advice on curtain selection based on your space and design preferences.

- **How quickly can you complete curtain installation?**
  - We aim to complete curtain installation promptly, often within a few hours, depending on the size and complexity of the project.

import \* as React from "react"
import Autoplay from "embla-carousel-autoplay"

import { Card, CardContent } from "@/components/ui/card"
import {
Carousel,
CarouselContent,
CarouselItem,
CarouselNext,
CarouselPrevious,
} from "@/components/ui/carousel"

export function CarouselPlugin() {
const plugin = React.useRef(
Autoplay({ delay: 2000, stopOnInteraction: true })
)

return (
<Carousel
      plugins={[plugin.current]}
      className="w-full max-w-xs"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
<CarouselContent>
{Array.from({ length: 5 }).map((\_, index) => (
<CarouselItem key={index}>

<div className="p-1">
<Card>
<CardContent className="flex aspect-square items-center justify-center p-6">
<span className="text-4xl font-semibold">{index + 1}</span>
</CardContent>
</Card>
</div>
</CarouselItem>
))}
</CarouselContent>
<CarouselPrevious />
<CarouselNext />
</Carousel>
)
}

"use client"

import { useToast } from "@/components/hooks/use-toast"
import { Button } from "@/components/ui/button"
import { ToastAction } from "@/components/ui/toast"

export function ToastDemo() {
const { toast } = useToast()

return (
<Button
variant="outline"
onClick={() => {
toast({
title: "Scheduled: Catch up ",
description: "Friday, February 10, 2023 at 5:57 PM",
action: (
<ToastAction altText="Goto schedule to undo">Undo</ToastAction>
),
})
}} >
Add to calendar
</Button>
)
}
