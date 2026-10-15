---
layout: base.njk
title: Flight Planning Guide
description: Permissions, community agreement, and mission planning before you leave for the field.
---

# Flight Planning Guide

**Permissions, community agreement, and mission planning before you leave for the field.**

---

Most problems in the field can be avoided before you leave. This page covers getting permission, planning the mission, and preparing your team and kit.

## Permissions

### Flight authorization

Check the drone rules in the country you're flying in, and get any authorization you need from the civil aviation authority (and military or other authorities, where relevant). Rules vary considerably between countries, and between drones of different weights.

Also check for **NOTAMs** ("Notices to Air Missions"). These are official notices of temporary airspace restrictions or hazards, such as a helicopter operation or a VIP visit. In a disaster response there are often many.

Be transparent. Sharing your planned flight paths with the aviation authority in advance builds trust, and shows exactly where and why you'll be flying.

### Geofencing is a separate step

Many drone manufacturers build **geofencing** into their software: the drone warns you, or refuses to fly, in zones the manufacturer marks as restricted, such as near airports.

**Getting government permission does not unlock the manufacturer's geofence.** These are two separate steps. Where a zone is locked, unlocking usually means applying online with the manufacturer, and needs an internet connection that you may not have in the field. Do it before you deploy. Mixing the two up has caused real delays on past missions.

This is changing. Since late 2025, DJI has been replacing most of its locked zones with warning zones, and retiring its unlock service. Check how your drone and firmware behave in the country you're flying in. A warning zone isn't permission to fly: you still need authorization from the aviation authority.

Also, update the drone's firmware and apps before you leave. Outdated software can block unlocking, or stop the drone flying in restricted airspace.

## Consent and the community

Satellite imagery is collected from space without anyone noticing. A drone is different: people on the ground can see and hear it, and they can't opt out. Many of them have just been through a disaster, and some may have lived through conflict, where aircraft overhead mean something very different.

Telling people isn't the same as having their agreement. Before you fly:

- **Get consent from local authorities, and community or camp leaders.** Explain what you're doing, why, and what will happen to the imagery. This is often needed for permission anyway, and it reduces the chance of the drone being seen as a threat.
- **Agree what happens if people object.** Know who people can raise concerns with, and who decides to postpone, change, or cancel a flight. If there are serious objections, don't fly until they're resolved.
- **Reach people the leaders don't speak for.** Women, minority groups, and people living on the edges of a site may not hear about the flight through leaders. Use other channels too, such as notices, local radio, or community volunteers, and tell people how to raise concerns.
- **Expect questions in the field.** Agreement from leaders doesn't mean everyone has heard about the flight. Be ready to stop, explain, and show people the drone.
- **Stay neutral.** Keep drone work clearly humanitarian, and separate from military or security activities.

### Sensitive places

Identify sites that need special care before you plan flights, such as military sites, critical infrastructure, health facilities, places where people are at risk of harm, and informal settlements.

Options include:

- Leave the site out of the flight plan altogether (a **no-fly zone**).
- Fly it only with supervision from the relevant authority.
- Fly it with permission, but reduce the detail of the imagery afterwards, or restrict who can see it (see [Data Handling](/data-handling/)).

## Planning the mission

### How much detail do you need?

The level of detail in drone imagery is measured as **ground sampling distance (GSD)**: how much ground one pixel covers. A GSD of 4 cm means each pixel in the image shows a 4 x 4 cm patch of ground. A smaller number means more detail.

The detail you get depends mostly on how high you fly. **Fly at the highest altitude (within the legal limit) that still gives enough detail for the job.** Flying higher means:

- shorter flights and fewer batteries;
- far fewer photos, so much faster processing;
- less privacy risk.

Around **4 cm** per pixel is a good default. It clearly shows buildings, roofs, roads, and vehicles. A face (15-20 cm wide) covers only 4-5 pixels, which is usually not enough to recognize someone. As a rough rule of thumb, below about **3 cm** per pixel faces can start to become recognizable. Only capture that level of detail if the task requires it.

Lower resolution doesn't make imagery safe on its own, though. People can still be identified from where they are and what's around them: a distinctive house, a vehicle, a shelter in a particular camp. Think about the context, not just the pixel size (see [Data Handling](/data-handling/#3-protect-people-and-sensitive-places)).

Detail is also different from **positional accuracy**: how closely the map lines up with real-world coordinates. A small drone's GPS places the map within a few metres, which is fine for most assessments and for tracing buildings. If you need to measure accurately (for example heights, volumes, or exact boundaries), you'll need [ground control points or RTK](/glossary/#gcps-ground-control-points).

The table below uses the DJI Mini 4 Pro as a reference to show how quickly flying lower gets impractical. Your numbers will vary, but the pattern is the same.

| Altitude | GSD      | Flight time for 1 km² | Batteries | Photos | Processing on a laptop |
| :------- | :------- | :-------------------- | :-------- | :----- | :--------------------- |
| 120 m    | ~4.3 cm  | ~27 min               | 2         | ~740   | 6-13 hours             |
| 80 m     | ~2.9 cm  | ~59 min               | 3         | ~1,670 | 1-2.5 days             |
| 50 m     | ~1.8 cm  | ~148 min              | 6-8       | ~4,270 | Not realistic          |

_Planning estimates for a [DJI Mini 4 Pro](https://www.dji.com/mini-4-pro/specs) capturing 12 MP photos, with 80% front / 70% side overlap and around 20-25 minutes of useful flight per battery. Processing times are order-of-magnitude estimates for a field laptop with an 8 GB graphics card, not measured results. Processing time grows faster than the number of photos, so doubling the photos can more than double the time._

### Keep altitude the same across the project

If a large area is split into several flights, they should all be flown at the same height above the ground, within about 5 metres of each other. Uneven heights cause errors in the final map, especially in 3D outputs. In hilly areas, use a flight planner that can follow the terrain.

### Overlap and camera angle

To build a map, processing software stitches many photos together by finding the same features in neighbouring photos. So each photo needs to **overlap** with the ones around it, both along the flight line ("front" overlap) and between flight lines ("side" overlap).

| What you need                         | Front overlap | Side overlap |
| :------------------------------------ | :------------ | :----------- |
| A flat map (2D orthomosaic) only      | at least 70%  | at least 70% |
| 3D outputs (elevation models, meshes) | around 85%    | around 85%   |

These are starting points for straightforward sites flown at around 100-120 m. More overlap can improve results, but means longer flights and more photos.

The terrain makes a big difference. Some surfaces need extra overlap (80% or more) because the software struggles to match photos:

- **Trees and forest canopy**, where leaves look alike and move in the wind;
- **Sand, snow, and bare fields**, which look the same everywhere;
- **Water**, which reflects and changes from one photo to the next;
- **Dense buildings**, and flights at lower altitude.

For camera angle, point the camera nearly straight down, at about **80 degrees** rather than a full 90. A slight tilt gives the processing software more to work with, and produces noticeably better 3D reconstruction (and so a better final map).

### Always plan a structured mission

Mapping flights should be flown automatically, following a pre-planned grid made in a mission planner. A pilot flying by hand can't keep the right pattern and overlap. Check that the planned grid covers the whole area, plus a little extra around the edges.

When planning the grid:

- **Fly across the wind**, not into and against it. The drone keeps a steadier speed, which means more even photos and less battery used.
- **In hills, line the flight paths up with the contours**, so the drone keeps a more even height above the ground.
- **Overlap neighbouring flights** a little, so weak photos at the edges can be trimmed without leaving gaps.
- **Plan each flight to use no more than about 80% of a battery.** A small drone typically gives around 20 useful minutes. Expect less in wind, heat, at high elevation, or with older batteries.

Where you're allowed, it's also worth taking a few high-altitude overview or 360° photos. These are very useful for reports and briefings, even when a full mapping flight isn't possible.

### Know the limits

Extra overlap won't solve every problem. On water and other surfaces without clear, stable features, expect gaps or poor results.

Look at satellite imagery or online maps of the area beforehand. It helps you spot obstacles, likely take-off points, and areas that will be hard to map.

## Team and kit

### Team

- At least **two people**: a pilot, who watches the controller screen, and an observer, who watches the sky across the flight area at all times.
- For operations over several days, at least **three people** is better: two flying, and one processing the previous day's data. Rotate roles so people get rest. Evenings are largely taken up with charging batteries, backing up data, and planning the next day.

### Kit

A typical field kit includes:

- **Drone and controller**, with spare batteries, spare propellers, and memory cards.
- **External drives** for backups.
- **Optional:** satellite internet where there's no mobile signal, and a laptop for processing imagery in the field.
- **Tablet or phone** for flight planning and field notes, and radios for the team.
- **Safety gear**, such as high-visibility vests, and tape or spray paint for marking sites.
- **Power**: power banks, solar charging, a car inverter, and universal plug adapters. A step-down converter that charges batteries from a 12 V vehicle or moped battery is also useful.

Use memory cards rated **U3** or above. Slower cards can't save photos fast enough during a mapping flight.

Plan power for everything, not just the drone: laptops, tablets, and controllers need charging too, and electricity may be unreliable where you're staying.

### Travelling with batteries

Drone batteries are lithium polymer (LiPo) and can catch fire if damaged.

- Carry them in **fire-resistant LiPo bags**.
- Spare batteries go in **carry-on luggage** only, with the metal contacts taped or each battery in its own bag.
- Small drone batteries (under 100 Wh) are allowed as carry-on spares. Larger batteries (100-160 Wh) are limited to **2 per person**, with the airline's approval.
- **Power banks** are treated separately, and since 2026 are limited to **2 per person** ([IATA guidance on power banks](https://www.iata.org/contentassets/90f8038b0eea42069554b2f4530f49ea/guidance-to-operators---power-banks.pdf)).
- These rules change often, and some airlines are stricter, so get their battery policy **in writing** before you travel ([IATA guidance](https://www.iata.org/contentassets/6fea26dd84d24b26a7a1fd5788561d6e/passenger-lithium-battery.pdf)).

### Before you leave base

Run through the "before leaving base" section of the [Quick Checklist](/quick-checklist/).
