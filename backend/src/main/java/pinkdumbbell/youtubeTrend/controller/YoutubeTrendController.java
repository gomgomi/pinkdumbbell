package pinkdumbbell.youtubeTrend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import pinkdumbbell.youtubeTrend.domain.Contents;
import pinkdumbbell.youtubeTrend.domain.VideoData;
import pinkdumbbell.youtubeTrend.service.VideoDataService;

import java.util.HashMap;
import java.util.List;


@RestController
public class YoutubeTrendController {

    private final VideoDataService videoDataService;

    public YoutubeTrendController(VideoDataService videoDataService) {
        this.videoDataService = videoDataService;
    }

    //todayvideo (from: 0,size: 99,period: "weekly",nation: "KR",searchDate: "2020-08-10",category: "LIFE",order: "dailyViewCount")
    //데이터가 들어올 예정

    @GetMapping(value = "/videoData")
    @ResponseBody
    public List<VideoData> list(Model model) {
        List<VideoData> videoData = videoDataService.findVideoData();
        return videoData;
    }

    @RequestMapping(value = "/contents", method = RequestMethod.GET)
    public List<VideoData> contents(@RequestParam("page") int page,
                             @RequestParam("date") String date,
                             @RequestParam("period") String period)
    {
        Contents contents = new Contents();
        contents.setPage(page);
        contents.setDate(date);
        contents.setPeriod(period);

        List<VideoData> videoData = videoDataService.findVideoContents(contents);
        return videoData;
    }

    @GetMapping("/contents/{categoryId}")
    public Contents contentsOfCategoryId(@PathVariable("categoryId") int categoryId,
                                         @RequestParam("page") int page,
                                         @RequestParam("date") String date,
                                         @RequestParam("period") String period)
    {
        Contents contents = new Contents();
        contents.setCategoryId(categoryId);
        contents.setPage(page);
        contents.setDate(date);
        contents.setPeriod(period);

        return contents;
    }

    // 아래 코드는 참고용
    @GetMapping("hello-api")
    @ResponseBody
    public Hello helloApi(@RequestParam("name") String name) {
        Hello hello = new Hello();
        hello.setName(name);
        return hello;
        // 객체를 리터 하기 때문에 웹에서 확인 할 수 있다.
        // 이번 JDBC를 통해서 모든 데이터를 JSON으로 표현 하면 될 것 같다.
    }

    static class Hello {
        private String name;
        public String getName() {
            return name;
        }
        public void setName(String name) {
            this.name = name;
        }
    }
}
