---
layout: base.njk
title: Data Handling Guide
description: Processing, protecting, and sharing drone imagery after the flight.
---

# Data Handling Guide

**Processing, protecting, and sharing drone imagery after the flight.**

---

A mapping flight produces hundreds or thousands of photos. Back them up, process them into maps, check for sensitive content, and share them with the people who need them.

## 1. Back up first

Before you process, rename, or delete anything, **copy the raw photos somewhere safe**: an external drive, and an online store as soon as you have a connection. Memory cards and laptops fail, and the photos usually can't be retaken.

Keep folders organized and named consistently (for example by date, site, and flight), so others can find their way around. Most drones save every flight into the same folder, so use the time each photo was taken to split them up.

Before processing, exclude test shots, blurry or badly exposed photos, and photos taken outside the mapping area. Check photos from aborted flights before deciding whether to use them.

## 2. Processing

Processing (sometimes called **photogrammetry**) stitches the photos into usable outputs:

- An **orthomosaic**: one large, flat, top-down map image, corrected so distances can be measured on it, like a very detailed satellite image.
- **Elevation models**: height maps of the ground and of everything on it (buildings, trees).
- **3D models** of the area, where the overlap allows.

Check that the photos have location data, process them, crop to the area of interest, then check the outputs for gaps or obvious errors.

### Online or on a laptop?

- **Cloud processing** is usually better when there are several sites, when the outputs need to be shared with a remote mapping team, or when the dataset is large.
- **Processing on a laptop** works offline, but large datasets can take days (see the table in [Flight Planning](/flight-planning/#how-much-detail-do-you-need)).

Upload photos as early as your connection allows, rather than waiting until everything is processed locally.

Open-source tools such as [OpenDroneMap](https://opendronemap.org) and the [Drone Tasking Manager](https://drone.hotosm.org) make processing possible without expensive licences.

## 3. Protect people and sensitive places

Drone imagery can show far more than satellite imagery: people, vehicles, number plates, and what's happening on private property. Handle anything that could identify someone with the same care as any other personal data.

This applies to the **raw photos** as much as the finished map. Raw photos are often more revealing, as they're taken at angles and include more detail. Keep them in storage only the team can access, and **never upload sensitive raw data to a public platform**.

Before imagery is shared beyond the response team:

- **Check what's in it.** Look for identifiable people, vehicles, and sensitive sites (health facilities, places where people are at risk of harm, informal settlements, military sites).
- **Blur or mask** faces, number plates, and anything else identifiable that the assessment doesn't need. This is especially important for very detailed imagery (roughly below 3 cm per pixel).
- **Reduce the detail** of imagery over sensitive areas, for example down to a level similar to commercial satellite imagery.
- **Restrict access** where needed. Not everything has to be public. Some products should only go to specific partners.

Decide this _before_ imagery reaches public websites or social media. Once it's out, it can't be taken back.

## 4. Sharing

### Use standard formats

Agree with whoever will use the data what format they need, early in the response. Standard formats make that easy:

- **Maps and elevation models**: Cloud Optimized GeoTIFF (COG), the widely used standard. A COG can be viewed on the web without downloading the whole file.
- **Point clouds** (the millions of 3D points that make up a 3D model): Cloud Optimized Point Cloud (COPC).
- **3D meshes** have several competing formats, and are out of scope for this guide.

### Keep the best version

Files are large, and connections in the field are slow. Instead of shrinking or compressing your best output, keep the full-quality original and make smaller copies for specific uses. For example, a lighter, offline map layer that field teams can load on their phones.

### Share openly, where it's safe

Where there are no protection concerns, share imagery openly so others don't need to fly the same area. [OpenAerialMap](https://openaerialmap.org) is a free, open platform for this. Open imagery can also be used to update [OpenStreetMap](https://www.openstreetmap.org), which many responders rely on.

The imagery should serve the affected population and local responders, not only the organization that collected it.

If you share data with the same partners regularly, agree once how formats, transfers, and access will work, and reuse that.

## 5. Handing over

When a response winds down, hand the data over to the national disaster management authority (or the agreed local owner). Agree the details early, not on the last day:

- **who** receives the data, and who else they can share it with;
- **what** is included: raw photos, processed outputs, flight plans, and flight logs;
- **restrictions** on sensitive content, and notes explaining them;
- **how long** the data will be kept, and when copies held by your own organization will be deleted.

Include a short note with the data covering when it was captured, the area covered, the coordinate system, any known gaps or problems, and the terms for reusing it.

Good records mean local teams can carry on monitoring, compare future imagery, and use the data long after international teams have left.
