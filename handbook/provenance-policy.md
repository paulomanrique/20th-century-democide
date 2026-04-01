# Provenance Policy

For each preserved item, record:

- canonical original URL;
- final source URL used for capture;
- capture timestamp in UTC;
- source type: `original`, `mirror`, or `wayback`;
- content type;
- sha256 of the raw capture;
- local storage path for raw and normalized versions.

Source priority order:

1. Original live URL.
2. Original URL after protocol or redirect correction.
3. Known self-authored mirror.
4. Wayback snapshot.
5. `blocked` if no acceptable source exists.
