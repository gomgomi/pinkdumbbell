package pinkdumbbell.youtubeTrend.domain;

import java.util.List;

public interface VideoDataRepository {
    List<VideoData> findVideoID();
}
