package pinkdumbbell.youtubeTrend.domain;

import java.util.List;

public interface VideoDataRepository {
    List<VideoData> findVideoID();
    List<VideoData> findVideoContents(Contents contents);
    List<VideoData> findVideoCategoryId(Contents contents);
}
