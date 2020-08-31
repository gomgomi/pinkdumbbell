package pinkdumbbell.youtubeTrend.repository;

import pinkdumbbell.youtubeTrend.domain.Contents;
import pinkdumbbell.youtubeTrend.domain.VideoDataRepository;
import pinkdumbbell.youtubeTrend.domain.VideoData;

import java.util.ArrayList;
import java.util.List;

public class SearchVideoDataRepository implements VideoDataRepository {
    public List<VideoData> findVideoID(){return new ArrayList<>();}
    public List<VideoData> findVideoContents(Contents contents){return new ArrayList<>();}
    public List<VideoData> findVideoCategoryId(Contents contents){return new ArrayList<>();}
}
