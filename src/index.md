---
layout: base.njk
title: Using Drones Responsibly
description: Practical guidance for humanitarian and community drone mapping.
---

# Flying Drones: Ethics, Risks, and Responsible Practice

**Practical guidance for humanitarian and community drone mapping.**

_First draft - Oct 2026_

DOI: [10.5281/zenodo.23482975](https://doi.org/10.5281/zenodo.23482975)

---

## Collaborators

This guide was developed with partners and is supported by the following organizations:

<div class="collaborator-logos">
  <a href="https://www.hotosm.org" target="_blank" rel="noopener noreferrer">
    <img src="/images/hotosm-logo.png" alt="Humanitarian OpenStreetMap Team" width="330" height="80" loading="lazy">
  </a>
  <a href="https://www.hi.org/en/atlas-logistique" target="_blank" rel="noopener noreferrer">
    <img src="/images/atlas-logistique-logo.png" alt="Atlas Logistique" width="330" height="80" loading="lazy">
  </a>
</div>

## Introduction

Small drones have become cheap, capable, and easy to fly. A consumer drone costing under US$1,000 can now capture imagery that would have needed a professional survey team a few years ago.

That makes detailed mapping accessible to more teams. After a disaster, drones can show the extent of damage within hours, reach places that are cut off, and give local teams the detail they need to make decisions. Before a disaster, they can map communities that satellites show poorly or not at all.

But drones also fly over **people**, and in a humanitarian response many of them have just been affected by a crisis. Those people can see and hear the aircraft, and they invariably have concerns or questions, or perhaps even trauma associated with larger drones. When several organizations arrive at once, there is also a real risk of duplicated work, confused authorities, and imagery that never reaches the people who need it.

This guide brings together what humanitarian and development partners have learnt from flying in the field. It's written for anyone planning, commissioning, or flying drone missions, including people who have never flown a drone before. Technical terms are explained where they first appear, and are collected in the [glossary](/glossary/).

### How this guide is organized

- **[Coordination](/coordination/)** - who decides what gets flown during an emergency, and how to avoid overlap.
- **[Flight Planning](/flight-planning/)** - permissions, consent, and planning a mission before you go to the field.
- **[Drone Operators](/drone-operators/)** - information about responsibly operating drones in the field.
- **[Data Handling](/data-handling/)** - processing, protecting, and sharing the imagery afterwards.
- **[Quick Checklist](/quick-checklist/)** - a printable checklist for a drone bag.

## Core principles

1. **Coordinate before you fly.** Register your plans with whoever is coordinating aerial work in the area. Two teams flying the same site is wasted effort, and an unknown drone can cause alarm.
2. **Local capacity first.** If there are trained local drone operators nearby, work with them before flying people in. They are usually faster, they know the context, and the skills stay in the country.
3. **Consider people and communities.** Tell local authorities and community leaders before you fly. Successful community engagement is part of deciding whether to fly or not.
4. **Collect only what you need.** Fly at the highest altitude that still gives enough detail for the job. More detail means more privacy risk, longer flights, and slower processing.
5. **Protect sensitive data.** Some places and people need protecting. Blur, mask, or restrict imagery before it goes anywhere public.
6. **Share it back.** The imagery should serve the affected population and local authorities, not just the organization that collected it. Agree early on who the data goes to at the end, and how it can be accessed.

## When is a drone the right tool?

Drones are not always the best option. Satellites, manned aircraft (planes and helicopters), and drones each have a place, and a response often uses more than one.

|                       | Satellite                          | Manned aircraft                       | Drone                                   |
| :-------------------- | :--------------------------------- | :------------------------------------ | :-------------------------------------- |
| **Area covered**      | Very large (whole regions)         | Large                                 | Small (around 1-25 km² per day)         |
| **Level of detail**   | Lower (30-50 cm per pixel)         | Medium                                | Very high (2-10 cm per pixel)           |
| **Time to get it**    | 10 hours to a few days             | Days, depending on availability       | Hours, once on site with permits        |
| **Blocked by cloud?** | Yes                                | Sometimes                             | No, but wind and rain stop flights      |
| **Main limits**       | Resolution, licensing, cloud cover | Cost, availability, fixed flight path | Small area per flight, permits, weather |

As a rule of thumb:

- **Satellite imagery** gives the quickest first overview of a large area.
- **Manned aircraft** (where available) let people see large or cut-off areas directly, early in a response.
- **Drones** add fine detail over specific priority sites once teams have access and permission.

A drone is well suited to capturing high detail over a small area, such as a damaged neighbourhood, a displacement site, or a remote village. It is not suited to surveying an entire province.

### A note on drone size

This guide focuses on small drones weighing **under 250 grams**. Aviation authorities around the world commonly use 250 g as the line between a lightly regulated "flying camera" and a larger aircraft that needs stricter rules.

At this size, a drone is far less dangerous than larger aircraft if something goes wrong. They are also cheap enough that a local team can afford several, rather than relying on one expensive consultant.

Many countries don't require a pilot licence for these drones, but registration may still be required. In the EU, for example, operators of camera-equipped drones generally need to register, even below 250 g. Always check the local rules.

Larger drones still have their place, for example for very large areas. The principles in this guide apply to them too, but expect more paperwork obligation.

## Sources and further reading

This guide draws on:

- Draft coordination and technical guidance prepared by the partners involved in this framework, adapted in part from the Atlas Logistique RISA (Rapid Infrastructure and Service Assessment) Standard Operating Procedure.
- The [Drone Tasking Manager documentation](https://docs.drone.hotosm.org), HOT.
- World Bank and Humanitarian OpenStreetMap Team (2019). _Technical Guidelines for Small Island Mapping with UAVs._ CC BY 4.0. Several sections are adapted from this.
- IFRC (2020). _Images from Above: Guidance on Aerial Imagery for Emergency Operations._
- OCHA. _Practical Guidance for Conducting Aerial Assessments - Satellite, Manned Aircraft and UAS._
- [UAViators Humanitarian UAV Code of Conduct](http://uaviators.org/docs).
