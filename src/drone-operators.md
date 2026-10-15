---
layout: base.njk
title: Drone Operators Guide
description: Information that every person flying a drone in the field should know.
---

# Drone Operators Guide

**Information that every person flying a drone in the field should know.**

---

This page assumes the mission has already been planned and approved (see [Flight Planning](/flight-planning/)). It covers flying safely and capturing usable imagery.

For step-by-step setup of specific drones and apps, see the [Drone Tasking Manager docs](https://docs.drone.hotosm.org).

## Safety first

- **Keep a clear view of the sky.** Fly within **visual line of sight (VLOS)**, as most countries require. At mapping altitude, a small drone is often only a speck in the sky, and sun glare can make it hard to follow. What matters most is a clear, unobstructed view of the whole area the drone will fly over, so that you can see other aircraft, birds, and obstacles before the drone reaches them.
- **Pilot and observer.** The pilot watches the screen. The observer watches the sky across the flight area, keeping the drone in view where possible, and calls out anything approaching. Use clear, loud calls at every step from take-off to landing.
- **Keep clear of people.** Don't fly low over crowds, animals, buildings, or power lines. Avoid filming individuals.
- **Follow local rules** on altitude, speed, and distance.
- **If in doubt, don't fly.** If you're unsure about even one condition (weather, airspace, the drone itself), postpone. If an error message appears on the controller, don't take off.

### Learn to fly by hand

Even though mapping flights are automatic, every pilot must be able to take control manually. Problems happen most at take-off and landing, and that's when you need to step in. Practice hovering in place, flying simple patterns, and landing precisely before flying in the field.

### Understand the safety features

- **Return to Home (RTH)** brings the drone back to its home point. Check the home point and RTH altitude before every flight, and confirm what triggers RTH on your drone (see [Emergencies](#emergencies)).
- **Obstacle avoidance** uses sensors to stop the drone before it hits something. Don't rely on it completely; it can miss thin things like wires and branches.
- **Signal loss** can come from distance, hills, buildings, trees, or radio interference (phone towers, power lines, other drones). Fly from open, high ground where you can, and point the controller antennas at the drone.
- Turn the **controller on first and off last**, so you always have control while the drone is powered.

## Picking a take-off spot

- Choose a flat, clear, safe spot, away from people and traffic. Clear away loose debris.
- In hilly areas, take off from **high natural ground** with a clear view across the area. One good spot can often cover several neighbouring flights.
- Avoid taking off from a rooftop. Many flight plans set height relative to the ground at the take-off point, so the drone may fly lower than planned. If you must, check how your planner handles take-off height.

## Getting good imagery

Most image problems can't be fixed later. Poor-quality photos usually mean the area must be flown again.

### Light and weather

- Fly between about **10am and 2pm**. A high sun means short shadows and more even light.
- Avoid dawn and dusk, when long shadows make the map harder to stitch and read.
- Prefer stable skies: either clear or evenly overcast. Patchy clouds moving across the area cause light and dark patches in the final map. Waiting 15-30 minutes often helps.
- Fly only in **light wind** (below about 20 km/h for small drones).
- If conditions change during a mission, pause or stop. A partial mission in good light is worth more than a complete one in mixed light.
- In the heat, keep the controller (and yourself) in the shade to stop it overheating.

### Camera settings

- Keep the **zoom at 1x**. On many small drones, zoomed photos still record the 1x camera settings, so processing software can't stitch them into a map, and the area will need to be flown again. It's easy to nudge the zoom wheel by accident, so check it before take-off and during the flight.
- Use **photo mode in 4:3 format**, not 16:9 (which crops the image).
- **Use 12 MP and JPEG for routine mapping on the small drones covered here.** Higher resolution and RAW (DNG) files need more storage and processing, and can slow photo capture. Check the settings before take-off.
- **The faster the shutter speed, the better.** Aim for 1/2000 of a second or faster on a moving drone, and never slower than 1/1000. Motion blur can't be fixed after the flight.
- Avoid **full auto** exposure. Each photo ends up slightly different in brightness and colour, which shows up as patches in the final map. In stable light, fix the settings manually. In changing light, measure once and lock the exposure for the mission.

### Fly the plan

- Fly the planned mission automatically. Don't try to fill gaps by flying manually; extend the plan and fly again instead.
- **Only take photos on the mapping lines.** Start at the first waypoint and stop after the last line. Photos taken on the way there and back can distort the map; on some drones, leaving the photo timer running can also prevent the return home.
- Keep the same height above ground and camera settings across the project. Check the plan if you change take-off spots.
- Watch the battery, altitude, and live camera view during the flight.

### Check before you leave

**Review the photos on site, before you leave.** Check the whole area was covered and the photos are sharp and correctly exposed. Flying a missed patch again takes minutes while you're there, and days if you've already left.

## Emergencies

| Situation                       | What to do                                                                |
| :------------------------------ | :------------------------------------------------------------------------ |
| Rain or strong wind coming      | Press Return to Home (or your drone's equivalent) and land                |
| Need to stop and think          | Pause the mission so the drone hovers in place                           |
| You feel disoriented            | Let go of both sticks; with a good GPS signal, most drones will hover    |
| A bird is approaching           | Fly straight up                                                           |
| A plane or helicopter is nearby | Descend and land straight away                                            |
| The drone stops responding      | Warn people nearby, and keep watching it. Its signal-loss setting decides what happens next |

Before flying, check what your drone does when it loses signal. Depending on the model and settings, it may return home, hover, land, or carry on with the mission.

## Batteries and kit care

- After landing, remove the battery and let it cool. It should be warm, not hot.
- Never use a battery that is swollen, cracked, or damaged.
- Check propellers before every flight. Replace any that are chipped or cracked.
- Don't modify the drone or its parts. Small changes can cause a crash.
- Mark the drone, controller, and batteries so each set stays together.

## End of the day

- **Back up the photos** before doing anything else (see [Data Handling](/data-handling/)).
- Charge everything for tomorrow.
- **Hold a short debrief**, especially in the first days. Talk through problems with flight plans, batteries, take-off spots, weather, signal, or access, and anything that made flying safer or faster. Problems identified early save significant time later.
